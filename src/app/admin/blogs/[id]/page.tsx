import { getDB } from "@/lib/db";
import { BlogForm } from "./BlogForm";

export default async function BlogEditorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const isNew = id === "new";
  
  let blog = null;
  if (!isNew) {
    const db = await getDB();
    blog = db.blogs.find((b: any) => b.id === id);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-heading">{isNew ? "Create New Post" : "Edit Post"}</h1>
        <p className="text-muted-foreground">{isNew ? "Write something amazing." : "Update your content."}</p>
      </div>

      <div className="max-w-3xl">
        <BlogForm initialData={blog} />
      </div>
    </div>
  );
}
