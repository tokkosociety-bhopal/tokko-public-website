"use client";

import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Security from "./components/Security";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import DetailedFeatures from "./components/DetailedFeatures";
import ProblemSolution from "./components/ProblemSolution";
import StatsSection from "./components/StatsSection";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <Hero />
      <StatsSection />
      <HowItWorks />
      <ProblemSolution />
      <DetailedFeatures />
      <Features />
      <Security />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}