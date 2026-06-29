export default function TheAgreement() {
  return (
    <section id="deal" className="bg-black py-28 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-serif font-light text-white mb-12">
          The Agreement
        </h2>

        {/* Core Prose */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 font-light text-zinc-400 leading-relaxed text-sm md:text-base">
          <div className="space-y-6">
            <p className="text-lg text-white font-medium">
              70% of every sale goes to you automatically.<br />
              30% goes to VLTOS.
            </p>
            <p>
              You pay nothing upfront. No retainer. No setup fee. We earn only when you earn.
            </p>
          </div>
          <div>
            <p className="mt-0 md:mt-6">
              If the launch generates nothing, we receive nothing. That is the entire model.
            </p>
          </div>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
          <div className="space-y-2">
            <h3 className="text-sm uppercase tracking-wider font-semibold text-white">
              Zero upfront cost
            </h3>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">
              No retainer. No fee. We invest first.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm uppercase tracking-wider font-semibold text-white">
              You own everything
            </h3>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">
              Product, audience, IP — all yours.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm uppercase tracking-wider font-semibold text-white">
              Revenue splits automatically
            </h3>
            <p className="text-xs text-zinc-500 font-light leading-relaxed">
              At the point of every sale. No manual transfer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
