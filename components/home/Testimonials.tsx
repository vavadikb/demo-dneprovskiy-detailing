import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marek Kowalski",
    location: "Warszawa, Wola",
    rating: 5,
    text: "Niesamowity efekt! Mój BMW wyglądał jak nowy po Black Kompleksie. Profesjonalna obsługa i super efekty. Polecam z czystym sumieniem!",
    service: "Black Kompleks",
  },
  {
    name: "Anna Wiśniewska",
    location: "Warszawa, Mokotów",
    rating: 5,
    text: "Zarezerwowałam przez Booksy i byłam zachwycona — zero problemów, szybka realizacja. Tapicerka wygląda jak nowa. Zdecydowanie wrócę!",
    service: "Pranie tapicerki",
  },
  {
    name: "Tomasz Nowak",
    location: "Warszawa, Śródmieście",
    rating: 5,
    text: "Zrobiłem ceramikę na 4 lata i jestem w 100% zadowolony. Lakier świeci jak lustro, a ochrona przed kurzem i wodą robi robotę. Polecam!",
    service: "Ceramika 4 lata",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0a0a0a] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#F5C518] font-medium text-sm uppercase tracking-widest mb-4">
            Opinie klientów
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Co mówią nasi klienci
          </h2>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-[#F5C518] text-[#F5C518]" />
            ))}
            <span className="text-white/50 text-sm ml-2 font-medium">4.8 na Booksy · 200+ zadowolonych klientów</span>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#111111] border border-white/8 rounded-2xl p-8 relative hover:border-[#F5C518]/20 hover:shadow-lg hover:shadow-yellow-400/5 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-[#F5C518]/15">
                <Quote size={32} className="fill-[#F5C518]/10" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-[#F5C518] text-[#F5C518]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/70 text-sm leading-relaxed mb-6 relative z-10">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Service tag */}
              <span className="inline-block bg-[#F5C518]/10 text-[#F5C518] text-xs font-medium px-3 py-1 rounded-full mb-5 border border-[#F5C518]/20">
                {t.service}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/8">
                <div className="w-10 h-10 rounded-full bg-[#F5C518] flex items-center justify-center text-black font-semibold text-sm flex-shrink-0">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
