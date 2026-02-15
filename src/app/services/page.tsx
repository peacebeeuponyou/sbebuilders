import ServicesContent from "./ServicesContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Construction Services | SBE Builders Chennai",
  description: "Comprehensive construction services in Chennai including residential, commercial, renovation, and interior design by SBE Builders.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
