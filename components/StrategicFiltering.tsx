import { CheckCircle2, XCircle } from "lucide-react";

export default function StrategicFiltering() {
  return (
    <section className="bg-[#0a0a0a] py-32 px-6 relative z-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
            Selection Criteria
          </h2>
          <p className="text-xl text-zinc-400 font-light">
            VLTOS only partners with established Creators, Founders, and Experts who value precision over hype.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Elite Profile - The Green Light */}
          <div className="glass-card bg-[#0f0f0f] border border-white/5 rounded-3xl p-10 relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
              The Elite Profile
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <CheckCircle2 className="text-emerald-500 w-6 h-6 flex-shrink-0" />
                <span className="text-zinc-300 font-light text-lg">Established Personal Brands with high-trust distribution.</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="text-emerald-500 w-6 h-6 flex-shrink-0" />
                <span className="text-zinc-300 font-light text-lg">Subject Matter Experts ready to productize their knowledge.</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="text-emerald-500 w-6 h-6 flex-shrink-0" />
                <span className="text-zinc-300 font-light text-lg">Consultants and Coaches seeking infrastructure, not "help."</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="text-emerald-500 w-6 h-6 flex-shrink-0" />
                <span className="text-zinc-300 font-light text-lg">Media-driven brands looking for backend optimization.</span>
              </li>
            </ul>
          </div>

          {/* Automatic Rejections - The Red Light */}
          <div className="glass-card bg-[#0c0c0c] border border-red-500/10 rounded-3xl p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[80px] pointer-events-none opacity-50" />
            <h3 className="text-2xl font-bold text-white/60 mb-8 border-b border-white/5 pb-4">
              Automatic Rejections
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4 opacity-70">
                <XCircle className="text-red-500 w-6 h-6 flex-shrink-0" />
                <span className="text-zinc-400 font-light text-lg">Audiences under 10K or unproven market demand.</span>
              </li>
              <li className="flex gap-4 opacity-70">
                <XCircle className="text-red-500 w-6 h-6 flex-shrink-0" />
                <span className="text-zinc-400 font-light text-lg">Creators seeking "get rich quick" shortcuts or passive-income myths.</span>
              </li>
              <li className="flex gap-4 opacity-70">
                <XCircle className="text-red-500 w-6 h-6 flex-shrink-0" />
                <span className="text-zinc-400 font-light text-lg">Lack of desire for long-term sustainable brand building.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
