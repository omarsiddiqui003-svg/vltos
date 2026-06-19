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

// Estimated brand-deal income (used purely for Opportunity Gap baseline)
function getBrandDealBaseline(followers: number): number {
  return followers * 0.03; // roughly $0.03 per follower per month × 12 = yearly
}

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

  // ── Core calculation ────────────────────────────────────────────────────────
  const { week1Gross, week1Net, year1Net, gap } = useMemo(() => {
    const ALC = getALC(followers, engagement);

    // R = ALC × CTR × LCR × PE × SCM × Price × 0.70
    const grossWeek1 = ALC * CTR * LCR * PE * SCM * price;
    const netWeek1   = grossWeek1 * CREATOR_SHARE;
    const netYear1   = netWeek1 * YEAR1_MULTIPLIER;

    // Opportunity Gap: Year 1 VLTOS revenue vs. a year of brand deals
    const annualBrandDeals = getBrandDealBaseline(followers) * 12;
    const opportunityGap   = Math.max(0, netYear1 - annualBrandDeals);

    return {
      week1Gross: Math.round(grossWeek1),
      week1Net:   Math.round(netWeek1),
      year1Net:   Math.round(netYear1),
      gap:        Math.round(opportunityGap),
    };
  }, [followers, engagement, price]);

  return (
    <div className="w-full max-w-4xl mx-auto mt-16 glass-card bg-[#0e0e0e]/90 border border-white/10 rounded-3xl p-6 md:p-12 relative overflow-hidden shadow-2xl">
      {/* ambient glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* ── LEFT: Inputs ─────────────────────────────────────────────────── */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Revenue Estimator</h3>
            <p className="text-zinc-500 text-sm font-light">
              Slide your numbers to see what a structured product launch could generate.
            </p>
          </div>

          {/* Follower Count */}
          <div className="space-y-3">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-zinc-400">Instagram Followers</span>
              <span className="text-white font-mono bg-white/5 px-2.5 py-0.5 rounded-md border border-white/10">
                {fmtFollowers(followers)}
              </span>
            </div>
            <input
              type="range" min={10_000} max={500_000} step={5_000}
              value={followers}
              onChange={(e) => setFollowers(Number(e.target.value))}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-xs text-zinc-600 font-mono">
              <span>10k</span><span>250k</span><span>500k</span>
            </div>
          </div>

          {/* Engagement Rate */}
          <div className="space-y-3">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-zinc-400">Engagement Rate</span>
              <span className="text-white font-mono bg-white/5 px-2.5 py-0.5 rounded-md border border-white/10">
                {engagement}%
                <span className="text-zinc-500 text-[10px] ml-1">
                  SRR {getSRR(engagement).toFixed(2)}
                </span>
              </span>
            </div>
            <input
              type="range" min={0.5} max={12} step={0.5}
              value={engagement}
              onChange={(e) => setEngagement(Number(e.target.value))}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-xs text-zinc-600 font-mono">
              <span>&lt;1%</span><span>5%</span><span>12%</span>
            </div>
          </div>

          {/* Product Price */}
          <div className="space-y-3">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-zinc-400">Product Price Point</span>
              <span className="text-white font-mono bg-white/5 px-2.5 py-0.5 rounded-md border border-white/10">
                ${price}
              </span>
            </div>
            <input
              type="range" min={7} max={49} step={1}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-xs text-zinc-600 font-mono">
              <span>$7</span><span>$28</span><span>$49</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Outputs ───────────────────────────────────────────────── */}
        <div className="flex flex-col gap-4">

          {/* Week 1 */}
          <div className="bg-black/40 border border-white/5 rounded-2xl p-5">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold block mb-2">
              Estimated Week 1 Revenue
            </span>
            <span className="text-3xl font-extrabold text-white font-mono tracking-tight">
              {fmt(week1Net)}
            </span>
            <span className="block text-xs text-zinc-600 mt-1 font-mono">
              Gross {fmt(week1Gross)} · your 70% share
            </span>
          </div>

          {/* Year 1 */}
          <div className="bg-black/40 border border-white/5 rounded-2xl p-5">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold block mb-2">
              Estimated Year 1 Revenue
            </span>
            <span className="text-3xl font-extrabold text-white font-mono tracking-tight">
              {fmt(year1Net)}
            </span>
            <span className="block text-xs text-zinc-600 mt-1 font-mono">
              Gross {fmt(Math.round(year1Net / CREATOR_SHARE))} · 3 launches + evergreen × 18
            </span>
          </div>

          {/* Opportunity Gap */}
          <motion.div
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 text-center relative overflow-hidden shadow-lg shadow-emerald-500/5 flex-1 flex flex-col items-center justify-center"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
            <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold block mb-1">
              Opportunity Gap vs. Brand Deals
            </span>
            <span className="text-3xl md:text-4xl font-extrabold text-white font-mono tracking-tight">
              {fmt(gap)}
            </span>
            <span className="text-xs text-zinc-500 mt-2 block font-light">
              Revenue left on the table this year without a backend.
            </span>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
