"use client";

import { useState } from "react";

export default function ApplicationForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
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
    <section id="apply-form" className="bg-black py-28 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-left mb-16 space-y-6">
          <h2 className="text-3xl md:text-5xl font-serif font-light text-white mb-6">
            Start here
          </h2>
          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-2xl">
            We'll audit your account for free.<br />
            No cost. No commitment. We respond within 24 hours.
          </p>
          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-2xl">
            If the numbers make sense, we build together.<br />
            If they don't, you've lost nothing.
          </p>
        </div>

        {/* Form Container */}
        <div className="border border-white/10 p-8 md:p-14 bg-black">
          {status === "success" ? (
            <div className="text-center py-16 space-y-6">
              <div className="w-16 h-16 bg-white/5 text-white rounded-none flex items-center justify-center mx-auto border border-white/10">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-light text-white">Application Submitted</h3>
              <p className="text-zinc-400 text-sm font-light">We are reviewing your account and will get back to you within 24 hours.</p>
            </div>
          ) : (
            <form className="space-y-8" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Name */}
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-wider font-semibold text-zinc-400 block" htmlFor="fullName">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    name="Full Name"
                    id="fullName"
                    className="w-full bg-black border border-white/10 rounded-none px-5 py-4 text-white text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-zinc-700 font-light"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Instagram Handle */}
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-wider font-semibold text-zinc-400 block" htmlFor="igHandle">
                    Instagram Handle
                  </label>
                  <input 
                    type="text" 
                    name="Instagram Handle"
                    id="igHandle"
                    className="w-full bg-black border border-white/10 rounded-none px-5 py-4 text-white text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-zinc-700 font-light"
                    placeholder="@handle"
                    required
                  />
                </div>

                {/* Follower Count */}
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-wider font-semibold text-zinc-400 block" htmlFor="followers">
                    Follower Count
                  </label>
                  <input 
                    type="text" 
                    name="Follower Count"
                    id="followers"
                    className="w-full bg-black border border-white/10 rounded-none px-5 py-4 text-white text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-zinc-700 font-light"
                    placeholder="e.g., 50,000"
                    required
                  />
                </div>

                {/* Niche */}
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-wider font-semibold text-zinc-400 block" htmlFor="niche">
                    What niche do you post in?
                  </label>
                  <input 
                    type="text" 
                    name="Niche"
                    id="niche"
                    className="w-full bg-black border border-white/10 rounded-none px-5 py-4 text-white text-sm focus:outline-none focus:border-white/30 transition-colors placeholder:text-zinc-700 font-light"
                    placeholder="e.g., fitness coaching, business, tech"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-white text-black text-xs uppercase tracking-widest font-medium py-5 rounded-none hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === "submitting" ? "Submitting..." : "Submit"}
              </button>
              
              {status === "error" && (
                <p className="text-red-400 text-xs text-center mt-4 font-mono">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
