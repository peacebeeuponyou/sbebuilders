import { getCollection, updateCollection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const projects = await getCollection("projects");
  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const projects = await getCollection("projects");
    
    // Generate simple ID if not provided (slugify title)
    const newProject = {
      ...body,
      id: body.id || body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    };

    const updatedProjects = [newProject, ...projects];
    await updateCollection("projects", updatedProjects);
    
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}
