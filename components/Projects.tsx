import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Project Alpha",
    category: "E-Commerce Experience",
    description: "A headless architectural redesign focusing on 3D aesthetics and seamless checkout.",
    tags: ["Next.js", "Three.js", "Shopify"],
  },
  {
    title: "Beta Platform",
    category: "SaaS Dashboard",
    description: "High-performance data visualization interface for real-time analytics.",
    tags: ["React", "D3.js", "Framer Motion"],
  },
  {
    title: "Gamma Identity",
    category: "Brand & Web",
    description: "Digital identity and WebGL-powered landing page for a cutting-edge AI startup.",
    tags: ["WebGL", "Tailwind", "GSAP"],
  },
  {
    title: "Delta SDK",
    category: "Developer Tools",
    description: "Comprehensive documentation and interactive playground for an open-source library.",
    tags: ["TypeScript", "MDX", "Vercel"],
  }
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#0a0a0a] px-6 py-32 md:px-20 lg:px-32 relative z-20 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">Selected Work</h2>
          <p className="text-xl text-white/50 mt-6 max-w-2xl font-light">
            A curated selection of my latest projects, emphasizing performance, interaction depth, and visual fidelity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              className="glass-card group relative rounded-3xl p-8 flex flex-col justify-between aspect-square md:aspect-[4/3] overflow-hidden"
            >
              {/* Subtle background glow effect using pseudo-element logic in css but we can do it inline */}
              <div className="absolute -inset-24 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full blur-3xl" />
              
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-sm font-medium tracking-widest uppercase text-white/40">
                  {project.category}
                </span>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-white text-white group-hover:text-black transition-all duration-300">
                  <ArrowUpRight strokeWidth={1.5} size={20} />
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="text-3xl font-semibold text-white mb-3 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-white/60 font-light mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
