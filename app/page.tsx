import Hero from "@/components/Hero";
import Section2 from "@/components/Section2";
import CreatorRoiCalculator from "@/components/CreatorRoiCalculator";
import TheAgreement from "@/components/TheAgreement";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import VaultFAQ from "@/components/VaultFAQ";
import ApplicationForm from "@/components/ApplicationForm";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-white selection:text-black font-sans antialiased overflow-x-hidden">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. The Single Problem */}
      <Section2 />

      {/* 3. The Revenue Estimator */}
      <CreatorRoiCalculator />

      {/* 4. The Deal */}
      <TheAgreement />

      {/* 5. What We Actually Do */}
      <WhatWeDo />

      {/* 6. Who This Is For */}
      <WhoWeWorkWith />

      {/* 7. FAQ */}
      <VaultFAQ />

      {/* 8. The Form */}
      <ApplicationForm />
      
      {/* Footer */}
      <footer className="py-16 border-t border-white/10 text-center bg-black">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zinc-500 text-xs tracking-wider uppercase font-light">
            © 2026 VLTOS
          </div>
          <div className="flex gap-8 text-xs uppercase tracking-widest text-zinc-400">
            <a 
              href="https://instagram.com/vltos.io" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              Instagram: @vltos.io
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
