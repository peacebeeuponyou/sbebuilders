"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";

interface BlogFormProps {
  initialData?: any;
}

export function BlogForm({ initialData }: BlogFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    excerpt: initialData?.excerpt || "",
    content: initialData?.content || "",
    author: initialData?.author || "",
    category: initialData?.category || "",
    image: initialData?.image || "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = initialData 
        ? `/api/admin/blogs/${initialData.id}` 
        : "/api/admin/blogs";
      
      const method = initialData ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/admin/blogs");
        router.refresh();
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Error saving post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/admin/blogs"><ArrowLeft className="h-4 w-4" /></Link>
        </Button>
        <div className="flex-1"></div>
        <Button type="submit" disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {initialData ? "Update Post" : "Publish Post"}
        </Button>
      </div>

      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Post Title</Label>
            <Input 
              id="title" 
              name="title" 
              placeholder="Enter post title" 
              value={formData.title} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="author">Author</Label>
              <Input 
                id="author" 
                name="author" 
                placeholder="Author name" 
                value={formData.author} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input 
                id="category" 
                name="category" 
                placeholder="e.g. Construction, Design" 
                value={formData.category} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Featured Image URL</Label>
            <Input 
              id="image" 
              name="image" 
              placeholder="https://..." 
              value={formData.image} 
              onChange={handleChange} 
            />
            {formData.image && (
              <div className="mt-2 relative h-40 w-full rounded-md overflow-hidden bg-muted">
                <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt (Short Summary)</Label>
            <Textarea 
              id="excerpt" 
              name="excerpt" 
              placeholder="Brief description for cards..." 
              className="h-20"
              value={formData.excerpt} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content (HTML Supported)</Label>
            <Textarea 
              id="content" 
              name="content" 
              placeholder="Write your content here... Use <h2>, <p>, etc." 
              className="h-64 font-mono text-sm"
              value={formData.content} 
              onChange={handleChange} 
              required 
            />
            <p className="text-xs text-muted-foreground">Tip: You can use HTML tags for formatting.</p>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
