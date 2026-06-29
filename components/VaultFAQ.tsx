"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function VaultFAQ() {
  const faqs = [
    {
      question: "Do I pay anything upfront?",
      answer: "No. Zero. VLTOS earns 30% of what the launch generates. If nothing sells, we receive nothing."
    },
    {
      question: "Who owns the product?",
      answer: "You do. Completely. VLTOS has no claim to your product, your content, or your audience."
    },
    {
      question: "How long does it take?",
      answer: "3 to 5 weeks from agreement to launch day."
    },
    {
      question: "What if the launch underperforms?",
      answer: "You've lost nothing — you paid nothing. The product stays live and continues to sell. We analyse and adjust."
    },
    {
      question: "Will this change how my content feels?",
      answer: "No. We operate in the background to script and structure your product launch. The product carries your voice, and your brand remains completely yours."
    },
    {
      question: "How much work is required from me?",
      answer: "We ask for 6 days of Instagram Stories during the launch. We script everything, you just film and post."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-black py-28 px-6 border-t border-white/10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif font-light text-white mb-16 text-left">
          Common Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border border-white/10 p-6 cursor-pointer hover:border-white/20 transition-colors bg-black"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="flex justify-between items-center text-white select-none">
                  <span className="font-semibold text-sm md:text-base pr-4 uppercase tracking-wider">{faq.question}</span>
                  {isOpen ? (
                    <Minus className="text-zinc-400 w-4 h-4 flex-shrink-0" />
                  ) : (
                    <Plus className="text-zinc-400 w-4 h-4 flex-shrink-0" />
                  )}
                </div>
                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-white/5 text-zinc-400 font-light text-xs md:text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
