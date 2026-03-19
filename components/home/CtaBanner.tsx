import Link from "next/link";
import { Phone, ArrowRight, Calendar } from "lucide-react";

const BOOKSY_URL =
  "https://booksy.com/pl-pl/264688_dneprovskiy-detailing-myjnia_motoryzacja_3_warszawa?rwg_token=AFd1xnHgjkoWY3cFoyTN28hU52IWD0tqiwXdtTXk654lsuJXlJcHz_cwpcmb6bq1XKfN_XNoqcIvUFH0vamPNs4AET9WMKQHZA%3D%3D#ba_s=seo";

export default function CtaBanner() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#F5C518]">
      {/* Decorative circles */}
      <div
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #000, transparent 70%)" }}
        aria-hidden
      />
      <div
        className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #000, transparent 70%)" }}
        aria-hidden
      />
      {/* Hex pattern overlay */}
      <div className="absolute inset-0 hex-pattern opacity-30" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-black/60 font-medium text-sm uppercase tracking-widest mb-4">
          Gotowy na zmianę?
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
          Umów się już dziś
          <br />
          <span className="italic">przez Booksy</span>
        </h2>
        <p className="text-black/60 text-lg leading-relaxed max-w-xl mx-auto mb-12">
          Rezerwacja online jest szybka i wygodna. Wybierz termin, usługę i gotowe. Jesteśmy czynni od poniedziałku do soboty do 20:00.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-black hover:bg-black/80 text-white font-bold px-9 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            <Calendar size={18} />
            Zarezerwuj na Booksy
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 border-2 border-black/30 hover:border-black text-black font-semibold px-9 py-4 rounded-full transition-all duration-300 hover:bg-black/5 w-full sm:w-auto justify-center"
          >
            Skontaktuj się z nami
            <ArrowRight size={18} />
          </Link>
        </div>

        <a
          href="tel:512666799"
          className="inline-flex items-center gap-2 text-black/70 hover:text-black transition-colors font-medium"
        >
          <Phone size={16} />
          512 666 799
        </a>
      </div>
    </section>
  );
}
