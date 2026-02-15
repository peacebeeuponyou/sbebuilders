"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Leaf, HardHat, ShieldCheck } from "lucide-react";

const milestones = [
  { year: "2008", title: "Inception in Chennai", desc: "SBE Builders was founded with a small team of 5 in Chennai." },
  { year: "2012", title: "First Major Project", desc: "Completed the landmark residential complex in OMR, Chennai." },
  { year: "2015", title: "Expansion to Tamilnadu", desc: "Opened regional offices in Madurai and Coimbatore." },
  { year: "2020", title: "Green Initiative", desc: "Committed to 100% sustainable building practices in Tamilnadu." },
  { year: "2024", title: "Global Reach", desc: "Started our first international collaboration." },
];

export default function AboutContent() {
  return (
    <div className="flex flex-col gap-24 pb-24 overflow-hidden">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 z-0">
           <SafeImage 
             src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop" 
             alt="Construction in Chennai" 
             fill
             className="object-cover opacity-50"
             fallbackClassName="w-full h-full object-cover opacity-50 bg-muted"
           />
           <div className="absolute inset-0 bg-black/60 z-10" />
           <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent z-10" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-20 space-y-6">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
          >
             <Badge className="bg-accent text-accent-foreground mb-4 px-4 py-1">About Us</Badge>
             <h1 className="text-5xl md:text-7xl font-bold font-heading mb-4">Building Legacy in Chennai Since 2008</h1>
             <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
               We don't just construct buildings; we create landmarks in Tamilnadu that stand the test of time, blending innovation with tradition.
             </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision - Split Layout */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary">Our Mission for Chennai's Infrastructure</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To deliver superior construction services in Chennai with unwavering commitment to quality, safety, and customer satisfaction. We strive to exceed expectations in every project, fostering long-term relationships built on trust and integrity.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be the leading construction company in Tamilnadu recognized for innovation, sustainability, and excellence in the built environment.
              </p>
            </div>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl group"
          >
             <div className="absolute inset-0 bg-primary/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
             <SafeImage 
               src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
               alt="Construction Site Chennai"
               fill
               className="object-cover transform group-hover:scale-110 transition-transform duration-700"
               fallbackClassName="w-full h-full object-cover bg-muted"
             />
          </motion.div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary">Our Journey in Tamilnadu</h2>
            <p className="text-muted-foreground mt-4">A timeline of our achievements and growth.</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
             <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2" />
             
             {milestones.map((item, index) => (
               <motion.div 
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.2 }}
                 className={`relative flex items-center justify-between mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
               >
                 <div className="w-5/12" />
                 <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent ring-4 ring-white" />
                 <div className={`w-5/12 p-6 bg-white rounded-xl shadow-md border border-border/50 hover:shadow-lg transition-all ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                   <span className="text-accent font-bold text-xl block mb-2">{item.year}</span>
                   <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                   <p className="text-sm text-muted-foreground">{item.desc}</p>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Values & Accreditations */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary">Our Values & Accreditations</h2>
          <p className="text-muted-foreground mt-4">Principles that guide our work across Chennai and Tamilnadu.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">ISO 9001 Certified</h3>
              <p className="text-sm text-muted-foreground">Quality management systems ensuring consistent excellence.</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center">
                <HardHat className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Safety First</h3>
              <p className="text-sm text-muted-foreground">Strict compliance with safety protocols and site standards.</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Sustainable Practices</h3>
              <p className="text-sm text-muted-foreground">Materials and methods aligned with eco-friendly standards.</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Client-Centric</h3>
              <p className="text-sm text-muted-foreground">Transparent communication and dependable delivery.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center text-primary-foreground">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
           <div className="relative z-10 space-y-6">
             <h2 className="text-3xl md:text-5xl font-bold font-heading">Ready to Build With Us?</h2>
             <p className="opacity-90 max-w-2xl mx-auto text-lg">
               Join our list of satisfied clients in Chennai and let's create something remarkable together.
             </p>
             <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg">
               <Link href="/contact">Get Started</Link>
             </Button>
           </div>
        </div>
      </section>
    </div>
  );
}
