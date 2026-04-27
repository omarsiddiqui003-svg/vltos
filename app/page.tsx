"use client";

import Hero from "@/components/Hero";
import AuthorityBar from "@/components/AuthorityBar";
import OpportunityGap from "@/components/OpportunityGap";
import Accelerator from "@/components/Accelerator";
import Offer from "@/components/Offer";
import ApplicationForm from "@/components/ApplicationForm";
import OsThesis from "@/components/OsThesis";
import StrategicFiltering from "@/components/StrategicFiltering";
import VltosPillars from "@/components/VltosPillars";
import VaultFAQ from "@/components/VaultFAQ";

export default function Home() {

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white selection:bg-white/30">
      <Hero />
      <AuthorityBar />

      {/* VLTOS Funnel Flow mapping the new requirements */}
      <OsThesis />
      <StrategicFiltering />
      <OpportunityGap />
      <VltosPillars />
      <Accelerator />
      <Offer />
      <VaultFAQ />
      <ApplicationForm />
      
      {/* Footer */}
      <footer className="py-10 border-t border-white/5 text-center text-white/30 text-sm font-light relative z-20 bg-[#0a0a0a]">
         © {new Date().getFullYear()} VLTOS Infrastructure. All rights reserved.
      </footer>
    </main>
  );
}
