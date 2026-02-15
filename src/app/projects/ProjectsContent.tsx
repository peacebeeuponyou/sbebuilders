"use client";

import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { SafeImage } from "@/components/ui/SafeImage";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Residential", "Commercial", "Renovation"];

export default function ProjectsContent() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="flex flex-col gap-16 pb-24">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
             src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
             alt="Projects Hero Chennai" 
             className="w-full h-full object-cover opacity-50"
           />
           <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-20 space-y-6">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-4">Our Masterpieces in Chennai</h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              A curated selection of our finest construction and design projects across Tamilnadu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
           <Tabs defaultValue="All" className="w-full max-w-2xl" onValueChange={setFilter}>
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto p-1 bg-muted/50 rounded-full">
              {categories.map((cat) => (
                <TabsTrigger 
                  key={cat} 
                  value={cat}
                  className="rounded-full py-3 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md transition-all"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, type: "spring" }}
                key={project.id}
                className="group"
              >
                <div className="relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg group-hover:shadow-2xl transition-all duration-500">
                   {/* Background Image */}
                   <SafeImage 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    
                   {/* Overlay Gradient */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                   
                   {/* Content Overlay */}
                   <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <Badge className="bg-white/20 backdrop-blur-md text-white border-0 mb-3 hover:bg-white/30">
                          {project.category}
                        </Badge>
                        <h3 className="text-3xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                        <p className="text-white/70 text-sm mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {project.description}
                        </p>
                        
                        <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                           <div className="text-white/90 text-sm">
                             <span className="block font-bold">{project.location}</span>
                             <span>{project.year}</span>
                           </div>
                           <Button asChild size="icon" className="rounded-full h-12 w-12 bg-white text-primary hover:bg-accent hover:text-white transition-colors">
                              <Link href={`/projects/${project.id}`}>
                                <ArrowUpRight className="h-6 w-6" />
                              </Link>
                           </Button>
                        </div>
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
      
      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="bg-muted/30 rounded-[3rem] p-12 text-center border border-border/50">
           <h2 className="text-3xl font-bold font-heading mb-4">Have a project in mind in Chennai?</h2>
           <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
             Whether it's a commercial complex or a dream home in Tamilnadu, we have the expertise to build it.
           </p>
           <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
             <Link href="/contact">Start Your Project</Link>
           </Button>
        </div>
      </section>
    </div>
  );
}
