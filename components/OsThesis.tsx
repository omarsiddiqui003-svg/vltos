import { Layers, Database, BarChart3, Repeat } from "lucide-react";

export default function OsThesis() {
  return (
    <section id="methodology" className="bg-[#0a0a0a] py-32 px-6 relative z-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8">
            The "OS" Thesis
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-tight">
            You are the Face. <br />
            <span className="text-zinc-500">We are the Operating System.</span>
          </h2>
          <p className="mt-8 text-xl text-zinc-400 font-light leading-relaxed">
            Most creators master the 99%—content and distribution. VLTOS solves the <strong className="text-white">Final 1%</strong>: the engineering required to turn attention into an automated revenue engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Narrative Left */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Silent Infrastructure Partner</h3>
            <p className="text-lg text-zinc-400 leading-relaxed mb-6">
              VLTOS acts as your silent infrastructure partner. We design, deploy, and manage the backend logic of your business so you can remain in your zone of genius: creating.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              No more messy tech stacks, fragmented offers, or operational drag. Just clean, optimized math.
            </p>
          </div>

          {/* Capabilities Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-card bg-[#0f0f0f] border border-white/10 p-8 rounded-3xl hover:border-blue-500/30 transition-colors">
              <Database className="text-blue-500 mb-6 w-8 h-8" />
              <h4 className="text-white font-bold mb-3">Extract Value</h4>
              <p className="text-zinc-500 text-sm">Extract maximum enterprise value from existing trust.</p>
            </div>
            
            <div className="glass-card bg-[#0f0f0f] border border-white/10 p-8 rounded-3xl hover:border-purple-500/30 transition-colors">
              <Layers className="text-purple-500 mb-6 w-8 h-8" />
              <h4 className="text-white font-bold mb-3">Productize</h4>
              <p className="text-zinc-500 text-sm">Productize expertise into high-margin digital assets.</p>
            </div>

            <div className="glass-card bg-[#0f0f0f] border border-white/10 p-8 rounded-3xl hover:border-emerald-500/30 transition-colors">
              <BarChart3 className="text-emerald-500 mb-6 w-8 h-8" />
              <h4 className="text-white font-bold mb-3">Architect Ecosystems</h4>
              <p className="text-zinc-500 text-sm">Architect automated ecosystems that outlive the algorithm.</p>
            </div>

            <div className="glass-card bg-[#0f0f0f] border border-white/10 p-8 rounded-3xl hover:border-amber-500/30 transition-colors">
              <Repeat className="text-amber-500 mb-6 w-8 h-8" />
              <h4 className="text-white font-bold mb-3">Exit the Grind</h4>
              <p className="text-zinc-500 text-sm">Exit the attention-grind for predictable, compounding revenue.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
