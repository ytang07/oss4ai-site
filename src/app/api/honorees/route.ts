import { NextResponse } from "next/server";
import { getHonorees } from "@/lib/honorees";

export async function GET() {
  try {
    return NextResponse.json(await getHonorees());
  } catch (error: any) {
    console.error("Error fetching honorees from Notion API:", error);
    return NextResponse.json({ error: `Failed to fetch honorees: ${error.message || "Unknown error"}` }, { status: 500 });
  }
}
