"use client";

import { motion } from "framer-motion";
import { Check, AlertTriangle } from "lucide-react";

export default function StrategicFiltering() {
  const criteriaList = [
    "We partner exclusively with Instagram creators at the moment.",
    "Must have an engaged following of 10k+ followers.",
    "Personal brands, coaches, consultants, and experts.",
    "Those sitting on significant untapped revenue potential."
  ];

  return (
    <section id="selective" className="bg-[#0a0a0a] py-32 px-6 relative z-20 overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white text-sm font-semibold mb-6">
            Selective Partnerships
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
            We are selective. Here is why.
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            VLTOS takes on two to three creators per quarter. Every partnership gets the full team, full attention, and a gameplan built from scratch around their specific account.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Who we work with */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-white/20 transition-all duration-500 relative group overflow-hidden"
          >
            {/* Ambient hover glow */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-white/10 transition-colors duration-500" />
            
            <div>
              <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-white/5 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white" /> Who we work with
              </h3>
              <ul className="space-y-5">
                {criteriaList.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-zinc-300 font-light text-base md:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Who we don't work with */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card bg-[#0e0e0e] border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-red-500/20 transition-all duration-500 relative group overflow-hidden"
          >
            {/* Ambient hover glow */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-red-500/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-red-500/10 transition-colors duration-500" />

            <div>
              <h3 className="text-xl font-bold text-zinc-400 mb-6 pb-4 border-b border-white/5 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-500" /> Who we don't work with
              </h3>
              <p className="text-zinc-400 font-light text-base md:text-lg leading-relaxed">
                We do not work with creators chasing shortcuts. If you want a product thrown together overnight and blasted to your audience, we are not the right fit.
              </p>
            </div>
            <div className="mt-8 text-xs font-semibold text-zinc-500 tracking-wider uppercase bg-white/5 px-4 py-2 rounded-xl border border-white/5 text-center cursor-default">
              Selective Quality Over Volume
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
