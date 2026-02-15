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
    const projects = await getCollection("projects");
    
    const index = projects.findIndex((p: any) => p.id === id);
    if (index === -1) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    const updatedProject = { ...projects[index], ...body };
    projects[index] = updatedProject;
    
    await updateCollection("projects", projects);
    return NextResponse.json(updatedProject);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: RouteParams) {
  try {
    const { id } = await params;
    const projects = await getCollection("projects");
    
    const filteredProjects = projects.filter((p: any) => p.id !== id);
    if (filteredProjects.length === projects.length) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }
    
    await updateCollection("projects", filteredProjects);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
  }
}
