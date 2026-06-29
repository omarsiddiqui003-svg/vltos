export default function WhoWeWorkWith() {
  return (
    <section id="who-we-work-with" className="bg-black py-28 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* Who we work with */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-6">
              Who we work with
            </h2>
            <ul className="space-y-4 font-light text-zinc-400 text-sm md:text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-white mt-1 select-none font-serif">•</span>
                <span>Instagram creators with 10,000 to 100,000 followers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1 select-none font-serif">•</span>
                <span>A defined niche. Consistent content. No digital product yet.</span>
              </li>
            </ul>
          </div>

          {/* Who we don't work with */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-zinc-500 mb-6">
              Who we don't work with
            </h2>
            <ul className="space-y-4 font-light text-zinc-500 text-sm md:text-base leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-zinc-600 mt-1 select-none font-serif">•</span>
                <span>Creators who already have a product — you don't need us.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-zinc-600 mt-1 select-none font-serif">•</span>
                <span>Creators under 10,000 followers — build the audience first.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-zinc-600 mt-1 select-none font-serif">•</span>
                <span>Anyone looking for shortcuts. The model requires 6 days of Instagram Stories during the launch. That is the minimum participation we ask for.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
