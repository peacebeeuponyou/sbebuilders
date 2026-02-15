import BlogContent from "./BlogContent";
import { Metadata } from "next";
import { getCollection } from "@/lib/db";

export const metadata: Metadata = {
  title: "Construction Blog | SBE Builders Chennai",
  description: "Read the latest insights on construction, interior design trends, and renovation tips in Chennai from SBE Builders.",
};

export default async function BlogPage() {
  const blogs = await getCollection("blogs");
  return <BlogContent blogs={blogs} />;
}
