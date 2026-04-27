"use client";
import { useState } from "react";

export default function ApplicationForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    
    // IMPORTANT: Replace this with your Web3Forms Access Key
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };
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
          {status === "success" ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Application Received</h3>
              <p className="text-zinc-400 text-lg">We will review your details and get back to you shortly.</p>
            </div>
          ) : (
            <form className="space-y-8" onSubmit={handleSubmit}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Full Name */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-zinc-400 block" htmlFor="fullName">Full Name</label>
                <input 
                  type="text" 
                  name="Full Name"
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
                  name="Instagram Handle"
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
                  name="Follower Count"
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
                  name="Revenue Model"
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
                name="Motivation"
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
              disabled={status === "submitting"}
              className="w-full bg-white text-black text-lg font-bold py-5 rounded-xl hover:bg-zinc-200 transition-colors active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Submitting..." : "Submit"}
            </button>
            
            {status === "error" && (
              <p className="text-red-400 text-sm text-center mt-4">Something went wrong. Please try again.</p>
            )}
          </form>
          )}
        </div>
      </div>
    </section>
  );
}
