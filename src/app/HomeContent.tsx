"use client";

import { Button } from "@/components/ui/button";
import { services, projects, testimonials } from "@/lib/data";
import { ArrowRight, CheckCircle2, Star, Trophy, Users, Hammer, HardHat, Ruler } from "lucide-react";
import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRef } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const processSteps = [
  { id: 1, title: "Consultation", desc: "We discuss your vision, budget, and requirements for your Chennai project.", icon: Users },
  { id: 2, title: "Planning & Design", desc: "Our architects draft blueprints complying with Tamilnadu building codes.", icon: Ruler },
  { id: 3, title: "Construction", desc: "Our expert team builds your project with precision and quality materials.", icon: Hammer },
  { id: 4, title: "Handover", desc: "Final inspection and key delivery to your new space in Chennai.", icon: CheckCircle2 },
];

export default function HomeContent() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div className="flex flex-col gap-24 md:gap-32 pb-24 overflow-hidden">
      {/* Hero Section - Futuristic & Dynamic */}
      <section className="relative w-full min-h-[100vh] flex items-center overflow-hidden bg-primary/5">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <motion.div 
             animate={{ 
               scale: [1, 1.2, 1],
               rotate: [0, 90, 0],
             }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" as const }}
             className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" 
           />
           <motion.div 
             animate={{ 
               scale: [1, 1.3, 1],
               x: [0, 100, 0],
             }}
             transition={{ duration: 15, repeat: Infinity, ease: "linear" as const }}
             className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" 
           />
        </div>

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="bg-white/80 backdrop-blur-md text-primary border-primary/10 shadow-sm px-4 py-1.5 text-sm font-medium mb-4">
                <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse"></span>
                Top Rated Construction Company in Chennai
              </Badge>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-[1.1] tracking-tight text-primary">
              Building the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient">Future</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              SBE Builders combines architectural innovation with structural integrity. We are the premier builders in Chennai, engineering legacies across Tamilnadu.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all hover:scale-105">
                <Link href="/projects">
                  Explore Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full text-lg px-8 py-6 bg-white/50 backdrop-blur-sm border-primary/20 text-primary hover:bg-white hover:border-primary/50 transition-all">
                <Link href="/contact">Start Your Journey</Link>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-8">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
                    User
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium">
                <span className="text-primary font-bold">500+</span> Satisfied Clients in Chennai
                <div className="flex text-accent text-xs">
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
             animate={{ opacity: 1, scale: 1, rotate: 0 }}
             transition={{ duration: 1, delay: 0.2, type: "spring" }}
             className="relative h-[600px] w-full hidden md:block"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-[2rem] opacity-20 transform rotate-6 scale-95 blur-sm" />
             <div className="absolute inset-0 bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-white/20">
                <SafeImage 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" 
                  alt="Modern Architecture in Chennai"
                  fill
                  className="object-cover"
                />
                
                {/* Floating Card */}
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute bottom-8 left-8 right-8 glass p-6 rounded-xl flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Latest Project</p>
                    <p className="text-lg font-bold text-primary">Luxury Villa, ECR Chennai</p>
                  </div>
                  <Button size="icon" className="rounded-full h-12 w-12 bg-accent hover:bg-accent/90">
                    <ArrowRight className="h-6 w-6 text-white" />
                  </Button>
                </motion.div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Metrics - Floating */}
      <section className="container mx-auto px-4 relative z-20 -mt-24">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 glass p-6 md:p-10 rounded-3xl shadow-2xl border border-white/40"
        >
          {[
            { icon: Users, label: "Happy Clients", value: "200+" },
            { icon: CheckCircle2, label: "Projects Done", value: "150+" },
            { icon: Trophy, label: "Years Experience", value: "15+" },
            { icon: Star, label: "Rated", value: "4.9/5" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-3 group">
              <div className="p-4 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors">
                <item.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-4xl font-bold font-heading text-primary">{item.value}</h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Our Process - Timeline */}
      <section className="container mx-auto px-4" ref={targetRef}>
        <motion.div style={{ opacity }} className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-accent text-accent">How We Work</Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary">Streamlined Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to reality, we follow a rigorous 4-step process to ensure perfection in every Chennai construction project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent -z-10" />
          
          {processSteps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center space-y-4 group"
            >
              <div className="w-24 h-24 rounded-full bg-white border-4 border-secondary flex items-center justify-center relative z-10 group-hover:border-accent transition-colors duration-500 shadow-lg">
                <step.icon className="h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                  {step.id}
                </div>
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services - Advanced Cards */}
      <section className="container mx-auto px-4">
        <motion.div
  {...fadeIn}
  transition={{ duration: 0.6, ease: "easeOut" as const }}
  className="text-center mb-16 space-y-4">

          <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary">Our Expertise in Chennai</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to your needs in Tamilnadu.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.slice(0, 6).map((service, index) => (
            <motion.div 
              key={service.id}
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl bg-white border border-border p-8 hover:shadow-2xl transition-all duration-500 dark:bg-card flex flex-col"
            >
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all" />
              
              <div className="h-14 w-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <CheckCircle2 className="h-7 w-7 text-primary group-hover:text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              
              <Link href="/services" className="inline-flex items-center text-sm font-bold text-primary hover:text-accent transition-colors uppercase tracking-wider">
                Learn More <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Projects - Parallax Grid */}
      <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <Badge className="bg-accent text-accent-foreground">Portfolio</Badge>
              <h2 className="text-4xl md:text-6xl font-bold font-heading">Featured Works in Tamilnadu</h2>
              <p className="text-primary-foreground/70 max-w-xl text-lg">
                Explore our portfolio of successful projects demonstrating our expertise and quality across Chennai and Tamilnadu.
              </p>
            </div>
            <Button asChild variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-white hover:text-primary rounded-full px-8">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <Card className="overflow-hidden group border-0 shadow-none bg-transparent h-full flex flex-col">
                  <div className="relative h-80 overflow-hidden rounded-3xl mb-6">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-10" />
                    <SafeImage 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    <Badge className="absolute top-4 right-4 z-20 bg-white/90 text-primary font-bold backdrop-blur-sm">
                      {project.category}
                    </Badge>
                    <div className="absolute bottom-6 left-6 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <Button size="sm" asChild className="rounded-full bg-accent hover:bg-accent/90 border-0">
                        <Link href={`/projects/${project.id}`}>View Case Study</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-primary-foreground/60 text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      {project.location}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Marquee */}
      <section className="overflow-hidden py-10 bg-muted/30">
        <div className="container mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl font-bold font-heading">What People Say</h2>
        </div>
        
        <div className="relative flex w-full overflow-hidden">
           <motion.div 
             className="flex gap-8 whitespace-nowrap"
             animate={{ x: ["0%", "-50%"] }}
             transition={{ repeat: Infinity, duration: 30, ease: "linear" as const }}
           >
             {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
               <div key={i} className="w-[300px] md:w-[400px] shrink-0 p-6 md:p-8 bg-white rounded-2xl shadow-sm border border-border/50">
                 <div className="flex items-center gap-4 mb-4">
                   <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                   </div>
                   <div>
                     <p className="font-bold text-primary">{t.name}</p>
                     <p className="text-xs text-muted-foreground">{t.role}</p>
                   </div>
                 </div>
                 <p className="text-muted-foreground text-sm whitespace-normal italic">"{t.content}"</p>
                 <div className="flex text-accent mt-4">
                   {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                 </div>
               </div>
             ))}
           </motion.div>
           <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
           <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </section>

      {/* Futuristic CTA */}
      <section className="container mx-auto px-4">
        <div className="relative rounded-[3rem] p-12 md:p-24 text-center text-primary-foreground overflow-hidden">
           {/* Background Video Placeholder or Gradient */}
           <div className="absolute inset-0 bg-primary z-0" />
           <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-50 z-0" />
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 z-0" />
           
           <motion.div 
             initial={{ scale: 0.9, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
             className="relative z-10 max-w-3xl mx-auto space-y-8"
           >
             <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">Ready to Build the Extraordinary?</h2>
             <p className="text-xl opacity-90 leading-relaxed">
               Let's collaborate to bring your most ambitious visions to life in Chennai. Precision, quality, and innovation await.
             </p>
             <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
               <Button asChild size="lg" className="h-16 px-10 rounded-full text-lg bg-white text-primary hover:bg-white/90 font-bold shadow-xl">
                 <Link href="/contact">Get a Free Consultation</Link>
               </Button>
               <Button asChild size="lg" variant="outline" className="h-16 px-10 rounded-full text-lg border-white/30 text-white hover:bg-white/10">
                 <Link href="/projects">View Portfolio</Link>
               </Button>
             </div>
           </motion.div>
        </div>
      </section>
    </div>
  );
}
