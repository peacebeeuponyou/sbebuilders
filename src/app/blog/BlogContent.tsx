"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

export default function BlogContent({ blogs }: { blogs: any[] }) {
  return (
    <div className="flex flex-col gap-16 pb-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
             alt="Blog Hero Chennai" 
             className="w-full h-full object-cover opacity-50"
           />
           <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-20 space-y-6">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-4">Construction Insights Chennai</h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Expert advice, industry trends in Tamilnadu, and company news from SBE Builders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="overflow-hidden group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                  <SafeImage 
                    src={blog.image} 
                    alt={blog.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 z-20 bg-white text-primary font-bold hover:bg-white/90">
                    {blog.category}
                  </Badge>
                </div>
                
                <CardHeader className="p-6 pb-2">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Calendar className="h-4 w-4 text-accent" /> {blog.date}</span>
                    <span className="flex items-center gap-1"><User className="h-4 w-4 text-accent" /> {blog.author}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-heading group-hover:text-primary transition-colors line-clamp-2">
                    <Link href={`/blog/${blog.id}`} className="hover:underline decoration-accent underline-offset-4">
                      {blog.title}
                    </Link>
                  </h3>
                </CardHeader>
                
                <CardContent className="p-6 pt-2 flex-grow">
                  <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </CardContent>
                
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="link" className="px-0 text-primary font-bold hover:text-accent p-0 h-auto">
                    <Link href={`/blog/${blog.id}`} className="flex items-center gap-2">
                      Read Article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container mx-auto px-4">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center text-primary-foreground">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
           <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-bold font-heading">Stay Updated</h2>
             <p className="opacity-90 text-lg">
               Subscribe to our newsletter for the latest construction trends in Chennai and SBE news.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
               <input 
                 type="email" 
                 placeholder="Enter your email" 
                 className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
               />
               <Button size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6">
                 Subscribe
               </Button>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}
