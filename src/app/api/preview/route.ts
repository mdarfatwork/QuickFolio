import { NextResponse } from "next/server";

let latestHTML = "";

export async function POST(req: Request) {
  const { html } = await req.json();
  latestHTML = html;
  return NextResponse.json({ success: true });
}

export async function GET() {
  if (!latestHTML) {
    return NextResponse.json({ error: "No portfolio generated yet" }, { status: 404 });
  }
  return new NextResponse(latestHTML, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
