"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LineChart, Mail, Box, Percent, Check, TrendingUp } from "lucide-react";

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState<"revenue" | "funnels" | "products">("revenue");

  const metrics = [
    {
      label: "Monthly Revenue",
      value: "$18,450",
      change: "+24.8%",
      icon: <TrendingUp className="w-5 h-5 text-white" />,
    },
    {
      label: "Conversion Rate",
      value: "4.2%",
      change: "+0.8%",
      icon: <Percent className="w-5 h-5 text-blue-400" />,
    },
    {
      label: "Active Funnels",
      value: "3",
      change: "Optimized",
      icon: <Mail className="w-5 h-5 text-purple-400" />,
    },
    {
      label: "Products Live",
      value: "4",
      change: "Active",
      icon: <Box className="w-5 h-5 text-amber-400" />,
    },
  ];

  return (
    <div className="w-full glass-card bg-[#0e0e0e]/95 border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative">
      {/* Top Header Mockup */}
      <div className="flex justify-between items-center px-6 py-4 bg-black/40 border-b border-white/5">
        <div className="flex items-center gap-2">
          {/* Mock Window Dots */}
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
          <span className="text-xs text-zinc-500 font-mono ml-4 uppercase tracking-widest">VLTOS Engine v1.0.4</span>
        </div>
        <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[10px] text-white font-bold uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Live Status
        </div>
      </div>

      <div className="p-6 md:p-8">
        {/* Metrics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((m) => (
            <div key={m.label} className="bg-black/30 border border-white/5 rounded-2xl p-4 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-zinc-500 font-light">{m.label}</span>
                {m.icon}
              </div>
              <div>
                <span className="text-xl font-bold text-white font-mono block">{m.value}</span>
                <span className="text-[10px] text-white font-medium font-mono">{m.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-white/5 mb-6">
          <button
            onClick={() => setActiveTab("revenue")}
            className={`px-4 py-2 text-sm font-semibold transition-colors border-b-2 -mb-[2px] ${
              activeTab === "revenue"
                ? "text-white border-white"
                : "text-zinc-500 border-transparent hover:text-zinc-300"
            }`}
          >
            Revenue Flow
          </button>
          <button
            onClick={() => setActiveTab("funnels")}
            className={`px-4 py-2 text-sm font-semibold transition-colors border-b-2 -mb-[2px] ${
              activeTab === "funnels"
                ? "text-white border-white"
                : "text-zinc-500 border-transparent hover:text-zinc-300"
            }`}
          >
            Funnels
          </button>
          <button
            onClick={() => setActiveTab("products")}
            className={`px-4 py-2 text-sm font-semibold transition-colors border-b-2 -mb-[2px] ${
              activeTab === "products"
                ? "text-white border-white"
                : "text-zinc-500 border-transparent hover:text-zinc-300"
            }`}
          >
            Products
          </button>
        </div>

        {/* Dynamic Display Area */}
        <div className="min-h-[220px] bg-black/20 border border-white/5 rounded-2xl p-6 relative overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            {activeTab === "revenue" && (
              <motion.div
                key="revenue"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex flex-col justify-between"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">Net Yield</span>
                    <span className="text-2xl font-bold text-white font-mono">$18,450.00</span>
                  </div>
                  <span className="text-xs text-zinc-400 font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded">Last 30 Days</span>
                </div>
                
                {/* SVG Line Graph */}
                <div className="w-full h-32 mt-4 relative">
                  <svg className="w-full h-full" viewBox="0 0 500 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Shadow Area under the line */}
                    <path
                      d="M0 80 Q100 70 200 45 T400 15 L500 10 L500 100 L0 100 Z"
                      fill="url(#chartGradient)"
                    />
                    {/* Animated Line */}
                    <motion.path
                      d="M0 80 Q100 70 200 45 T400 15 L500 10"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </svg>
                  {/* Grid Lines */}
                  <div className="absolute inset-0 border-t border-b border-dashed border-white/5 pointer-events-none" />
                  <div className="absolute inset-y-0 left-1/3 border-l border-dashed border-white/5 pointer-events-none" />
                  <div className="absolute inset-y-0 left-2/3 border-l border-dashed border-white/5 pointer-events-none" />
                </div>
              </motion.div>
            )}

            {activeTab === "funnels" && (
              <motion.div
                key="funnels"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full space-y-4"
              >
                {/* Funnel Steps Mockup */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-zinc-400 font-medium">1. Link-in-Bio Checkout Visits</span>
                      <span className="text-white font-mono">14,205 clicks (100%)</span>
                    </div>
                    <div className="w-full bg-white/5 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-white h-full w-full" />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-zinc-400 font-medium">2. Order Forms Initiated</span>
                      <span className="text-white font-mono">2,840 visits (20%)</span>
                    </div>
                    <div className="w-full bg-white/5 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-white h-full w-[20%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-zinc-400 font-medium">3. Completed Sales</span>
                      <span className="text-white font-mono">596 purchases (4.2%)</span>
                    </div>
                    <div className="w-full bg-white/5 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-white h-full w-[4.2%]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "products" && (
              <motion.div
                key="products"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full space-y-3"
              >
                {/* Products Live list */}
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center bg-black/40 border border-white/5 rounded-xl p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-white" />
                      <span className="text-sm font-semibold text-white">1-on-1 Advisory Protocol</span>
                    </div>
                    <span className="text-xs text-zinc-500 font-mono font-medium">$1,500</span>
                  </div>

                  <div className="flex justify-between items-center bg-black/40 border border-white/5 rounded-xl p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-white" />
                      <span className="text-sm font-semibold text-white">Digital Productization Suite</span>
                    </div>
                    <span className="text-xs text-zinc-500 font-mono font-medium">$299</span>
                  </div>

                  <div className="flex justify-between items-center bg-black/40 border border-white/5 rounded-xl p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-white" />
                      <span className="text-sm font-semibold text-white">Private Circle Membership</span>
                    </div>
                    <span className="text-xs text-zinc-500 font-mono font-medium">$99/mo</span>
                  </div>

                  <div className="flex justify-between items-center bg-black/40 border border-white/5 rounded-xl p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-white" />
                      <span className="text-sm font-semibold text-white">Asset Optimization Vault</span>
                    </div>
                    <span className="text-xs text-zinc-500 font-mono font-medium">$499</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
