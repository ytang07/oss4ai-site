/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "www.notion.so", // Notion domain for images
      },
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.amazonaws.com", // Notion domain for files
      },
    ],
  },
};

module.exports = nextConfig;
