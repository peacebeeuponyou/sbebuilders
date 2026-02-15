import { getDB } from "@/lib/db";
import { ProjectForm } from "./ProjectForm";

export default async function ProjectEditorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const isNew = id === "new";
  
  let project = null;
  if (!isNew) {
    const db = await getDB();
    project = db.projects.find((p: any) => p.id === id);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-heading">{isNew ? "Create New Project" : "Edit Project"}</h1>
        <p className="text-muted-foreground">{isNew ? "Add a new project to your portfolio." : "Update project details."}</p>
      </div>

      <div className="max-w-3xl">
        <ProjectForm initialData={project} />
      </div>
    </div>
  );
}
