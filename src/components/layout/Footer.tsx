import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold font-heading text-white">
              SBE<span className="text-accent">Builders</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Premium construction services delivering excellence in residential and commercial projects. Building dreams with precision, integrity, and innovation across Chennai and Tamilnadu.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-white transition-all duration-300"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg text-white">Quick Links</h4>
            <ul className="space-y-4">
              {["About", "Services", "Projects", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6 text-lg text-white">Our Services</h4>
            <ul className="space-y-4">
              {["Residential Construction", "Commercial Projects", "Renovation & Remodeling", "Interior Fit-Outs", "Structural Repairs", "Turnkey Solutions"].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-slate-400 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                  >
                     <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-6 text-lg text-white">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe to get the latest news and construction trends.
            </p>
            <div className="space-y-3">
              <div className="relative">
                <Input 
                  placeholder="Your email address" 
                  className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-accent pr-12 h-12"
                />
                <Button size="icon" className="absolute right-1 top-1 h-10 w-10 bg-accent hover:bg-accent/90 text-white">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-slate-500">
                By subscribing, you agree to our Privacy Policy.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-slate-800 border-b mb-8">
           <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-accent">
               <MapPin className="h-6 w-6" />
             </div>
             <div>
               <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Location</p>
               <p className="text-sm text-slate-300">123 Construction Ave, Chennai, TN</p>
             </div>
           </div>
           <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-accent">
               <Phone className="h-6 w-6" />
             </div>
             <div>
               <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Call Us</p>
               <p className="text-sm text-slate-300">+91 (555) 123-4567</p>
             </div>
           </div>
           <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-accent">
               <Mail className="h-6 w-6" />
             </div>
             <div>
               <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Email Us</p>
               <p className="text-sm text-slate-300">info@sbebuilders.com</p>
             </div>
           </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} SBE Builders. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
