"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Calendar } from "lucide-react";

const BOOKSY_URL =
  "https://booksy.com/pl-pl/264688_dneprovskiy-detailing-myjnia_motoryzacja_3_warszawa?rwg_token=AFd1xnHgjkoWY3cFoyTN28hU52IWD0tqiwXdtTXk654lsuJXlJcHz_cwpcmb6bq1XKfN_XNoqcIvUFH0vamPNs4AET9WMKQHZA%3D%3D#ba_s=seo";

const navLinks = [
  { href: "/", label: "Start" },
  { href: "/services", label: "Usługi" },
  { href: "/about", label: "O nas" },
  { href: "/contact", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg =
    scrolled || !isHome
      ? "bg-[#0a0a0a] border-b border-white/8 shadow-lg shadow-black/40"
      : "bg-transparent";

  const linkColor =
    scrolled || !isHome ? "text-white/80 hover:text-white" : "text-white/80 hover:text-white";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div>
              <div className="logo-wordmark text-white text-xl sm:text-2xl font-bold">
                Dneprovskiy
              </div>
              <div className="logo-submark text-[#F5C518] text-xs font-bold">
                Detailing · Warszawa
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-200 relative pb-0.5
                    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#F5C518] after:transition-all after:duration-300
                    ${active ? "after:w-full text-[#F5C518]" : `after:w-0 hover:after:w-full ${linkColor}`}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:512666799"
              className="flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              <Phone size={14} />
              <span>512 666 799</span>
            </a>
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#F5C518] hover:bg-yellow-400 text-black text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/25 hover:-translate-y-0.5"
            >
              <Calendar size={14} />
              Zarezerwuj
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[#0a0a0a] border-t border-white/8 overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-[#F5C518]/10 text-[#F5C518]"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-3 pt-3 border-t border-white/8 flex flex-col gap-2">
            <a
              href="tel:512666799"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-white/70"
            >
              <Phone size={14} /> 512 666 799
            </a>
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-1 text-center bg-[#F5C518] text-black text-sm font-bold px-6 py-3 rounded-full flex items-center justify-center gap-2"
            >
              <Calendar size={14} />
              Zarezerwuj na Booksy
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
