"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToApply = () => {
    const el = document.getElementById("apply-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#050505] pt-24 pb-16">
      {/* Ultra Subtle Radial Light */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vw] bg-white/[0.02] rounded-[100%] blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div
          className="mx-auto flex flex-col items-center justify-center p-8 md:p-16 max-w-5xl relative"
        >
          {/* Logo Brand Title */}
          <div className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-8 border-b border-zinc-800 pb-2">
            VLTOS — Digital Product Agency
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-serif tracking-tight leading-[1.05] text-white">
            Content is distribution.<br className="hidden md:block" />
            <span className="text-zinc-500 italic font-light">We build the business.</span>
          </h1>

          <p className="mt-10 text-lg md:text-xl text-zinc-400 font-light tracking-wide max-w-2xl leading-relaxed">
            Partnering exclusively with Instagram creators with 10k+ followers. We build the infrastructure, systems, and product strategy to transform your influence into a scalable digital asset.
          </p>

          <button
            onClick={scrollToApply}
            className="mt-14 group flex items-center gap-4 bg-white text-black px-10 py-5 rounded-none font-sans font-medium uppercase tracking-widest text-sm hover:bg-zinc-200 transition-colors cursor-pointer"
          >
            Request a Free Audit
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
