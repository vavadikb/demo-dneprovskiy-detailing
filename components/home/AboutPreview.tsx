import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "Profesjonalny sprzęt i środki chemiczne premium",
  "Ponad 200 zadowolonych klientów",
  "Kompleksowe usługi mycia i detailingu",
  "Lokalizacja w centrum Warszawy - Towarowa 30",
];

export default function AboutPreview() {
  return (
    <section className="bg-[#111111] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-[#F5C518] font-medium text-sm uppercase tracking-widest mb-4">
              O nas
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Pasja do czystości i perfekcji
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Dneprovskiy Detailing to studio z Warszawy specjalizujące się w kompleksowym myciu, detailingu i ochronie lakieru. Działamy na Towarowej 30, gdzie przyjmujemy klientów z całej Warszawy.
            </p>
            <p className="text-white/50 leading-relaxed mb-8">
              Naszą misją jest dbanie o Twój samochód na najwyższym poziomie. Używamy profesjonalnych produktów i sprawdzonych metod, które gwarantują efekty widoczne już po pierwszej wizycie. Masz do wyboru pakiety dostosowane do każdego budżetu i potrzeb.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#F5C518] flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#F5C518] hover:text-yellow-300 font-semibold transition-colors group"
            >
              Dowiedz się więcej o nas
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right: Photo */}
          <div className="relative">
            {/* Main photo */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 h-[480px] border border-white/8">
              <Image
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=900&q=80"
                alt="Detailing samochodu Warszawa"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Small overlay photo */}
            <div className="absolute top-8 -left-8 z-20 hidden md:block w-48 h-36 rounded-xl overflow-hidden border-4 border-[#111111] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=600&q=80"
                alt="Polerowanie lakieru"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating badges */}
            <div className="absolute -bottom-5 -left-5 z-20 bg-[#F5C518] text-black rounded-xl p-4 shadow-xl">
              <div className="font-serif text-3xl font-bold">4.8</div>
              <div className="text-black/70 text-xs font-medium">Ocena Booksy</div>
            </div>
            <div className="absolute -top-5 -right-5 z-20 bg-[#1a1a1a] border border-white/10 rounded-xl p-4 shadow-xl">
              <div className="font-serif text-3xl font-bold text-white">200+</div>
              <div className="text-[#F5C518] text-xs font-medium">Zadowolonych klientów</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
