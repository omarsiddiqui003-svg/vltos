"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import DashboardPreview from "@/components/DashboardPreview";

export default function OsThesis() {
  const whatWeDoList = [
    "Turn your content pillars into products people pay for.",
    "Build the pages, checkouts, and funnels that convert your audience.",
    "Run a 14-day launch sequence engineered around how people actually buy.",
    "Optimise everything after launch so revenue compounds over time."
  ];

  return (
    <section id="what-we-do" className="bg-[#0a0a0a] py-32 px-6 relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Narrative & Details (Left 7 cols on large screens) */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-semibold mb-2">
                The Partner Model
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
                You are the face.<br />
                <span className="text-zinc-500">We run the engine.</span>
              </h2>
              <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
                You already do the hard part. You show up, you create, you build trust. VLTOS handles everything that comes after. Product design. Sales pages. Launch strategy. Payment processing. Analytics. All of it.
              </p>
            </motion.div>

            {/* Terms Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <span className="text-2xl font-bold text-white block mb-1">70% / 30%</span>
                <p className="text-sm text-zinc-400 font-light">You keep 70% of every sale. We earn the other 30% only when you do.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <span className="text-2xl font-bold text-emerald-400 block mb-1">Zero Risk</span>
                <p className="text-sm text-zinc-400 font-light">There is no retainer. No upfront fee. No risk on your end.</p>
              </div>
            </div>

            {/* What we actually do */}
            <div className="space-y-6 border-t border-white/5 pt-8">
              <h3 className="text-2xl font-bold text-white">What we actually do</h3>
              <ul className="space-y-4">
                {whatWeDoList.map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-zinc-300 font-light text-base md:text-lg leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interactive Dashboard Preview (Right 5 cols on large screens) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <DashboardPreview />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
