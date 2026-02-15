import ProjectsContent from "./ProjectsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | SBE Builders Chennai",
  description: "Explore our portfolio of completed construction and interior design projects in Chennai and Tamilnadu. Residential, Commercial, and Renovations.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
