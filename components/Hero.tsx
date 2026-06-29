"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToEstimator = () => {
    const el = document.getElementById("estimator");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-black pt-24 pb-16">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Brand Name */}
        <div className="text-sm tracking-[0.4em] text-white uppercase mb-12">
          VLTOS
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-[4.75rem] tracking-tight leading-[1.1] text-white font-serif font-light mb-8">
          Your audience is worth more than brand deals.<br />
          <span className="text-zinc-500 italic font-light">We prove it. Then we build the product that pays you.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-sm md:text-base text-zinc-400 uppercase tracking-[0.2em] max-w-xl mx-auto leading-relaxed">
          70% yours. 0% upfront. Done for you end to end.
        </p>

        {/* CTA */}
        <button
          onClick={scrollToEstimator}
          className="mt-16 group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-none font-sans font-medium uppercase tracking-[0.15em] text-xs hover:bg-zinc-200 transition-colors cursor-pointer"
        >
          See what your audience is worth
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
