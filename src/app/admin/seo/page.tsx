import { getDB } from "@/lib/db";
import { SEOForm } from "./SEOForm";

export default async function SEOPage() {
  const db = await getDB();
  const seo = db.seo;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-heading">SEO Management</h1>
        <p className="text-muted-foreground">Manage global and page-specific SEO metadata.</p>
      </div>

      <SEOForm initialData={seo} />
    </div>
  );
}
