export default function ApplicationForm() {
  return (
    <section id="apply-form" className="bg-[#0a0a0a] py-32 px-6 relative z-20 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/70 text-sm font-medium mb-8">
            VLTOS Application Portal
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            Ready to Secure the Vault?
          </h2>
          <p className="mt-6 text-xl text-zinc-400 max-w-2xl mx-auto font-light">
            Book a 15-minute Strategy Diagnosis. No Hype. No Sales. Just Systems.
          </p>
        </div>

        <div className="glass-card bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 md:p-14">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Full Name */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-zinc-400 block" htmlFor="fullName">Full Name</label>
                <input 
                  type="text" 
                  id="fullName"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Instagram Handle */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-zinc-400 block" htmlFor="igHandle">Instagram Handle</label>
                <input 
                  type="text" 
                  id="igHandle"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="@johndoe"
                  required
                />
              </div>

              {/* Follower Count */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-zinc-400 block" htmlFor="followers">Current Follower Count</label>
                <input 
                  type="text" 
                  id="followers"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="e.g., 250,000"
                  required
                />
              </div>

              {/* Current Revenue Model */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-zinc-400 block" htmlFor="revenueModel">Current Revenue Model</label>
                <select 
                  id="revenueModel"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none"
                  required
                >
                  <option value="" className="bg-[#0f0f0f]">Select your model...</option>
                  <option value="brand_deals" className="bg-[#0f0f0f]">Brand Deals / Sponsorships</option>
                  <option value="low_ticket" className="bg-[#0f0f0f]">Low-Ticket Products ($10 - $100)</option>
                  <option value="high_ticket" className="bg-[#0f0f0f]">High-Ticket Coaching / Consulting</option>
                  <option value="community" className="bg-[#0f0f0f]">Paid Community / Memberships</option>
                  <option value="no_monetization" className="bg-[#0f0f0f]">Audience Only (Pre-Monetization)</option>
                  <option value="other" className="bg-[#0f0f0f]">Other</option>
                </select>
              </div>
            </div>

            {/* Motivation */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-zinc-400 block" htmlFor="motivation">
                Why are you looking to monetize now?
              </label>
              <textarea 
                id="motivation"
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                placeholder="Give us a brief insight into your current goals..."
                required
              ></textarea>
            </div>

            {/* Submit */}
            <button 
              type="submit"
              className="w-full bg-white text-black text-lg font-bold py-5 rounded-xl hover:bg-zinc-200 transition-colors active:scale-[0.98]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
