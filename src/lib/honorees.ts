import { unstable_cache } from "next/cache";
import { Client } from "@notionhq/client";

export type Field = { label: string; value: string; url: string | null };
export type Honoree = { id: string; name: string; recognition: string | null; fields: Field[]; imageUrl: string | null };

const sectionOrder = ["STAR", "Pioneer", "Catalyst"] as const;

function plainText(items: any[] = []) {
  return items.map((item) => item.plain_text || item.text?.content || "").join("").trim();
}

function propertyText(property: any): string | null {
  if (!property) return null;

  switch (property.type) {
    case "title":
    case "rich_text":
      return plainText(property[property.type]);
    case "select":
      return property.select?.name || null;
    case "multi_select":
      return property.multi_select?.map((item: any) => item.name).join(", ") || null;
    case "url":
    case "email":
    case "phone_number":
      return property[property.type] || null;
    case "number":
      return property.number === null ? null : String(property.number);
    case "checkbox":
      return property.checkbox ? "Yes" : "No";
    case "date":
      return property.date?.start || null;
    default:
      return null;
  }
}

function imageUrl(property: any): string | null {
  if (!property) return null;
  if (property.type === "url") return property.url || null;
  if (property.type === "files") {
    const file = property.files?.[0];
    return file?.file?.url || file?.external?.url || null;
  }
  return null;
}

function findProperty(properties: Record<string, any>, names: string[]) {
  return Object.entries(properties).find(([key]) =>
    names.some((name) => key.toLowerCase() === name.toLowerCase()),
  );
}

async function fetchHonorees(): Promise<Honoree[]> {
  const databaseId = process.env.NOTION_RECOGNITION_DATABASE_ID;
  if (!databaseId) throw new Error("NOTION_RECOGNITION_DATABASE_ID is not configured.");

  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const database = await notion.databases.retrieve({ database_id: databaseId }) as any;
  const dataSource = database.data_sources?.[0];
  if (!dataSource) throw new Error("No data source found for the recognition database.");

  const response = await notion.dataSources.query({ data_source_id: dataSource.id });
  return response.results.map((page: any) => {
    const properties = page.properties || {};
    const recognitionEntry = findProperty(properties, ["recognition"]);
    const titleEntry = findProperty(properties, ["name", "title", "honoree", "honoree name"])
      || Object.entries(properties).find(([, property]: any) => property.type === "title");
    const recognition = propertyText(recognitionEntry?.[1]);
    const name = propertyText(titleEntry?.[1]) || "Unnamed honoree";
    const fields = Object.entries(properties)
      .filter(([key]) => key !== recognitionEntry?.[0] && key !== titleEntry?.[0])
      .map(([label, property]: [string, any]) => ({ label, value: propertyText(property), url: property.type === "url" ? property.url : null }))
      .filter((field): field is Field => Boolean(field.value));
    const imageEntry = Object.entries(properties).find(([key, property]: [string, any]) =>
      /image|photo|avatar|headshot/i.test(key) && Boolean(imageUrl(property)),
    );

    return { id: page.id, name, recognition, fields, imageUrl: imageEntry ? imageUrl(imageEntry[1]) : null };
  }).filter((honoree) => sectionOrder.includes(honoree.recognition as typeof sectionOrder[number]));
}

export const getHonorees = unstable_cache(fetchHonorees, ["honorees"], {
  revalidate: 86400,
  tags: ["honorees"],
});
