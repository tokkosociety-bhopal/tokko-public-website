"use client";

import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import HowItWorks from "./components/HowItWorks";
import ProblemSolution from "./components/ProblemSolution";
import DetailedFeatures from "./components/DetailedFeatures";
import Features from "./components/Features";
import Security from "./components/Security";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">

      {/* HERO */}
      <Hero />

      {/* TRUST NUMBERS */}
      <StatsSection />

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* PROBLEM / SOLUTION */}
      <ProblemSolution />

      {/* DETAILED FEATURES */}
      <DetailedFeatures />

      {/* FEATURE GRID */}
      <Features />

      {/* SECURITY SECTION */}
      <Security />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* CALL TO ACTION */}
      <CTA />

      {/* FOOTER */}
      <Footer />

    </main>
  );
}