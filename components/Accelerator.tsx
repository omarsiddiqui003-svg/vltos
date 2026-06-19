"use client";

import { motion } from "framer-motion";
import { LineChart, Compass, Rocket, TrendingUp, Search } from "lucide-react";

export default function Accelerator() {
  const steps = [
    {
      id: "01",
      label: "Research & Strategy",
      description: "Phases 1-3. Deep analysis of audience behaviour, market demand, and revenue opportunities. We map proven demand and engineer the product strategy before anything is built.",
      icon: <Search size={24} />,
      color: "blue",
      glowColor: "rgba(59, 130, 246, 0.3)",
      iconStyle: "bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
    },
    {
      id: "02",
      label: "Validation & Development",
      description: "Phases 4-6. We validate demand to confirm product-market fit, then build the product framework, curriculum, and scalable backend infrastructure required to support growth.",
      icon: <Compass size={24} />,
      color: "purple",
      glowColor: "rgba(168, 85, 247, 0.3)",
      iconStyle: "bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.15)] group-hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]"
    },
    {
      id: "03",
      label: "Launch Engineering",
      description: "Phases 7-9. We execute a structured pre-launch warm-up to build desire. Unlike standard launches, we launch on Day 6 to generate revenue early while maintaining momentum.",
      icon: <Rocket size={24} />,
      color: "emerald",
      glowColor: "rgba(16, 185, 129, 0.3)",
      iconStyle: "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]"
    },
    {
      id: "04",
      label: "Optimisation & Growth",
      description: "Phases 10-12. Continuous post-launch analysis. We identify what messaging resonated, expand customer lifetime value, and transform the launch into a scalable digital business.",
      icon: <TrendingUp size={24} />,
      color: "amber",
      glowColor: "rgba(245, 158, 11, 0.3)",
      iconStyle: "bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:bg-amber-500/20 shadow-[0_0_30px_rgba(245,158,11,0.15)] group-hover:shadow-[0_0_40px_rgba(245,158,11,0.3)]"
    }
  ];

  return (
    <section id="process" className="bg-[#0a0a0a] py-32 px-6 relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-500/20 bg-white/5 text-zinc-400 text-sm font-semibold mb-8">
            The 12-Phase Framework
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Built on proven audience behaviour.
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[25%] left-[5%] right-[5%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

          {steps.map((step) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              key={step.id}
              className="relative z-10 glass-card bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500"
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 ${step.glowColor ? "" : ""} ${step.iconStyle}`}>
                {step.icon}
              </div>

              {/* Step counter */}
              <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-3 font-mono">
                Pillar {step.id}
              </div>

              {/* Step label */}
              <h3 className="text-xl font-bold text-white mb-4">
                {step.label}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
