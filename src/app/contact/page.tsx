import ContactContent from "./ContactContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | SBE Builders Chennai",
  description: "Get in touch with SBE Builders Chennai. Call us or visit our office for inquiries about construction, interior design, and renovation projects.",
};

export default function ContactPage() {
  return <ContactContent />;
}
