"use client";

import { useState } from "react";

export default function ApplicationForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    
    // Web3Forms Access Key
    formData.append("access_key", "7610fc9c-431f-40e4-bcf6-58342e7cc242"); 

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
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white/70 text-sm font-semibold mb-8">
            Free Revenue Audit
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Ready to find out what your audience would actually pay for?
          </h2>
          <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            We will audit your account for free, no strings attached. If the numbers make sense, we build together. If they do not, you have lost nothing.
          </p>
          <p className="text-white font-semibold mt-4 text-base">
            Apply below. We respond within 24 hours.
          </p>
        </div>

        {/* Form Container */}
        <div className="glass-card bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 md:p-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />

          {status === "success" ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-white/5 text-white rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Application Submitted</h3>
              <p className="text-zinc-400 text-lg">We are reviewing your account and will get back to you within 24 hours.</p>
            </div>
          ) : (
            <form className="space-y-8" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Name */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-zinc-400 block" htmlFor="fullName">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    name="Full Name"
                    id="fullName"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-zinc-600 font-light"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Instagram Handle */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-zinc-400 block" htmlFor="igHandle">
                    Instagram Handle
                  </label>
                  <input 
                    type="text" 
                    name="Instagram Handle"
                    id="igHandle"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-zinc-600 font-light"
                    placeholder="@handle"
                    required
                  />
                </div>

                {/* Follower Count */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-zinc-400 block" htmlFor="followers">
                    Follower Count
                  </label>
                  <input 
                    type="text" 
                    name="Follower Count"
                    id="followers"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-zinc-600 font-light"
                    placeholder="e.g., 50,000"
                    required
                  />
                </div>

                {/* Content type */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-zinc-400 block" htmlFor="contentType">
                    What kind of content do you post?
                  </label>
                  <input 
                    type="text" 
                    name="Content Type"
                    id="contentType"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-zinc-600 font-light"
                    placeholder="e.g., fitness coaching, business advice, tech reviews"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-white text-black text-lg font-bold py-5 rounded-xl hover:bg-zinc-200 transition-all active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(255,255,255,0.05)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.15)]"
              >
                {status === "submitting" ? "Submitting..." : "Submit"}
              </button>
              
              {status === "error" && (
                <p className="text-red-400 text-sm text-center mt-4 font-mono">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
