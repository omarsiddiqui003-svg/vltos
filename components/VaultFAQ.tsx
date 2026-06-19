"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function VaultFAQ() {
  const faqs = [
    {
      question: "Will this change how my content feels to my audience?",
      answer: "No. We operate in the background. The products carry your voice, your style, and your name. Your audience relationship stays entirely yours."
    },
    {
      question: "How fast does this actually move?",
      answer: "Every partnership to date has launched within 11 days of agreement and generated revenue within its first cycle."
    },
    {
      question: "Do I need to do a lot of extra work?",
      answer: "Around six to eight hours per month on top of your regular content. We give you templates, scripts, and a content calendar. You film and post. We handle everything else."
    },
    {
      question: "What if a product makes no money?",
      answer: "Then we make no money either. That is the model."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#0a0a0a] py-32 px-6 relative z-20 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/70 text-sm font-semibold mb-6">
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="glass-card bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-white/20 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="p-6 flex justify-between items-center text-white select-none">
                <span className="font-bold text-base md:text-lg pr-4">{faq.question}</span>
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
                    <div className="px-6 pb-6 text-zinc-400 font-light text-sm md:text-base leading-relaxed border-t border-white/5 pt-4">
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
