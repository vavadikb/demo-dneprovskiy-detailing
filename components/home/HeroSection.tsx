import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Phone, Star, Calendar } from "lucide-react";

const BOOKSY_URL =
  "https://booksy.com/pl-pl/264688_dneprovskiy-detailing-myjnia_motoryzacja_3_warszawa?rwg_token=AFd1xnHgjkoWY3cFoyTN28hU52IWD0tqiwXdtTXk654lsuJXlJcHz_cwpcmb6bq1XKfN_XNoqcIvUFH0vamPNs4AET9WMKQHZA%3D%3D#ba_s=seo";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1800&q=80"
          alt="Luksusowy samochód po detailingu"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/60" />
      </div>

      {/* Hex pattern overlay */}
      <div className="absolute inset-0 hex-pattern opacity-60" aria-hidden />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div>
            {/* Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 animate-fade-up">
              Twój samochód,
              <br />
              <span className="text-[#F5C518] italic">perfekcyjnie czysty.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-white/60 text-lg sm:text-xl leading-relaxed mb-6 max-w-xl animate-fade-up delay-100">
              Profesjonalne mycie, detailing i ochrona lakieru w Warszawie.
              Umów się online przez Booksy — szybko i wygodnie.
            </p>

            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-[#F5C518]/10 border border-[#F5C518]/30 rounded-full px-4 py-2 mb-8 animate-fade-up delay-200">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-[#F5C518] text-[#F5C518]" />
                ))}
              </div>
              <span className="text-white/90 text-xs font-medium">4.8 na Booksy · 200+ zadowolonych klientów</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-14 animate-fade-up delay-300">
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#F5C518] hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/30 hover:-translate-y-0.5"
              >
                <Calendar size={18} />
                Zarezerwuj wizytę
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/5"
              >
                Nasze usługi
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Phone */}
            <div className="flex gap-4 animate-fade-up delay-400">
              <a href="tel:512666799" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-[#F5C518]/20 group-hover:border-[#F5C518]/40 transition-colors">
                  <Phone size={15} className="text-[#F5C518]" />
                </div>
                <div>
                  <div className="text-white/40 text-xs">Zadzwoń</div>
                  <div className="text-white font-semibold text-sm">512 666 799</div>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  <MapPinIcon />
                </div>
                <div>
                  <div className="text-white/40 text-xs">Adres</div>
                  <div className="text-white font-semibold text-sm">Towarowa 30, Warszawa</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Photo grid */}
          <div className="hidden lg:block relative animate-fade-up delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 h-[520px] border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=900&q=80"
                alt="Detailing samochodu w Warszawie"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Floating stats */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                <div className="flex-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-xl p-4">
                  <div className="font-serif text-2xl font-bold text-[#F5C518]">4.8★</div>
                  <div className="text-white/60 text-xs mt-0.5">Ocena Booksy</div>
                </div>
                <div className="flex-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-xl p-4">
                  <div className="font-serif text-2xl font-bold text-white">200+</div>
                  <div className="text-white/60 text-xs mt-0.5">Zadowolonych klientów</div>
                </div>
              </div>
            </div>

            {/* Small preview photos */}
            <div className="absolute -bottom-14 right-10 z-20 grid grid-cols-2 gap-3">
              {[
                { src: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=500&q=80", label: "Polerowanie" },
                { src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=500&q=80", label: "Ceramika" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="relative w-36 h-24 rounded-xl overflow-hidden border border-white/20 shadow-xl shadow-black/40"
                >
                  <Image src={item.src} alt={item.label} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] tracking-wide uppercase font-semibold text-white">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-slow z-10">
        <ChevronDown size={28} className="text-white/30" />
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10" aria-hidden>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 lg:h-14">
          <path d="M0,60 L0,40 Q360,5 720,30 Q1080,55 1440,20 L1440,60 Z" fill="#111111" opacity="0.6"/>
          <path d="M0,60 L0,50 Q360,20 720,40 Q1080,58 1440,35 L1440,60 Z" fill="#111111"/>
        </svg>
      </div>
    </section>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#F5C518]" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
