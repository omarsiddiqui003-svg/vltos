"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AttentionCanvas from "@/components/AttentionCanvas";

export default function Hero() {
  const scrollToApply = () => {
    const el = document.getElementById("apply-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#0a0a0a] pt-24 pb-16">
      {/* Dynamic Attention Flow Particle Background */}
      <AttentionCanvas />

      {/* Radial Gradient overlay for soft lighting */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[1000px] max-h-[1000px] bg-emerald-500/5 rounded-full blur-[140px]" />
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto flex flex-col items-center justify-center p-8 md:p-16 bg-black/40 backdrop-blur-xl border border-white/10 rounded-[3rem] max-w-5xl shadow-2xl relative overflow-hidden"
        >
          {/* Subtle grid light line */}
          <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          {/* Logo Brand Title */}
          <div className="text-sm font-bold tracking-widest text-emerald-400 uppercase mb-6 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            VLTOS
          </div>

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-white">
            Content is distribution.<br className="hidden md:block" />
            <span className="text-emerald-400">We build the business.</span>
          </h1>

          <p className="mt-8 text-base md:text-xl text-zinc-400 font-light tracking-wide max-w-3xl leading-relaxed">
            You've built the audience. We build the infrastructure, systems, and product strategy behind the scenes to transform your influence into a scalable, revenue-generating digital asset.
          </p>

          <button
            onClick={scrollToApply}
            className="mt-10 group flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold hover:bg-zinc-200 transition-all cursor-pointer text-lg shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.2)] active:scale-[0.98]"
          >
            Request a Free Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
