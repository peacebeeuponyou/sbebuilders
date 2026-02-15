import { getCollection, updateCollection } from "@/lib/db";
import { NextResponse } from "next/server";

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

export async function PUT(request: Request, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await request.json();
    const blogs = await getCollection("blogs");
    
    const index = blogs.findIndex((b: any) => b.id === id);
    if (index === -1) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    const updatedBlog = { ...blogs[index], ...body };
    blogs[index] = updatedBlog;
    
    await updateCollection("blogs", blogs);
    return NextResponse.json(updatedBlog);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update blog" }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: RouteParams) {
  try {
    const { id } = await params;
    const blogs = await getCollection("blogs");
    
    const filteredBlogs = blogs.filter((b: any) => b.id !== id);
    if (filteredBlogs.length === blogs.length) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    
    await updateCollection("blogs", filteredBlogs);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
  }
}
