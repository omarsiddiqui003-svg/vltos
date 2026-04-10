import { Diamond, Cog, TrendingUp, Cpu } from "lucide-react";

export default function VltosPillars() {
  const pillars = [
    {
      id: "01",
      icon: <Diamond className="w-8 h-8 text-blue-400" />,
      title: "Offer Architecture",
      description: "Positioning, High-Yield Ladders, and Market DNA.",
      borderColor: "group-hover:border-blue-500/50"
    },
    {
      id: "02",
      icon: <Cog className="w-8 h-8 text-emerald-400" />,
      title: "Monetization Logic",
      description: "LTV Optimization, Upsell Flow, and Strategic Pricing.",
      borderColor: "group-hover:border-emerald-500/50"
    },
    {
      id: "03",
      icon: <TrendingUp className="w-8 h-8 text-amber-400" />,
      title: "Growth Engine",
      description: "Evergreen Conversion Funnels and Email/SMS Sync.",
      borderColor: "group-hover:border-amber-500/50"
    },
    {
      id: "04",
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      title: "Operations Stack",
      description: "Automated Fulfillment, Customer Success, Analytics.",
      borderColor: "group-hover:border-purple-500/50"
    }
  ];

  return (
    <section className="bg-[#0a0a0a] py-32 px-6 relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
            No Complexity. Just Logic.
          </h2>
          <p className="text-xl text-zinc-400 font-light">
            We deploy only the architecture required to monetize attention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div key={pillar.id} className={`glass-card bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 group transition-all duration-300 ${pillar.borderColor}`}>
              <div className="flex justify-between items-start mb-12">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                  {pillar.icon}
                </div>
                <div className="text-2xl font-black text-white/10 group-hover:text-white/20 transition-colors">
                  {pillar.id}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-zinc-500 font-light text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
