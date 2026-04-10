"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function VaultFAQ() {
  const faqs = [
    {
      question: "Will this alter my brand voice?",
      answer: "No. We provide the engine; you remain the driver. Our infrastructure operates silently in the background, amplifying your existing voice and preserving your unique relationship with your audience."
    },
    {
      question: "Integration speed?",
      answer: "The VLTOS Protocol typically activates within 7-10 days, minimizing downtime and accelerating your path to new high-ticket revenue."
    },
    {
      question: "IP Ownership?",
      answer: "You retain 100% ownership of your assets, data, and audience. We build the vault, but you always hold the master key."
    },
    {
      question: "The Cost?",
      answer: "Performance-based. We only profit when the vault opens. No massive upfront retainers, just aligned incentives based on actual revenue generated."
    },
    {
      question: "Why VLTOS?",
      answer: "Quiet, white-glove execution. No tech drama. Just math. We eliminate the friction of building a business so you can focus exclusively on growth."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#0a0a0a] py-32 px-6 relative z-20 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            The Vault FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="glass-card bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-white/20 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="p-6 flex justify-between items-center text-white">
                <span className="font-medium text-lg pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="text-zinc-400 w-5 h-5 flex-shrink-0" />
                ) : (
                  <Plus className="text-zinc-400 w-5 h-5 flex-shrink-0" />
                )}
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-zinc-400 font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
