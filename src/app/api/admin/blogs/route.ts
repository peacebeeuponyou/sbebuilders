import { getCollection, updateCollection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const blogs = await getCollection("blogs");
  return NextResponse.json(blogs);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const blogs = await getCollection("blogs");
    
    // Generate simple ID if not provided (slugify title)
    const newBlog = {
      ...body,
      id: body.id || body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      date: body.date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    };

    const updatedBlogs = [newBlog, ...blogs];
    await updateCollection("blogs", updatedBlogs);
    
    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
  }
}
