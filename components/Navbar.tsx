"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToApply = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('apply-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Protocol", href: "#protocol" },
    { name: "Methodology", href: "#methodology" },
    { name: "Certifications", href: "#certifications" },
    { name: "Apply", href: "#apply-form" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-black tracking-tighter text-white">
          VLTOS<span className="text-amber-500">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <button
            onClick={scrollToApply}
            className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-zinc-200 transition-colors"
          >
            Secure Your Vault
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-white/80 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={scrollToApply}
              className="bg-white text-black px-6 py-3 rounded-full text-base font-bold text-center mt-4 w-full"
            >
              Secure Your Vault
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
