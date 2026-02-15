import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/layout/MainLayout";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SBE Builders | Best Construction Company in Chennai, Tamilnadu",
    template: "%s | SBE Builders Chennai",
  },
  description: "SBE Builders - Premier construction, interior design, and renovation company in Chennai, Tamilnadu. Delivering futuristic designs and high-quality residential & commercial projects.",
  keywords: ["Construction Company Chennai", "Builders in Chennai", "Interior Designers Chennai", "House Renovation Tamilnadu", "Commercial Builders Chennai", "SBE Builders", "Civil Engineers Chennai"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sbebuilders.com",
    title: "SBE Builders | Premium Construction Services in Chennai",
    description: "Leading construction and interior design firm in Chennai, Tamilnadu.",
    siteName: "SBE Builders",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sourceSans.variable} ${playfair.variable} antialiased font-sans flex flex-col min-h-screen selection:bg-accent selection:text-white`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
