"use client";

import { motion } from "framer-motion";

export default function Section2() {
  return (
    <section className="bg-[#0a0a0a] py-32 px-6 relative z-20 border-t border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          <p className="text-2xl md:text-4xl text-zinc-500 font-light leading-relaxed">
            Most creators and personal brands spend years building an audience, earning trust, and creating content.
          </p>
          <p className="text-2xl md:text-4xl text-zinc-300 font-light leading-relaxed">
            But very few have the infrastructure, product strategy, and conversion mechanisms required to monetise that audience.
          </p>
          <p className="text-3xl md:text-5xl font-bold text-white leading-tight">
            As a result, many are sitting on significant untapped revenue potential.
          </p>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block mt-8 text-xl md:text-2xl font-black text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-8 py-3 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.1)]"
          >
            VLTOS exists to unlock that potential.
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
