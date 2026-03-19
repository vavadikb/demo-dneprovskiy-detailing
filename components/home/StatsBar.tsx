const stats = [
  { value: "4.8★", label: "Ocena na Booksy" },
  { value: "200+", label: "Zadowolonych klientów" },
  { value: "19", label: "Usług w ofercie" },
  { value: "Pon–Sob", label: "Czynne do 20:00" },
];

export default function StatsBar() {
  return (
    <section className="bg-[#111111] py-10 border-b border-white/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-serif text-4xl lg:text-5xl font-bold text-[#F5C518] mb-1">
                {stat.value}
              </div>
              <div className="text-white/40 text-sm font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
