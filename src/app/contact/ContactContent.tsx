"use client";

import { ContactForm } from "@/components/ContactForm";
import { companyInfo } from "@/lib/data";
import Image from "next/image";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactContent() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image 
             src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop" 
             alt="Contact Hero Chennai" 
             fill
             className="object-cover opacity-50"
           />
           <div className="absolute inset-0 bg-black/60 z-10" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-20 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-heading">Get In Touch</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Ready to start your project in Chennai? Contact us for a free consultation.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6 text-primary">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                Reach out to us using the contact details below or fill out the form. We are here to answer any questions you may have about construction in Chennai.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Our Office in Chennai</h3>
                  <p className="text-muted-foreground">{companyInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Phone</h3>
                  <p className="text-muted-foreground">{companyInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-muted-foreground">{companyInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Working Hours</h3>
                  <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Sat: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card shadow-lg border rounded-2xl p-8">
            <h2 className="text-2xl font-bold font-heading mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="container mx-auto px-4">
         <div className="w-full h-[400px] bg-muted rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center bg-slate-200">
               <p className="text-muted-foreground text-lg">Google Map Placeholder - Chennai Location</p>
            </div>
         </div>
      </section>
      {/* CTA */}
      <section className="container mx-auto px-4 pb-16">
        <div className="bg-muted/30 rounded-[3rem] p-12 text-center border border-border/50">
           <h2 className="text-3xl font-bold font-heading mb-4">Prefer to talk directly?</h2>
           <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
             Give us a call at <span className="text-primary font-bold">{companyInfo.phone}</span> or visit our Chennai office during business hours.
           </p>
        </div>
      </section>
    </div>
  );
}
