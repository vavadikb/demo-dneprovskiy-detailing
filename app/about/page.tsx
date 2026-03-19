import { ArrowRight, Award, Heart, Star, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nas | Dneprovskiy Detailing Warszawa",
  description:
    "Dneprovskiy Detailing — profesjonalne studio detailingowe w Warszawie. Poznaj naszą historię, misję i wartości.",
};

const BOOKSY_URL =
  "https://booksy.com/pl-pl/264688_dneprovskiy-detailing-myjnia_motoryzacja_3_warszawa?rwg_token=AFd1xnHgjkoWY3cFoyTN28hU52IWD0tqiwXdtTXk654lsuJXlJcHz_cwpcmb6bq1XKfN_XNoqcIvUFH0vamPNs4AET9WMKQHZA%3D%3D#ba_s=seo";

const values = [
  {
    icon: <Heart size={22} className="text-[#F5C518]" />,
    title: "Pasja do detalu",
    description:
      "Każdy samochód to dla nas wyzwanie i pasja. Dążymy do perfekcji w każdym aspekcie — od mycia po ceramikę.",
  },
  {
    icon: <Award size={22} className="text-[#F5C518]" />,
    title: "Jakość premium",
    description:
      "Używamy wyłącznie profesjonalnych produktów i sprzętu. Żadnych kompromisów w kwestii jakości.",
  },
  {
    icon: <Star size={22} className="text-[#F5C518]" />,
    title: "Zaufanie klientów",
    description:
      "Ponad 200 zadowolonych klientów i ocena 4.8 na Booksy to efekt naszej pracy. Każdy klient to dla nas ambasador marki.",
  },
  {
    icon: <Zap size={22} className="text-[#F5C518]" />,
    title: "Efektywność",
    description:
      "Szanujemy Twój czas. Realizujemy usługi terminowo i sprawnie, bez zbędnego czekania.",
  },
];

const timeline = [
  { year: "2018", event: "Otwarcie pierwszego studia detailingowego w Warszawie na Towarowej." },
  { year: "2019", event: "Pierwsze 500 obsłużonych klientów. Rozszerzenie oferty o ceramikę i polerowanie." },
  { year: "2021", event: "Dołączenie do platformy Booksy — wygodna rezerwacja online dla klientów." },
  { year: "2023", event: "Przekroczenie 3000 opinii na Booksy. Rozszerzenie oferty o przyciemnianie szyb." },
  { year: "2024", event: "200+ zadowolonych klientów i ocena 4.8. Warszawa poznaje detailing na najwyższym poziomie." },
  { year: "Dziś", event: "Codziennie dbamy o samochody klientów z całej Warszawy i okolic." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 hex-pattern opacity-50" aria-hidden />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[#F5C518] font-medium text-sm uppercase tracking-widest mb-4">Nasza historia</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            O nas
          </h1>
          <p className="text-white/50 text-xl leading-relaxed max-w-2xl mx-auto">
            Profesjonalne studio detailingowe w centrum Warszawy — z pasją do samochodów i perfekcji.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0" aria-hidden>
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8">
            <path d="M0,40 C360,5 1080,5 1440,40 L1440,40 L0,40 Z" fill="#111111"/>
          </svg>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-[#111111] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#F5C518] font-medium text-sm uppercase tracking-widest mb-4">Kim jesteśmy</p>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Studio detailingowe z pasją i doświadczeniem
              </h2>
              <div className="space-y-5 text-white/60 leading-relaxed">
                <p>
                  Dneprovskiy Detailing to profesjonalne studio mycia i detailingu samochodowego zlokalizowane w sercu Warszawy przy Towarowej 30. Od lat specjalizujemy się w kompleksowej pielęgnacji pojazdów, od codziennego mycia po zaawansowaną ochronę ceramiczną.
                </p>
                <p>
                  Nasza oferta obejmuje szeroki zakres usług: od szybkiego mycia express, przez kompleksowy detailing, pranie tapicerki, aż po polerowanie lakieru i powłoki ceramiczne na 2 lub 4 lata. Każdą usługę realizujemy z najwyższą starannością i profesjonalizmem.
                </p>
                <p>
                  Zaufało nam już ponad 200 klientów, którzy ocenili nasze usługi na 4.8 w Booksy. Jesteśmy dumni z każdej pozytywnej opinii, bo to najlepszy dowód na to, że robimy swoją pracę dobrze.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-[#0a0a0a] border border-white/8 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-white mb-7">Nasza historia</h3>
              <div className="space-y-0">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-[#F5C518] text-black flex items-center justify-center flex-shrink-0 text-xs font-bold">
                        {i + 1}
                      </div>
                      {i < timeline.length - 1 && (
                        <div className="w-0.5 bg-[#F5C518]/20 flex-1 my-1" style={{ minHeight: "24px" }} />
                      )}
                    </div>
                    <div className="pb-6">
                      <div className="font-semibold text-[#F5C518] text-sm mb-1">{item.year}</div>
                      <p className="text-white/50 text-sm leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0a0a0a] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[#F5C518] font-medium text-sm uppercase tracking-widest mb-4">Nasze wartości</p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight">
              Co nas wyróżnia
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-[#111111] border border-white/8 rounded-2xl p-7 hover:border-[#F5C518]/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#F5C518]/10 rounded-xl flex items-center justify-center mb-5">
                  {v.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#F5C518] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-10 items-center text-center">
            {[
              { value: "4.8", label: "Ocena na Booksy", sublabel: "Platforma rezerwacji online" },
              { value: "200+", label: "Zadowolonych klientów", sublabel: "Zweryfikowane recenzje" },
              { value: "Towarowa 30", label: "Adres studia", sublabel: "Centrum Warszawy" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="font-serif text-3xl font-bold text-black">{item.value}</div>
                <div className="font-serif text-xl font-bold text-black">{item.label}</div>
                <div className="text-black/60 text-sm">{item.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111111] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-5">
            Gotowy zadbać o swoje auto?
          </h2>
          <p className="text-white/50 text-lg leading-relaxed mb-10">
            Zarezerwuj wizytę przez Booksy lub skontaktuj się z nami bezpośrednio.
          </p>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#F5C518] hover:bg-yellow-400 text-black font-bold px-9 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/25 hover:-translate-y-0.5"
          >
            Umów wizytę
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
