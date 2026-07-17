import { createHmac, timingSafeEqual } from "node:crypto";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function signaturesMatch(signature: string, body: string, secret: string) {
  const expected = `sha256=${createHmac("sha256", secret).update(body).digest("hex")}`;
  const receivedBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  return receivedBuffer.length === expectedBuffer.length && timingSafeEqual(receivedBuffer, expectedBuffer);
}

export async function POST(request: Request) {
  const body = await request.text();
  let payload: { verification_token?: string };
  try {
    payload = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  if (payload.verification_token) {
    const configuredSecret = process.env.NOTION_WEBHOOK_SECRET;
    if (configuredSecret && payload.verification_token !== configuredSecret) {
      return NextResponse.json({ error: "Invalid verification token." }, { status: 401 });
    }
    return NextResponse.json({ verification_token: payload.verification_token });
  }

  const secret = process.env.NOTION_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "NOTION_WEBHOOK_SECRET is not configured." }, { status: 500 });
  }

  const signature = request.headers.get("x-notion-signature");
  if (!signature || !signaturesMatch(signature, body, secret)) {
    return NextResponse.json({ error: "Invalid webhook signature." }, { status: 401 });
  }

  revalidateTag("honorees");
  return NextResponse.json({ revalidated: true });
}
