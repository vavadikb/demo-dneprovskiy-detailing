const reasons = [
  {
    number: "01",
    title: "Najwyższa jakość",
    description:
      "Używamy wyłącznie profesjonalnych chemii i urządzeń. Każdy samochód traktujemy indywidualnie, aby osiągnąć najlepszy efekt.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4 L24 14 L36 14 L26.5 20.5 L30 32 L20 26 L10 32 L13.5 20.5 L4 14 L16 14 Z" fill="#F5C518" opacity="0.2" stroke="#F5C518" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="20" cy="19" r="4" fill="#F5C518"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Łatwa rezerwacja",
    description:
      "Umawianie wizyt przez Booksy jest szybkie i proste. Wybierz termin, usługę i gotowe — potwierdzenie otrzymasz od razu.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="28" height="24" rx="3" fill="#F5C518" opacity="0.15"/>
        <rect x="8" y="10" width="24" height="20" rx="2" stroke="#F5C518" strokeWidth="2" fill="none"/>
        <path d="M12 16 L20 16 M12 20 L24 20 M12 24 L18 24" stroke="#F5C518" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="28" cy="28" r="7" fill="#F5C518"/>
        <path d="M25 28 L27 30 L31 26" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Centrum Warszawy",
    description:
      "Jesteśmy na Towarowej 30 – doskonała lokalizacja z łatwym dojazdem. Czynni od poniedziałku do soboty do 20:00.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="16" r="8" fill="#F5C518" opacity="0.15"/>
        <circle cx="20" cy="16" r="6" stroke="#F5C518" strokeWidth="2" fill="none"/>
        <circle cx="20" cy="16" r="2.5" fill="#F5C518"/>
        <path d="M20 22 L20 26 M14 34 C14 28 26 28 26 34" stroke="#F5C518" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Zaufanie klientów",
    description:
      "Ponad 200 zadowolonych klientów i ocena 4.8 na Booksy mówią same za siebie. Dołącz do grona klientów Dneprovskiy Detailing.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4 L34 10 L34 22 C34 29 27 35 20 38 C13 35 6 29 6 22 L6 10 Z" fill="#F5C518" opacity="0.15"/>
        <path d="M20 6 L32 11.5 L32 22 C32 28 25.5 33.5 20 36 C14.5 33.5 8 28 8 22 L8 11.5 Z" stroke="#F5C518" strokeWidth="2" fill="none"/>
        <path d="M14 20 L18 24 L26 16" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#111111] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <p className="text-[#F5C518] font-medium text-sm uppercase tracking-widest mb-4">
              Dlaczego my
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight">
              Różnica Dneprovskiy Detailing
            </h2>
          </div>
          <p className="text-white/50 text-lg leading-relaxed">
            Nie jesteśmy kolejną myjnią. Jesteśmy studiem detailingowym, które podchodzi do każdego samochodu z pasją i profesjonalizmem.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="bg-[#0a0a0a] border border-white/8 rounded-2xl p-7 hover:border-[#F5C518]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400/8"
            >
              <div className="flex items-start justify-between mb-5">
                {reason.icon}
                <span className="font-serif text-5xl font-bold text-white/5 leading-none select-none">
                  {reason.number}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
