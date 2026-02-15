import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Ruler } from "lucide-react";
import { SafeImage } from "@/components/ui/SafeImage";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="pb-16">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <SafeImage 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white space-y-4">
             <Badge className="bg-accent text-accent-foreground hover:bg-accent/90 mb-4">{project.category}</Badge>
             <h1 className="text-4xl md:text-6xl font-bold font-heading">{project.title}</h1>
             <p className="text-xl opacity-90">{project.location}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Button asChild variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
          <Link href="/projects" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-4">Project Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Detailed project description goes here. This section would typically contain specific challenges overcome, materials used, and the overall scope of work delivered to the client. We ensure every detail is perfect.
              </p>
            </div>

            {/* Gallery Placeholder */}
            <div>
               <h3 className="text-2xl font-bold font-heading mb-6">Gallery</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {[1, 2, 3, 4].map((i) => (
                   <div key={i} className="aspect-video bg-muted rounded-xl overflow-hidden">
                     {/* Placeholder images */}
                     <div className="w-full h-full bg-slate-200 flex items-center justify-center text-muted-foreground">
                        Image {i}
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-muted/50 p-6 rounded-2xl border space-y-6">
              <h3 className="text-xl font-bold font-heading">Project Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <span className="block font-semibold text-sm">Location</span>
                    <span className="text-muted-foreground">{project.location}</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <span className="block font-semibold text-sm">Year Completed</span>
                    <span className="text-muted-foreground">{project.year}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Ruler className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <span className="block font-semibold text-sm">Area</span>
                    <span className="text-muted-foreground">{project.stats.area}</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <span className="block font-semibold text-sm mb-1">Project Value</span>
                  <span className="text-2xl font-bold text-primary">{project.stats.value}</span>
                </div>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-6 rounded-2xl text-center space-y-4">
              <h3 className="text-xl font-bold font-heading">Interested in a similar project?</h3>
              <p className="opacity-90 text-sm">Let's discuss how we can bring your vision to life.</p>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
