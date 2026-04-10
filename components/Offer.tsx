import { CheckCircle2 } from "lucide-react";

export default function Offer() {
  return (
    <section className="bg-[#0a0a0a] py-32 px-6 relative z-20 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Text Detail */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-tight">
            The  <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
              Performance-Only
            </span> <br className="hidden md:block"/>
            Offer
          </h2>
          <p className="mt-6 text-xl text-zinc-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
            We exclusively partner with creators we believe in. Because our model aligns scaling explicitly with performance, we take on 100% of the operational risk so you focus entirely on your content.
          </p>
        </div>

        {/* Pricing/Offer Card */}
        <div className="flex-1 w-full max-w-lg">
          <div className="glass-card bg-[#111111]/80 border border-amber-500/30 rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-[0_0_50px_rgba(245,158,11,0.1)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="text-5xl md:text-7xl font-bold text-white mb-2">
              $0
            </div>
            <div className="text-xl text-amber-500 font-medium uppercase tracking-widest mb-10">
              Upfront Cost
            </div>

            <div className="border-t border-white/10 pt-8 mb-10">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                70 / 30
              </div>
              <div className="text-lg text-zinc-400 font-medium">
                Revenue Split (In Your Favor)
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-zinc-300">
                <CheckCircle2 className="text-amber-500 w-6 h-6 flex-shrink-0" />
                <span className="text-lg">Elite Copywriting</span>
              </li>
              <li className="flex items-center gap-4 text-zinc-300">
                <CheckCircle2 className="text-amber-500 w-6 h-6 flex-shrink-0" />
                <span className="text-lg">Full Technical Infrastructure</span>
              </li>
              <li className="flex items-center gap-4 text-zinc-300">
                <CheckCircle2 className="text-amber-500 w-6 h-6 flex-shrink-0" />
                <span className="text-lg">Product Development</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
