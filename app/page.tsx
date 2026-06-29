import Hero from "@/components/Hero";
import Section2 from "@/components/Section2";
import OsThesis from "@/components/OsThesis";
import StrategicFiltering from "@/components/StrategicFiltering";
import OpportunityGap from "@/components/OpportunityGap";
import VltosPillars from "@/components/VltosPillars";
import Accelerator from "@/components/Accelerator";
import Offer from "@/components/Offer";
import VaultFAQ from "@/components/VaultFAQ";
import ApplicationForm from "@/components/ApplicationForm";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white selection:bg-white/30 font-sans antialiased overflow-x-hidden">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Section 2: Blunt monetization problem hook */}
      <Section2 />

      {/* 3. Section 3: The Partner Thesis (with Dashboard mockup) */}
      <OsThesis />

      {/* 4. Section 4: Who We Work With (Selection Criteria) */}
      <StrategicFiltering />

      {/* 5. Section 5: The Problem (with ROI Calculator) */}
      <OpportunityGap />

      {/* 6. Section 6: Deliverables Pillars */}
      <VltosPillars />

      {/* 7. Section 7: The Process */}
      <Accelerator />

      {/* 8. Section 8: The Terms */}
      <Offer />

      {/* 9. Section 9: Common Questions FAQ */}
      <VaultFAQ />

      {/* 10. Section 10: Apply Form */}
      <ApplicationForm />
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center relative z-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zinc-500 text-sm font-light">
            © {new Date().getFullYear()} VLTOS. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm font-medium text-zinc-400">
            <a 
              href="https://instagram.com/vltos.io" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              Instagram: @vltos.io
            </a>
            <span className="text-zinc-600 font-light select-none">|</span>
            <span className="text-zinc-500 font-light">
              Built on <a href="https://whop.com" target="_blank" rel="noopener noreferrer" className="hover:text-white font-semibold transition-colors">Whop</a>
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
