"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToApply = () => {
    const el = document.getElementById('apply-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-[#0a0a0a]">
      {/* Background gradients/effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto flex flex-col items-center justify-center p-8 md:p-16 bg-black/40 backdrop-blur-xl border border-white/10 rounded-[3rem] max-w-5xl shadow-2xl"
        >
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] text-white">
            Your Audience.<br className="hidden md:block"/> Our Architecture.<br className="hidden md:block"/> Infinite Scalability.
          </h1>
          <p className="mt-8 text-lg md:text-2xl text-white/70 font-light tracking-wide max-w-3xl">
            VLTOS is the invisible operating system that converts social attention into high-yield financial assets.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-medium text-emerald-400">
            <span className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full">Performance-Aligned Equity</span>
            <span className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full">Infrastructure-First</span>
            <span className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full">Zero Friction</span>
            <span className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full">Full IP Ownership</span>
          </div>
          <button 
            onClick={scrollToApply}
            className="mt-12 group flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold hover:bg-zinc-200 transition-all cursor-pointer text-lg"
          >
            Request A Free Audit
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* The two extra statements from Overlay.tsx mapped as smaller sections below the main hero */}
        <div className="mt-32 grid md:grid-cols-2 gap-8 text-left max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black/30 backdrop-blur-lg border border-white/5 p-10 rounded-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
              99% of creators have the audience. <br/>
              <span className="text-zinc-500 mt-2 block">0% have the infrastructure.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-black/30 backdrop-blur-lg border border-white/5 p-10 rounded-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
              We handle the Final 1%.<br />
              <span className="text-emerald-500/80 mt-2 block">Monetization. Automated.</span>
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
