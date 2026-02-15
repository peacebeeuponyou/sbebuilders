import HomeContent from "./HomeContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SBE Builders | Best Construction Company in Chennai",
  description: "Premier builders and interior designers in Chennai. Specialized in luxury villas, apartments, and commercial projects across Tamilnadu.",
};

export default function Home() {
  return <HomeContent />;
}
