"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import CreatorRoiCalculator from "@/components/CreatorRoiCalculator";

export default function OpportunityGap() {
  return (
    <section className="bg-[#0a0a0a] py-32 px-6 relative z-20 overflow-hidden border-t border-white/5">
      {/* Background glow behind calculator */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-sm font-semibold mb-6">
            <AlertTriangle className="w-4 h-4" /> Untapped Potential
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
            Want to find out how much money you are leaving on the table?
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            Find out down below. Slide your metrics to see the actual revenue potential of a properly engineered digital product launch.
          </p>
        </div>

        {/* Embedded Interactive ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <CreatorRoiCalculator />
        </motion.div>

      </div>
    </section>
  );
}
