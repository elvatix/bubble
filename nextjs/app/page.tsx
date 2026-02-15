import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import WedgeSection from "@/components/sections/WedgeSection";
import Comparison from "@/components/sections/Comparison";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Features from "@/components/sections/Features";
import Solutions from "@/components/sections/Solutions";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <WedgeSection />
      <Comparison />
      <Features />
      <Stats />
      <Testimonials />
      <Solutions />
      <CTA />
    </>
  );
}
