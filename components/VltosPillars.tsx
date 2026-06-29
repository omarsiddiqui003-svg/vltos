"use client";

import { Box, Mail, Settings, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";

export default function VltosPillars() {
  const pillars = [
    {
      id: "01",
      icon: <Box className="w-6 h-6 text-white stroke-[1.5]" />,
      title: "Product Design",
      description: "Exactly what you sell, how we structure it, and how we price it.",
      borderColor: "hover:border-white/30"
    },
    {
      id: "02",
      icon: <Mail className="w-6 h-6 text-white stroke-[1.5]" />,
      title: "Funnels & Emails",
      description: "Landing pages and automated emails that turn viewers into buyers.",
      borderColor: "hover:border-white/30"
    },
    {
      id: "03",
      icon: <Settings className="w-6 h-6 text-white stroke-[1.5]" />,
      title: "Tech & Operations",
      description: "Customer support, billing setup, and automation—fully managed by us.",
      borderColor: "hover:border-white/30"
    },
    {
      id: "04",
      icon: <BarChart2 className="w-6 h-6 text-white stroke-[1.5]" />,
      title: "Data & Growth",
      description: "Tracking metrics daily so we make decisions based on math, not guesses.",
      borderColor: "hover:border-white/30"
    }
  ];

  return (
    <section className="bg-[#0a0a0a] py-32 px-6 relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif tracking-tight text-white mb-6">
            No complex jargon. Just results.
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-light">
            We deploy the exact systems required to turn your following into a compounding asset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              key={pillar.id}
              className={`glass-card bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 group transition-all duration-300 ${pillar.borderColor}`}
            >
              <div className="flex justify-between items-start mb-12">
                <div className="p-4 bg-white/5 rounded-none border border-white/10">
                  {pillar.icon}
                </div>
                <div className="text-2xl font-black text-white/10 group-hover:text-white/20 transition-colors">
                  {pillar.id}
                </div>
              </div>
              <h3 className="text-xl font-serif text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-zinc-500 font-light text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
