import { getCollection, updateCollection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const seo = await getCollection("seo");
  return NextResponse.json(seo);
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    await updateCollection("seo", body);
    return NextResponse.json(body);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update SEO" }, { status: 500 });
  }
}
