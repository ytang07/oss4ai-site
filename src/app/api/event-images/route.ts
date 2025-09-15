import { Client } from "@notionhq/client";
import { NextResponse } from 'next/server';

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY!,
});

const databaseId = process.env.NEXT_PUBLIC_NOTION_EVENT_DATABASE_ID!;

export async function GET() {
  try {
    // Retrieve the database to get its data sources.
    // Note: TypeScript might complain about 'data_sources' not existing on GetDatabaseResponse,
    // but it should be available at runtime based on Notion API changes after 2025-09-03.
    const database = await notion.databases.retrieve({
      database_id: databaseId,
    }) as any; // Using 'as any' to bypass potential TypeScript type mismatches

    // Get the first data source.
    const dataSource = database.data_sources?.[0];

    if (!dataSource) {
      console.error("No data sources found for the database.");
      return NextResponse.json({ error: "No data sources found for the database." }, { status: 500 });
    }

    // Query pages from the specific data source using the data source ID.
    // The endpoint is /v1/data_sources/{data_source_id}/query
    const pagesResponse = await notion.dataSources.query({
      data_source_id: dataSource.id, // Correct parameter name based on documentation
      // You might need to add filter or sort parameters here if necessary
    });

    // Process the results
    const events = await Promise.all(pagesResponse.results.map(async (page: any) => {
      const properties = page.properties;
      // Extract Title, Image URL, and Caption from the linked page
      const title = properties.Caption?.title?.[0]?.plain_text || 'Untitled Event';
      const imageUrl = properties.Image?.url || null;

      return {
        id: page.id, // Add the unique page ID
        title,
        imageUrl, // Include caption in the returned object
      };
    }));

    // Filter out entries without an image URL before returning
    const validImages = events.filter(event => event.imageUrl !== null);

    return NextResponse.json(validImages);

  } catch (error: any) {
    console.error("Error fetching events from Notion API:", error);
    // Provide a more specific error message if possible
    const errorMessage = error.message || "An unknown error occurred";
    return NextResponse.json({ error: `Failed to fetch events: ${errorMessage}` }, { status: 500 });
  }
}
