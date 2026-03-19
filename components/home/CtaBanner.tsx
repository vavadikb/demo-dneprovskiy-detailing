import Link from "next/link";
import { Phone, ArrowRight, Calendar, MapPin } from "lucide-react";

const BOOKSY_URL =
  "https://booksy.com/pl-pl/264688_dneprovskiy-detailing-myjnia_motoryzacja_3_warszawa?rwg_token=AFd1xnHgjkoWY3cFoyTN28hU52IWD0tqiwXdtTXk654lsuJXlJcHz_cwpcmb6bq1XKfN_XNoqcIvUFH0vamPNs4AET9WMKQHZA%3D%3D#ba_s=seo";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24 lg:py-32">
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, #F5C518 0%, transparent 70%)" }}
        aria-hidden
      />
      <div className="absolute inset-0 hex-pattern opacity-10" aria-hidden />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
        {/* Top label */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 bg-[#F5C518]/10 border border-[#F5C518]/20 text-[#F5C518] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5C518] animate-pulse-slow" />
            Otwarte pon–sob, do 20:00
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Umów wizytę
          <br />
          <span className="text-[#F5C518]">już dziś</span>
        </h2>

        <p className="text-center text-white/50 text-lg leading-relaxed max-w-xl mx-auto mb-12">
          Rezerwacja online w kilka kliknięć. Wybierz termin i usługę — resztą zajmiemy się my.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#F5C518] hover:bg-yellow-400 text-black font-bold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/30 hover:-translate-y-0.5 w-full sm:w-auto justify-center text-base"
          >
            <Calendar size={18} />
            Zarezerwuj online
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 border border-white/15 hover:border-white/40 text-white/80 hover:text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:bg-white/5 w-full sm:w-auto justify-center text-base"
          >
            Skontaktuj się z nami
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Info row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/40 text-sm">
          <a
            href="tel:512666799"
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone size={15} />
            512 666 799
          </a>
          <span className="hidden sm:block w-px h-4 bg-white/15" />
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} />
            Towarowa 30, Warszawa
          </span>
        </div>
      </div>
    </section>
  );
}
