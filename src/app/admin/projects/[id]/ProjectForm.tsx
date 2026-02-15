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

interface ProjectFormProps {
  initialData?: any;
}

export function ProjectForm({ initialData }: ProjectFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    category: initialData?.category || "",
    location: initialData?.location || "",
    year: initialData?.year || new Date().getFullYear().toString(),
    description: initialData?.description || "",
    image: initialData?.image || "https://images.unsplash.com/photo-1600596542815-e32c21216f53?q=80&w=1000&auto=format&fit=crop",
    stats: {
      area: initialData?.stats?.area || "",
      duration: initialData?.stats?.duration || "",
      value: initialData?.stats?.value || "",
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.name.startsWith("stats.")) {
      const statName = e.target.name.split(".")[1];
      setFormData({
        ...formData,
        stats: { ...formData.stats, [statName]: e.target.value }
      });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = initialData 
        ? `/api/admin/projects/${initialData.id}` 
        : "/api/admin/projects";
      
      const method = initialData ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/admin/projects");
        router.refresh();
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Error saving project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/admin/projects"><ArrowLeft className="h-4 w-4" /></Link>
        </Button>
        <div className="flex-1"></div>
        <Button type="submit" disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {initialData ? "Update Project" : "Create Project"}
        </Button>
      </div>

      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Project Title</Label>
            <Input 
              id="title" 
              name="title" 
              placeholder="Enter project title" 
              value={formData.title} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input 
                id="category" 
                name="category" 
                placeholder="e.g. Residential, Commercial" 
                value={formData.category} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input 
                id="location" 
                name="location" 
                placeholder="City, State" 
                value={formData.location} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="year">Year</Label>
              <Input 
                id="year" 
                name="year" 
                placeholder="YYYY" 
                value={formData.year} 
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
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              name="description" 
              placeholder="Project details..." 
              className="h-32"
              value={formData.description} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="border-t pt-6">
            <h3 className="font-medium mb-4">Project Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="stats.area">Area (sq ft)</Label>
                <Input 
                  id="stats.area" 
                  name="stats.area" 
                  placeholder="e.g. 5,000 sq ft" 
                  value={formData.stats.area} 
                  onChange={handleChange} 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stats.duration">Duration</Label>
                <Input 
                  id="stats.duration" 
                  name="stats.duration" 
                  placeholder="e.g. 14 Months" 
                  value={formData.stats.duration} 
                  onChange={handleChange} 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stats.value">Value</Label>
                <Input 
                  id="stats.value" 
                  name="stats.value" 
                  placeholder="e.g. $2.5M" 
                  value={formData.stats.value} 
                  onChange={handleChange} 
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
