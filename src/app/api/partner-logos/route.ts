import { Client } from "@notionhq/client";
import { NextResponse } from 'next/server';

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY!,
});

// Use the partner database ID from environment variables
const databaseId = process.env.NOTION_PARTNERS_DATABASE_ID!;

export async function GET() {
  try {
    // Retrieve the database to get its data sources.
    const database = await notion.databases.retrieve({
      database_id: databaseId,
    }) as any;

    // Get the first data source.
    const dataSource = database.data_sources?.[0];

    if (!dataSource) {
      console.error("No data sources found for the partner database.");
      return NextResponse.json({ error: "No data sources found for the partner database." }, { status: 500 });
    }

    // Query pages from the specific data source using the data source ID.
    const pagesResponse = await notion.dataSources.query({
      data_source_id: dataSource.id,
    });

    // Process the results to extract partner logos and names
    const partners = await Promise.all(pagesResponse.results.map(async (page: any) => {
      const properties = page.properties;
      // Extract Name and Logo URL from the properties
      const name = properties.Name?.title?.[0]?.plain_text || 'Untitled Partner';
      const logoUrl = properties.Logo?.url || null; // Assuming 'Logo' is the property name for the logo URL

      return {
        id: page.id, // Add the unique page ID
        name,
        logoUrl,
      };
    }));

    // Filter out entries without a logo URL before returning
    const validLogos = partners.filter(partner => partner.logoUrl !== null);

    return NextResponse.json(validLogos);

  } catch (error: any) {
    console.error("Error fetching partners from Notion API:", error);
    const errorMessage = error.message || "An unknown error occurred";
    return NextResponse.json({ error: `Failed to fetch partners: ${errorMessage}` }, { status: 500 });
  }
}
