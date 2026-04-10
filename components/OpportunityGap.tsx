import { AlertTriangle } from "lucide-react";

export default function OpportunityGap() {
  return (
    <section className="bg-[#0a0a0a] py-32 px-6 relative z-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/10 text-red-400 text-sm font-medium mb-8">
          <AlertTriangle size={16} />
          The Diagnostic
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-tight">
          The Attention Paradox:<br />
          <span className="text-zinc-600">High Engagement, Low Utility.</span>
        </h2>
        
        <p className="mt-8 text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
          You aren’t short on talent; you’re short on systems.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
          {/* Problem List */}
          <div className="bg-[#0f0f0f] border border-white/5 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">The Ceiling</h3>
            <ul className="space-y-4">
              <li className="text-zinc-400"><strong className="text-zinc-200">Volatile Cycles:</strong> Launch spikes followed by revenue silence.</li>
              <li className="text-zinc-400"><strong className="text-zinc-200">Tool Fatigue:</strong> Fragmented tech stacks with zero synchronization.</li>
              <li className="text-zinc-400"><strong className="text-zinc-200">Pipeline Friction:</strong> DMs and inquiries lost in the noise.</li>
              <li className="text-zinc-400"><strong className="text-zinc-200">Brand Dilution:</strong> Fragmented offers that confuse the market.</li>
            </ul>
          </div>

          {/* Solution List */}
          <div className="bg-[#0f0f0f] border border-emerald-500/20 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[40px] pointer-events-none" />
            <h3 className="text-xl font-bold text-emerald-400 mb-6 border-b border-emerald-500/20 pb-4">The VLTOS Solution</h3>
            <ul className="space-y-4">
              <li className="text-zinc-300">High-Yield Product Ladders (Low → High Ticket).</li>
              <li className="text-zinc-300">Nurture Sequences that automate trust.</li>
              <li className="text-zinc-300">Recurring Revenue Engines (Memberhips/SaaS).</li>
              <li className="text-zinc-300">Clean-Room CRM and Billing Infrastructure.</li>
              <li className="text-zinc-300">Real-Time Data Analytics for objective scaling.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
