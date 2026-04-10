"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
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
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white selection:bg-white/30">
      {/* Scrollytelling Hook Container */}
      <div ref={containerRef} className="relative h-[400vh] md:h-[600vh] w-full bg-[#0a0a0a]">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          <ScrollyCanvas scrollYProgress={scrollYProgress} />
          <Overlay scrollYProgress={scrollYProgress} />
        </div>
      </div>
      
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
