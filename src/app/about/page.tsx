import AboutContent from "./AboutContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | SBE Builders Chennai",
  description: "Learn about SBE Builders, the leading construction company in Chennai with over 15 years of experience in building excellence across Tamilnadu.",
};

export default function AboutPage() {
  return <AboutContent />;
}
