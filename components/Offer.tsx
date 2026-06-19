"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Offer() {
  const termsList = [
    {
      title: "$0 upfront. Always.",
      desc: "We take on 100% of the operational costs and setup labor. We make money only when you make money."
    },
    {
      title: "70% of revenue goes to you.",
      desc: "Every sale, every time. The split remains aligned explicitly in your favor."
    },
    {
      title: "You own everything.",
      desc: "Every product, every customer database, and every piece of intellectual property. If you walk away tomorrow, it all stays with you."
    },
    {
      title: "12-month initial term.",
      desc: "After that, 30 days notice to exit. No hidden exit fees, no penalties, and no platform lock-in."
    }
  ];

  return (
    <section id="terms" className="bg-[#0a0a0a] py-32 px-6 relative z-20 border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Detail Hero */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-sm font-semibold mb-2">
              The Terms
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
              Nothing hidden.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                Nothing complicated.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Our business model aligns scaling explicitly with performance. If our systems don't generate new sales for you, we work for free.
            </p>
          </div>

          {/* Right Side: Terms Cards List */}
          <div className="lg:col-span-7 space-y-4">
            {termsList.map((term, idx) => (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx}
                className="glass-card bg-[#0f0f0f]/80 border border-white/10 hover:border-amber-500/30 rounded-2xl p-6 flex gap-4 transition-all duration-300 relative overflow-hidden"
              >
                {/* Glow dot behind */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl pointer-events-none" />
                
                <div className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white tracking-tight">{term.title}</h3>
                  <p className="text-zinc-400 font-light text-sm leading-relaxed">{term.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
