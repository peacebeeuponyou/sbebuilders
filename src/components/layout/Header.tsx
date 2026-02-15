"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

import { QuoteDialog } from "@/components/QuoteDialog";
import { companyInfo } from "@/lib/data";
import { Facebook, Instagram, Linkedin, Phone, Mail } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-2 glass shadow-md"
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="text-2xl font-bold font-heading text-primary tracking-tight group-hover:text-accent transition-colors duration-300">
            SBE<span className="text-accent group-hover:text-primary transition-colors duration-300">Builders</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-full px-4 py-1.5 border border-white/20 mr-4 shadow-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium transition-colors hover:text-accent group"
              >
                <span className={cn(
                  "relative z-10",
                  pathname === item.href ? "text-primary font-bold" : "text-muted-foreground"
                )}>
                  {item.name}
                </span>
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-white shadow-sm rounded-full -z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>
          <QuoteDialog>
            <Button size="default" className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg hover:shadow-primary/20 transition-all hover:scale-105">
              Get a Quote
            </Button>
          </QuoteDialog>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10 transition-colors">
                <Menu className="h-7 w-7" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] glass border-l border-white/20 p-0 flex flex-col h-full">
              {/* Header inside Sheet */}
              <div className="p-6 border-b border-white/10">
                 <SheetTitle className="text-left font-heading text-primary text-2xl">
                   SBE<span className="text-accent">Builders</span>
                 </SheetTitle>
              </div>
              
              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                  <nav className="flex flex-col gap-2">
                      {navItems.map((item, i) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "text-xl font-medium transition-all hover:translate-x-2 p-3 rounded-xl hover:bg-white/50 flex items-center justify-between group",
                            pathname === item.href
                              ? "text-accent font-bold bg-white/60"
                              : "text-muted-foreground hover:text-primary"
                          )}
                        >
                          {item.name}
                          {pathname === item.href && (
                            <div className="w-2 h-2 rounded-full bg-accent" />
                          )}
                        </Link>
                      ))}
                  </nav>
                  
                  <div className="mt-auto pt-6 border-t border-white/10 space-y-6">
                      <QuoteDialog>
                        <Button className="w-full rounded-full h-12 text-lg bg-gradient-to-r from-primary to-primary/90 hover:from-accent hover:to-accent/90 transition-all shadow-md" onClick={() => setIsOpen(false)}>
                          Get a Quote
                        </Button>
                      </QuoteDialog>

                      {/* Contact Info */}
                      <div className="space-y-4 text-sm text-muted-foreground bg-white/30 p-4 rounded-xl">
                          <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                  <Phone className="h-4 w-4" />
                              </div>
                              <span className="font-medium">{companyInfo.phone}</span>
                          </div>
                          <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                  <Mail className="h-4 w-4" />
                              </div>
                              <span className="truncate font-medium">{companyInfo.email}</span>
                          </div>
                      </div>

                      {/* Socials */}
                      <div className="flex gap-4 justify-center">
                          <a href={companyInfo.socials.facebook} className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-110">
                              <Facebook className="h-5 w-5" />
                          </a>
                          <a href={companyInfo.socials.instagram} className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-110">
                              <Instagram className="h-5 w-5" />
                          </a>
                          <a href={companyInfo.socials.linkedin} className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-110">
                              <Linkedin className="h-5 w-5" />
                          </a>
                      </div>
                  </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
