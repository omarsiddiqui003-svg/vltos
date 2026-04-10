"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0% to 15% fades out, moves up
  const opacity1 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -100]);
  const pointerEvents1 = useTransform(scrollYProgress, [0, 0.1], ["auto", "none"]);

  // Section 2: 20% to 45% 
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.15, 0.3, 0.45], [50, 0, -50]);

  // Section 3: 50% to 80%
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.65, 0.85], [50, 0, -50]);

  const scrollToApply = () => {
    const el = document.getElementById('apply-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="absolute inset-0 z-10 text-white pointer-events-none">
      {/* Section 1: 0% scroll */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto"
        style={{ opacity: opacity1, y: y1, pointerEvents: pointerEvents1 as any }}
      >
        <div className="flex flex-col items-center justify-center text-center px-8 py-12 md:px-16 bg-black/40 backdrop-blur-xl border border-white/10 rounded-[3rem] max-w-[90%] md:max-w-5xl shadow-2xl">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1]">
            Your Audience.<br className="hidden md:block"/> Our Architecture.<br className="hidden md:block"/> Infinite Scalability.
          </h1>
          <p className="mt-8 text-lg md:text-2xl text-white/70 font-light tracking-wide max-w-3xl">
            VLTOS is the invisible operating system that converts social attention into high-yield financial assets.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-medium text-emerald-400">
            <span className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">Performance-Aligned Equity</span>
            <span className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">Infrastructure-First</span>
            <span className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">Zero Friction</span>
            <span className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">Full IP Ownership</span>
          </div>
          <button 
            onClick={scrollToApply}
            className="mt-10 group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-zinc-200 transition-all cursor-pointer"
          >
            Request A Free Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>

      {/* Section 2: 30% scroll */}
      <motion.div
        className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-32 pointer-events-none"
        style={{ opacity: opacity2, y: y2 }}
      >
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl inline-block max-w-[90%] md:max-w-2xl">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            99% of creators have the audience. <br/>
            <span className="text-zinc-400">0% have the infrastructure.</span>
          </h2>
        </div>
      </motion.div>

      {/* Section 3: 60% scroll */}
      <motion.div
        className="absolute inset-0 flex flex-col items-end justify-center px-6 md:px-32 text-right pointer-events-none"
        style={{ opacity: opacity3, y: y3 }}
      >
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl inline-block max-w-[90%] md:max-w-2xl">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            We handle the Final 1%.<br />
            <span className="text-zinc-400">Monetization. Automated.</span>
          </h2>
        </div>
      </motion.div>
    </div>
  );
}
