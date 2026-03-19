import type { Metadata } from "next";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt | Dneprovskiy Detailing Warszawa",
  description:
    "Kontakt do Dneprovskiy Detailing: Towarowa 30, 00-868 Warszawa, tel. 512 666 799. Rezerwacja przez Booksy.",
};

const BOOKSY_URL =
  "https://booksy.com/pl-pl/264688_dneprovskiy-detailing-myjnia_motoryzacja_3_warszawa?rwg_token=AFd1xnHgjkoWY3cFoyTN28hU52IWD0tqiwXdtTXk654lsuJXlJcHz_cwpcmb6bq1XKfN_XNoqcIvUFH0vamPNs4AET9WMKQHZA%3D%3D#ba_s=seo";

const MAPS_URL = "https://maps.google.com/?q=Towarowa+30,+00-868+Warszawa";

const faqs = [
  {
    q: "Jak najlepiej zarezerwować wizytę?",
    a: "Najszybciej przez Booksy. Wybierasz usługę, termin i od razu dostajesz potwierdzenie.",
  },
  {
    q: "Czy mogę umówić wizytę telefonicznie?",
    a: "Tak, zadzwoń pod numer 512 666 799. Pomożemy dobrać usługę do Twojego auta.",
  },
  {
    q: "Jakie są godziny otwarcia?",
    a: "Pracujemy od poniedziałku do soboty w godzinach 8:00-20:00. W niedzielę studio jest zamknięte.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-36 pb-24 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 hex-pattern opacity-50" aria-hidden />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[#F5C518] font-medium text-sm uppercase tracking-widest mb-4">Kontakt</p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Dneprovskiy Detailing
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Towarowa 30, 00-868 Warszawa. Umów wizytę online przez Booksy lub zadzwoń do nas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#F5C518] hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-full transition-colors"
            >
              <Calendar size={18} />
              Umów wizytę
            </a>
            <a
              href="tel:512666799"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white hover:border-white/40 hover:bg-white/5 font-semibold px-8 py-4 rounded-full transition-colors"
            >
              <Phone size={18} />
              512 666 799
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl bg-[#F5C518]/10 flex items-center justify-center mb-4">
                <MapPin size={18} className="text-[#F5C518]" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-white mb-2">Adres</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-4">Towarowa 30, 00-868 Warszawa</p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5C518] text-sm font-semibold hover:text-yellow-300 transition-colors"
              >
                Otwórz trasę w mapach
              </a>
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl bg-[#F5C518]/10 flex items-center justify-center mb-4">
                <Phone size={18} className="text-[#F5C518]" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-white mb-2">Telefon</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-4">512 666 799</p>
              <a
                href="tel:512666799"
                className="text-[#F5C518] text-sm font-semibold hover:text-yellow-300 transition-colors"
              >
                Zadzwoń teraz
              </a>
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl bg-[#F5C518]/10 flex items-center justify-center mb-4">
                <Clock size={18} className="text-[#F5C518]" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-white mb-2">Godziny</h2>
              <p className="text-white/60 text-sm leading-relaxed">Pon-Sob: 8:00-20:00</p>
              <p className="text-white/60 text-sm leading-relaxed">Niedziela: zamknięte</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-10 text-center">
            <p className="text-[#F5C518] font-medium text-sm uppercase tracking-widest mb-4">Lokalizacja</p>
            <h2 className="font-serif text-4xl font-bold text-white">Dojazd do studia</h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 h-[380px]">
            <iframe
              title="Dneprovskiy Detailing Warszawa"
              src="https://maps.google.com/maps?q=Towarowa%2030%2C%2000-868%20Warszawa&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#F5C518] font-medium text-sm uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="font-serif text-4xl font-bold text-white">Najczęstsze pytania</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6">
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
