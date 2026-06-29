"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";

// ─── Formula Constants ───────────────────────────────────────────────────────
const CTR  = 0.033;
const LCR  = 0.11;
const PE   = 0.955;
const SCM  = 1.00;
const CREATOR_SHARE = 0.70;
const YEAR1_MULTIPLIER = 18; // 3 launches + evergreen

// SRR lookup by engagement rate band
function getSRR(engagement: number): number {
  if (engagement < 1)               return 0.12;
  if (engagement >= 1 && engagement < 3)  return 0.24;
  if (engagement >= 3 && engagement < 5)  return 0.34;
  if (engagement >= 5 && engagement < 8)  return 0.40;
  return 0.45; // >= 8%
}

// ALC = min(Followers × SRR × 3.0, Followers × 0.85)
function getALC(followers: number, engagement: number): number {
  const SRR = getSRR(engagement);
  return Math.min(followers * SRR * 3.0, followers * 0.85);
}

// Brand deal baseline is now a user input (monthly slider)

const fmt = (val: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(val);

const fmtFollowers = (val: number) =>
  val >= 1_000_000
    ? (val / 1_000_000).toFixed(1) + "M"
    : (val / 1000).toFixed(0) + "k";

export default function CreatorRoiCalculator() {
  const [followers,  setFollowers]  = useState(50_000);
  const [engagement, setEngagement] = useState(4);
  const [price,      setPrice]      = useState(27);
  const [brandDeals, setBrandDeals] = useState(2_000);

  // ── Core calculation ────────────────────────────────────────────────────────
  const { week1Gross, week1Net, year1Net, gap } = useMemo(() => {
    const ALC = getALC(followers, engagement);

    // R = ALC × CTR × LCR × PE × SCM × Price × 0.70
    const grossWeek1 = ALC * CTR * LCR * PE * SCM * price;
    const netWeek1   = grossWeek1 * CREATOR_SHARE;
    const netYear1   = netWeek1 * YEAR1_MULTIPLIER;

    // Opportunity Gap: Year 1 VLTOS revenue vs. a year of brand deals
    const annualBrandDeals = brandDeals * 12;
    const opportunityGap   = Math.max(0, netYear1 - annualBrandDeals);

    return {
      week1Gross: Math.round(grossWeek1),
      week1Net:   Math.round(netWeek1),
      year1Net:   Math.round(netYear1),
      gap:        Math.round(opportunityGap),
    };
  }, [followers, engagement, price, brandDeals]);

  return (
    <section id="estimator" className="bg-black py-28 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-light text-white mb-4">
            What is your audience actually worth?
          </h2>
          <p className="text-zinc-500 text-sm md:text-base font-light max-w-2xl">
            Slide your numbers below. The result is a conservative projection based on real conversion benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* ── LEFT: Inputs ─────────────────────────────────────────────────── */}
          <div className="space-y-8">
            {/* Follower Count */}
            <div className="space-y-3">
              <div className="flex justify-between text-xs uppercase tracking-wider">
                <span className="text-zinc-400">Instagram Followers</span>
                <span className="text-white font-mono bg-white/5 px-2.5 py-0.5 border border-white/10">
                  {fmtFollowers(followers)}
                </span>
              </div>
              <input
                type="range" min={10_000} max={500_000} step={5_000}
                value={followers}
                onChange={(e) => setFollowers(Number(e.target.value))}
                className="w-full h-[2px] bg-zinc-800 rounded-none appearance-none cursor-pointer accent-white"
              />
              <div className="flex justify-between text-[10px] text-zinc-600 font-mono">
                <span>10k</span><span>250k</span><span>500k</span>
              </div>
            </div>

            {/* Engagement Rate */}
            <div className="space-y-3">
              <div className="flex justify-between text-xs uppercase tracking-wider">
                <span className="text-zinc-400">Engagement Rate</span>
                <span className="text-white font-mono bg-white/5 px-2.5 py-0.5 border border-white/10">
                  {engagement}%
                </span>
              </div>
              <input
                type="range" min={0.5} max={12} step={0.5}
                value={engagement}
                onChange={(e) => setEngagement(Number(e.target.value))}
                className="w-full h-[2px] bg-zinc-800 rounded-none appearance-none cursor-pointer accent-white"
              />
              <div className="flex justify-between text-[10px] text-zinc-600 font-mono">
                <span>&lt;1%</span><span>5%</span><span>12%</span>
              </div>
            </div>

            {/* Product Price */}
            <div className="space-y-3">
              <div className="flex justify-between text-xs uppercase tracking-wider">
                <span className="text-zinc-400">Product Price Point</span>
                <span className="text-white font-mono bg-white/5 px-2.5 py-0.5 border border-white/10">
                  ${price}
                </span>
              </div>
              <input
                type="range" min={7} max={49} step={1}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full h-[2px] bg-zinc-800 rounded-none appearance-none cursor-pointer accent-white"
              />
              <div className="flex justify-between text-[10px] text-zinc-600 font-mono">
                <span>$7</span><span>$28</span><span>$49</span>
              </div>
            </div>

            {/* Monthly Brand Deal Income */}
            <div className="space-y-3">
              <div className="flex justify-between text-xs uppercase tracking-wider">
                <span className="text-zinc-400">Monthly Brand Deal Income</span>
                <span className="text-white font-mono bg-white/5 px-2.5 py-0.5 border border-white/10">
                  {fmt(brandDeals)}/mo
                </span>
              </div>
              <input
                type="range" min={0} max={20_000} step={500}
                value={brandDeals}
                onChange={(e) => setBrandDeals(Number(e.target.value))}
                className="w-full h-[2px] bg-zinc-800 rounded-none appearance-none cursor-pointer accent-white"
              />
              <div className="flex justify-between text-[10px] text-zinc-600 font-mono">
                <span>$0</span><span>$10k</span><span>$20k</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Outputs ───────────────────────────────────────────────── */}
          <div className="border border-white/10 p-8 space-y-8 bg-black">
            {/* Primary Focus: Your 70% Share (Year 1) */}
            <div className="border-b border-white/10 pb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium block mb-2">
                Your 70% Share (Year 1)
              </span>
              <span className="text-4xl md:text-5xl font-extrabold text-white font-mono tracking-tight block">
                {fmt(year1Net)}
              </span>
              <span className="block text-[11px] text-zinc-500 mt-2 tracking-wide">
                Based on a structured launch model (3 launches + evergreen sequence).
              </span>
            </div>

            {/* Week 1 Details */}
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-500 uppercase tracking-widest">Estimated Week 1 (Net)</span>
              <span className="text-white font-mono font-medium">{fmt(week1Net)}</span>
            </div>

            {/* Year 1 Details */}
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-500 uppercase tracking-widest">Estimated Year 1 (Gross)</span>
              <span className="text-white font-mono font-medium">{fmt(Math.round(year1Net / CREATOR_SHARE))}</span>
            </div>

            {/* Baseline comparison */}
            <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs">
              <span className="text-zinc-500 uppercase tracking-widest">Opportunity Gap vs. Brand Deals</span>
              <span className="text-white font-mono font-medium">{fmt(gap)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
