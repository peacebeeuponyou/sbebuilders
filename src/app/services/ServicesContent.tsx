"use client";

import { services } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { question: "Do you handle the permit process?", answer: "Yes, we handle all necessary permits and regulatory approvals for your project." },
  { question: "What is your typical project timeline?", answer: "Timelines vary by project scope, but we provide a detailed schedule during the consultation phase." },
  { question: "Do you offer warranties on your work?", answer: "Absolutely. We provide a comprehensive warranty on all structural and finishing work." },
  { question: "Can I use my own architect?", answer: "Yes, we are happy to collaborate with your chosen architect or provide our own design services." },
];

export default function ServicesContent() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 z-0">
           <SafeImage 
             src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" 
             alt="Services Hero" 
             fill
             className="object-cover opacity-50"
           />
           <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-20 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold font-heading"
          >
            Our Expertise in Chennai
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl opacity-80 max-w-2xl mx-auto"
          >
            We provide a wide range of specialized construction services to meet your unique needs across Tamilnadu.
          </motion.p>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="container mx-auto px-4">
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              <div className="flex-1 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                   {/* Icon placeholder - In real app, map icons properly */}
                   <CheckCircle2 className="h-8 w-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary">{service.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                
                <div className="space-y-4">
                  <h3 className="font-bold text-lg">What's Included:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {["Initial Consultation", "Design & Planning", "Material Selection", "Construction Management", "Quality Control", "Final Handover"].map((item, i) => (
                      <li key={i} className="flex items-center text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-accent mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button asChild className="mt-4 rounded-full" variant="outline">
                  <Link href="/contact">Request Quote</Link>
                </Button>
              </div>
              
              <div className="flex-1">
                <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl group">
                   <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent z-10" />
                   {/* Placeholder images - cycling for variety */}
                   <SafeImage 
                     src={`https://images.unsplash.com/photo-${[
                       '1581094794329-c8112a89af12', 
                       '1503387762-592deb58ef4e', 
                       '1600585154340-be6161a56a0c',
                       '1512917774080-9991f1c4c750',
                       '1531835551805-16d864c8d311',
                       '1504307651254-35680f356dfd'
                     ][index % 6]}?q=80&w=800&auto=format&fit=crop`}
                     alt={service.title}
                     fill
                     className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                   />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mt-4">Common questions about our services and process.</p>
          </div>
          
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-lg font-medium hover:text-accent text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 text-center">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
           <div className="relative z-10 space-y-8">
             <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary-foreground">Still have questions?</h2>
             <p className="text-primary-foreground/80 max-w-xl mx-auto text-lg">
               Our team is ready to help you with any inquiries you may have.
             </p>
             <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-lg">
               <Link href="/contact">Contact Support</Link>
             </Button>
           </div>
        </div>
      </section>
    </div>
  );
}
