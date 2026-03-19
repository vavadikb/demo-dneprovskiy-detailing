import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usługi | Dneprovskiy Detailing Warszawa",
  description:
    "Cennik usług: mycie kompleksowe, detailing, pranie tapicerki, polerowanie lakieru, ceramika, przyciemnianie szyb. Warszawa, Towarowa 30.",
};

const BOOKSY_URL =
  "https://booksy.com/pl-pl/264688_dneprovskiy-detailing-myjnia_motoryzacja_3_warszawa?rwg_token=AFd1xnHgjkoWY3cFoyTN28hU52IWD0tqiwXdtTXk654lsuJXlJcHz_cwpcmb6bq1XKfN_XNoqcIvUFH0vamPNs4AET9WMKQHZA%3D%3D#ba_s=seo";

const carClasses = [
  { label: "Auto S", examples: "Mini Cooper, Audi A1, BMW Seria 1" },
  { label: "Auto M", examples: "BMW Seria 3/5/7, VW Passat, Audi A4" },
  { label: "Auto L", examples: "Audi Q3, BMW X5, Mercedes GLC" },
  { label: "Auto XL", examples: "BMW X7, Mercedes GLS, Mercedes G63" },
];

const myjniaServices = [
  {
    category: "Detailing Kompleks",
    description: "Kompleksowe mycie zewnętrzne i wewnętrzne. Mycie zewnętrzne z szamponem, odtłuszczenie felg, czyszczenie wnętrza, mycie okien.",
    photo:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80",
    includes: [
      "Dokładne mycie zewnętrzne i wewnętrzne",
      "Bezpieczna chemia detailingowa",
      "Pakiet dostępny dla klas S, M, L i XL",
      "Idealny balans jakości i czasu realizacji",
    ],
    variants: [
      { label: "Auto S", price: "250 zł", duration: "1g 30min" },
      { label: "Auto M", price: "280 zł", duration: "2g" },
      { label: "Auto L", price: "320 zł", duration: "2g" },
      { label: "Auto XL", price: "350 zł", duration: "2g 30min" },
    ],
  },
  {
    category: "Express Kompleks",
    description: "Szybka wersja kompleksowego mycia — idealna gdy zależy Ci na czasie. Zewnętrze + wnętrze w ciągu 1 godziny.",
    photo:
      "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1200&q=80",
    includes: [
      "Szybka realizacja dla zabieganych",
      "Zewnętrze plus wnętrze w krótkim czasie",
      "Spójny standard jakości dla każdej klasy auta",
      "Wygodna opcja przed codzienną jazdą",
    ],
    variants: [
      { label: "Auto S", price: "180 zł", duration: "1g" },
      { label: "Auto M", price: "200 zł", duration: "1g" },
      { label: "Auto L", price: "220 zł", duration: "1g" },
      { label: "Auto XL", price: "250 zł", duration: "1g 30min" },
    ],
  },
  {
    category: "Black Kompleks",
    description: "Najbardziej rozbudowany pakiet mycia kompleksowego — dla klientów wymagających perfekcji. Zawiera pełne czyszczenie wnętrza i zewnętrza z elementami detailingu.",
    photo:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
    includes: [
      "Najbardziej rozbudowany pakiet mycia",
      "Elementy detailingu premium",
      "Maksymalna dbałość o detale wnętrza i lakieru",
      "Rekomendowany dla aut wymagających odświeżenia",
    ],
    variants: [
      { label: "Auto S", price: "430 zł", duration: "3g" },
      { label: "Auto M", price: "500 zł", duration: "3g 30min" },
      { label: "Auto L", price: "520 zł", duration: "3g 30min" },
      { label: "Auto XL", price: "550 zł", duration: "4g" },
    ],
  },
  {
    category: "Mycie Silnika",
    description: "Profesjonalne mycie i odtłuszczenie komory silnika. Usługa wyceniana indywidualnie.",
    photo:
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80",
    includes: [
      "Bezpieczne czyszczenie komory silnika",
      "Usuwanie zabrudzeń i odtłuszczanie",
      "Poprawa estetyki i łatwiejszy serwis",
      "Wycena dopasowana do stanu pojazdu",
    ],
    variants: [
      { label: "Wszystkie klasy", price: "200 zł+", duration: "2g" },
    ],
  },
];

const detailingServices = [
  {
    name: "Pranie tapicerki",
    description: "Kompleksowe czyszczenie wnętrza samochodu: siedzenia, dywaniki, podsufitka, drzwi, plastiki. Profesjonalne urządzenia ekstrakcyjne.",
    price: "800 zł+",
    duration: "8g 30min",
    photo:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
    includes: [
      "Odkurzanie całego wnętrza",
      "Pranie siedzeń maszyną ekstrakcyjną",
      "Czyszczenie dywaników i wykładziny",
      "Mycie plastików i drzwi",
      "Czyszczenie podsufitki",
      "Odświeżenie wnętrza",
    ],
  },
  {
    name: "Polerowanie lakieru (3 etapy)",
    description: "Trzyetapowe polerowanie przywracające fabrycznie nowy wygląd lakieru. Usuwamy rysy, swirle i ślady oksydacji.",
    price: "1 500 zł",
    duration: "10g 30min",
    photo:
      "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80",
    includes: [
      "Mycie wstępne i dekontaminacja",
      "Ocena stanu lakieru grubościomierzem",
      "Polerowanie etap 1 – usuwanie głębszych rys",
      "Polerowanie etap 2 – polerka średnia",
      "Polerowanie etap 3 – wykończenie",
      "Nałożenie ochrony lakieru",
    ],
  },
  {
    name: "Ceramika 2 lata",
    description: "Profesjonalna powłoka ceramiczna chroniąca lakier przez 2 lata. Hydrofobowość, odporność na zadrapania i UV.",
    price: "900 zł",
    duration: "4g",
    photo:
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=80",
    includes: [
      "Przygotowanie i dekontaminacja lakieru",
      "Korekta drobnych defektów",
      "Aplikacja powłoki ceramicznej",
      "Certyfikat ochrony na 2 lata",
      "Instrukcja pielęgnacji",
    ],
  },
  {
    name: "Ceramika 4 lata",
    description: "Premium powłoka ceramiczna z ochroną na 4 lata. Maksymalna ochrona lakieru z efektem głębi koloru.",
    price: "1 100 zł",
    duration: "4g",
    photo:
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80",
    includes: [
      "Pełne przygotowanie i dekontaminacja",
      "Korekta lakieru przed aplikacją",
      "Aplikacja premium powłoki ceramicznej",
      "Certyfikat ochrony na 4 lata",
      "Instrukcja pielęgnacji i odnawiania",
    ],
  },
  {
    name: "Przygotowanie samochodu do sprzedaży",
    description: "Kompleksowe przygotowanie auta do sprzedaży — żeby zrobić jak najlepsze pierwsze wrażenie na kupującym.",
    price: "1 600 zł",
    duration: "10g 30min",
    photo:
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
    includes: [
      "Pełne mycie zewnętrzne i wewnętrzne",
      "Pranie tapicerki i dywaników",
      "Polerowanie lakieru (2 etapy)",
      "Renowacja plastików zewnętrznych",
      "Czyszczenie silnika",
      "Odświeżenie opon i felg",
    ],
  },
  {
    name: "Przyciemnianie szyb",
    description: "Profesjonalne przyciemnianie szyb metodą bezinwazyjną. Folia montowana od wewnątrz bez naruszania uszczelnień.",
    price: "Cena zmienna",
    duration: "30min",
    photo:
      "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&w=1200&q=80",
    includes: [
      "Dobór odpowiedniej folii",
      "Montaż bezinwazyjny od wewnątrz",
      "Certyfikat montażu",
      "Gwarancja na folię",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=80"
            alt="Detailing background"
            fill
            priority
            className="object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/65 via-[#0a0a0a]/25 to-[#0a0a0a]/55" />
        </div>
        <div className="absolute inset-0 hex-pattern opacity-10" aria-hidden />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-[#F5C518] font-medium text-sm uppercase tracking-widest mb-4">
            Cennik i oferta
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Nasze Usługi
          </h1>
          <p className="text-white/50 text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            Kompleksowe mycie, detailing i ochrona lakieru w Warszawie. Wybierz pakiet dopasowany do swojego auta.
          </p>
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#F5C518] hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/25"
          >
            <Calendar size={18} />
            Umów wizytę
          </a>
        </div>
        <div className="absolute bottom-0 left-0 right-0" aria-hidden>
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8">
            <path d="M0,40 C360,5 1080,5 1440,40 L1440,40 L0,40 Z" fill="#111111"/>
          </svg>
        </div>
      </section>

      {/* Car classes info */}
      <section className="bg-[#111111] py-8 lg:py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-5 text-center">Klasy aut</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {carClasses.map((cls) => (
              <div key={cls.label} className="bg-[#0a0a0a] border border-white/8 rounded-xl p-5">
                <div className="font-bold text-[#F5C518] text-base mb-1">{cls.label}</div>
                <div className="text-white/50 text-xs leading-relaxed">{cls.examples}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Myjnia services */}
      <section className="bg-[#111111] py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-8">
            <p className="text-[#F5C518] font-medium text-sm uppercase tracking-widest mb-3">Myjnia</p>
            <h2 className="font-serif text-4xl font-bold text-white">Pakiety mycia</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {myjniaServices.map((service) => (
              <div
                key={service.category}
                className="bg-[#0a0a0a] border border-white/8 rounded-2xl overflow-hidden hover:border-[#F5C518]/20 transition-colors"
              >
                <div className="relative h-44">
                  <Image src={service.photo} alt={service.category} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-serif text-2xl font-bold text-white leading-tight">
                      {service.category}
                    </h3>
                    <div className="text-right flex-shrink-0">
                      <div className="font-bold text-[#F5C518] text-lg">
                        {service.variants.length === 1
                          ? service.variants[0].price
                          : `${service.variants[0].price} - ${service.variants[service.variants.length - 1].price}`}
                      </div>
                      <div className="flex items-center gap-1 text-white/40 text-xs mt-0.5 justify-end">
                        <Clock size={11} />
                        {service.variants.length === 1
                          ? service.variants[0].duration
                          : `${service.variants[0].duration} - ${service.variants[service.variants.length - 1].duration}`}
                      </div>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{service.description}</p>

                  <div className="grid sm:grid-cols-2 gap-2 mb-6">
                    {service.includes.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-[#F5C518] flex-shrink-0 mt-0.5" />
                        <span className="text-white/60 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={BOOKSY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#F5C518] hover:bg-yellow-400 text-black text-sm font-bold px-6 py-2.5 rounded-full transition-colors"
                  >
                    <Calendar size={14} />
                    Umów wizytę
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailing services */}
      <section className="bg-[#0a0a0a] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <p className="text-[#F5C518] font-medium text-sm uppercase tracking-widest mb-3">Detailing</p>
            <h2 className="font-serif text-4xl font-bold text-white">Usługi detailingowe</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {detailingServices.map((service) => (
              <div key={service.name} className="bg-[#111111] border border-white/8 rounded-2xl overflow-hidden hover:border-[#F5C518]/20 transition-colors">
                <div className="relative h-44">
                  <Image
                    src={service.photo}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-serif text-xl font-bold text-white leading-tight">{service.name}</h3>
                    <div className="text-right flex-shrink-0">
                      <div className="font-bold text-[#F5C518] text-lg">{service.price}</div>
                      <div className="flex items-center gap-1 text-white/40 text-xs mt-0.5 justify-end">
                        <Clock size={11} />
                        {service.duration}
                      </div>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">{service.description}</p>
                  <div className="grid sm:grid-cols-2 gap-2 mb-6">
                    {service.includes.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-[#F5C518] flex-shrink-0 mt-0.5" />
                        <span className="text-white/60 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={BOOKSY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#F5C518] hover:bg-yellow-400 text-black text-sm font-bold px-6 py-2.5 rounded-full transition-colors"
                  >
                    <Calendar size={14} />
                    Zarezerwuj
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#111111] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-5">
            Nie wiesz, co wybrać?
          </h2>
          <p className="text-white/50 text-lg leading-relaxed mb-10">
            Zadzwoń do nas — pomożemy dobrać usługę odpowiednią dla Twojego samochodu i budżetu.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#F5C518] text-black rounded-full px-8 py-4 font-bold hover:bg-yellow-400 transition-colors w-full sm:w-auto justify-center"
            >
              <Calendar size={16} />
              Umów wizytę
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-3 border-2 border-white/20 text-white rounded-full px-8 py-4 font-semibold hover:border-white/40 hover:bg-white/5 transition-all w-full sm:w-auto justify-center"
            >
              Skontaktuj się z nami
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
