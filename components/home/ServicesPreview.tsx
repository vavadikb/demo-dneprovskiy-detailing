import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Detailing Kompleks",
    description: "Kompleksowe mycie zewnętrze i wewnętrzne. Dostępne dla aut klasy S, M, L i XL.",
    photo: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=800&q=80",
    price: "od 250 zł",
  },
  {
    title: "Express Kompleks",
    description: "Szybkie mycie kompleksowe dla zapracowanych. Realizacja w ciągu 1–1,5 godziny.",
    photo: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=800&q=80",
    price: "od 180 zł",
  },
  {
    title: "Black Kompleks",
    description: "Najbardziej kompleksowy pakiet mycia – premium dla wymagających klientów.",
    photo: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
    price: "od 430 zł",
  },
  {
    title: "Pranie Tapicerki",
    description: "Profesjonalne pranie wnętrza: siedzenia, dywaniki, podsufitka i więcej.",
    photo: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    price: "od 800 zł",
  },
  {
    title: "Polerowanie Lakieru",
    description: "Trzyetapowe polerowanie przywracające fabryczny blask każdego lakieru.",
    photo: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80",
    price: "1 500 zł",
  },
  {
    title: "Ceramika & Ochrona",
    description: "Powłoka ceramiczna na 2 lub 4 lata, chroniąca lakier przed zarysowaniami i UV.",
    photo: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=800&q=80",
    price: "od 900 zł",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-[#0a0a0a] pt-12 pb-24 lg:pt-16 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#F5C518] font-medium text-sm uppercase tracking-widest mb-4">
            Co oferujemy
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Nasze Usługi
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Od ekspresowego mycia po pełny detailing i ochronę ceramiczną — dobierz pakiet odpowiedni dla swojego samochodu.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => (
            <Link
              key={i}
              href="/services"
              className="group block bg-[#111111] hover:bg-[#1a1a1a] border border-white/8 hover:border-[#F5C518]/30 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-400/8"
            >
              {/* Photo */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.photo}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-3 right-3 bg-[#F5C518] text-black text-xs font-bold px-3 py-1 rounded-full">
                  {service.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#F5C518] mb-3 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-5 flex items-center gap-2 text-[#F5C518]/70 group-hover:text-[#F5C518] text-sm font-medium transition-colors duration-300">
                  <span>Szczegóły</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 bg-[#F5C518] hover:bg-yellow-400 text-black font-bold px-9 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/25 hover:-translate-y-0.5"
          >
            Wszystkie usługi z cenami
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
