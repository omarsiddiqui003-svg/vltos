import { Brain, Zap, Rocket } from "lucide-react";

export default function Accelerator() {
  return (
    <section className="bg-[#0a0a0a] py-32 px-6 relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <div id="protocol" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8">
            The Process
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            Minimal Meetings.<br /> Maximum Output.<br className="hidden md:block" /> Total Documentation.
          </h2>
          <p className="mt-6 text-xl text-zinc-400 max-w-2xl mx-auto font-light">
            The VLTOS Protocol: Our proprietary methodology engineered to map your existing attention straight to high-ticket revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[25%] left-[5%] right-[5%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />

          {/* Phase 1 */}
          <div className="relative z-10 glass-card bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500">
            <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]">
              <Brain size={24} />
            </div>
            <div className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-3">Step 01</div>
            <h3 className="text-xl font-bold text-white mb-4">Diagnosis</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              Mapping your audience DNA and identifying high-ticket revenue gaps.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="relative z-10 glass-card bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500">
             <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(168,85,247,0.15)] group-hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]">
              <Zap size={24} />
            </div>
            <div className="text-xs uppercase tracking-widest text-purple-400 font-bold mb-3">Step 02</div>
            <h3 className="text-xl font-bold text-white mb-4">Architecture</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              Engineering your high-ticket product suite and positioning.
            </p>
          </div>

          {/* Phase 3 */}
          <div className="relative z-10 glass-card bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500">
             <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]">
              <Rocket size={24} />
            </div>
            <div className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-3">Step 03</div>
            <h3 className="text-xl font-bold text-white mb-4">Activation</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              Deploying the VLTOS 14-Day Launch Sequence for rapid monetization.
            </p>
          </div>

          {/* Phase 4 */}
          <div className="relative z-10 glass-card bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500">
             <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(245,158,11,0.15)] group-hover:shadow-[0_0_40px_rgba(245,158,11,0.3)]">
              <Brain size={24} />
            </div>
            <div className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-3">Step 04</div>
            <h3 className="text-xl font-bold text-white mb-4">Compounding</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              Optimizing retention and scaling Lifetime Value (LTV) continuously.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
