"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SEOForm({ initialData }: { initialData: any }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialData);

  const handleChange = (page: string, field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [page]: {
        ...prev[page],
        [field]: value
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/admin/seo", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.refresh();
        alert("SEO settings updated!");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Error saving settings");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="flex justify-end">
        <Button type="submit" disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="global" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 h-auto">
          {Object.keys(formData).map((key) => (
            <TabsTrigger key={key} value={key} className="capitalize">{key}</TabsTrigger>
          ))}
        </TabsList>
        
        {Object.keys(formData).map((key) => (
          <TabsContent key={key} value={key}>
            <Card>
              <CardHeader>
                <CardTitle className="capitalize">{key} SEO Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor={`${key}-title`}>Page Title</Label>
                  <Input 
                    id={`${key}-title`}
                    value={formData[key]?.title || ""}
                    onChange={(e) => handleChange(key, "title", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`${key}-desc`}>Meta Description</Label>
                  <Textarea 
                    id={`${key}-desc`}
                    value={formData[key]?.description || ""}
                    onChange={(e) => handleChange(key, "description", e.target.value)}
                  />
                </div>
                {key === "global" && (
                  <div className="space-y-2">
                    <Label htmlFor={`${key}-keywords`}>Keywords (Comma separated)</Label>
                    <Textarea 
                      id={`${key}-keywords`}
                      value={formData[key]?.keywords || ""}
                      onChange={(e) => handleChange(key, "keywords", e.target.value)}
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </form>
  );
}
