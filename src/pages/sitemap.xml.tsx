import { GetServerSideProps } from 'next';
import companyData from '../data/companyData.json';

const Sitemap = () => {};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://www.oss4.ai';

  const staticPages = [
    '',
    '/partners',
    '/participants',
    // '/faq',
    // '/contact',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((page) => {
          return `
            <url>
              <loc>${baseUrl}${page}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.7</priority>
            </url>
          `;
        })
        .join('')}
      ${companyData.filter(companyData => companyData.isCommunitySponsor)
        .map((partner) => {
          return `
            <url>
              <loc>${baseUrl}/partner/${partner.slug}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.8</priority>
            </url>
          `;
        })
        .join('')}
      ${companyData.filter(companyData => !companyData.isCommunitySponsor)
        .map((participant) => {
          return `
            <url>
              <loc>${baseUrl}/participant/${participant.slug}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.6</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;