"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToApply = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("apply-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "The Problem", href: "#problem" },
    { name: "Estimator", href: "#estimator" },
    { name: "The Agreement", href: "#deal" },
    { name: "What We Do", href: "#what-we-do" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold tracking-[0.2em] text-white">
          VLTOS
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <button
            onClick={scrollToApply}
            className="bg-white text-black px-6 py-2.5 rounded-none text-xs uppercase tracking-widest font-medium hover:bg-zinc-200 transition-colors cursor-pointer"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white py-2 block"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={scrollToApply}
            className="bg-white text-black px-6 py-3 rounded-none text-xs uppercase tracking-widest font-medium text-center mt-2 w-full cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      )}
    </nav>
  );
}
