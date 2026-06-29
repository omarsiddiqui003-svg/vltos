export default function WhatWeDo() {
  const steps = [
    {
      num: "01",
      title: "The Audit",
      description: "We study your account before we ever contact you. Engagement rate, content themes, monetisation gap.",
    },
    {
      num: "02",
      title: "The Revenue Plan",
      description: "A personalised document showing your projected launch revenue, recommended product, and launch structure. Built on your data. Sent before you agree to anything.",
    },
    {
      num: "03",
      title: "The Product Build",
      description: "We build your digital product using your knowledge, your voice. You review and approve everything.",
    },
    {
      num: "04",
      title: "The Storefront",
      description: "Payment processing connected. Product delivery automated. Revenue split configured from sale one.",
    },
    {
      num: "05",
      title: "The 6-Day Launch Sequence",
      description: "Every story scripted. You post. We write. Day 6: product goes live. Revenue starts.",
    },
  ];

  return (
    <section id="what-we-do" className="bg-black py-28 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif font-light text-white mb-16">
          What VLTOS handles — start to finish
        </h2>

        <div className="space-y-12">
          {steps.map((step) => (
            <div 
              key={step.num} 
              className="grid grid-cols-1 md:grid-cols-[60px_1fr] gap-4 md:gap-8 items-start border-b border-white/5 pb-8 last:border-0 last:pb-0"
            >
              <span className="text-xl md:text-2xl font-serif text-zinc-600 font-light">
                {step.num}
              </span>
              <div>
                <h3 className="text-lg text-white font-medium mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
