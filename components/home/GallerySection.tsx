import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",
    alt: "Samochód po detailingu",
    label: "Efekt końcowy",
    colSpan: "lg:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=700&q=80",
    alt: "Czyszczenie wnętrza auta",
    label: "Wnętrze",
  },
  {
    src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=700&q=80",
    alt: "Polerowanie lakieru",
    label: "Polerowanie",
  },
  {
    src: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=900&q=80",
    alt: "Aplikacja ceramiki",
    label: "Ceramika",
    colSpan: "lg:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=700&q=80",
    alt: "Mycie detailingowe",
    label: "Mycie",
  },
  {
    src: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=700&q=80",
    alt: "Detailing premium",
    label: "Premium",
  },
];

export default function GallerySection() {
  return (
    <section className="bg-[#0a0a0a] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="text-[#F5C518] font-medium text-sm uppercase tracking-widest mb-4">
              Realizacje
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight">
              Galerie efektów
            </h2>
          </div>
          <p className="text-white/50 text-sm max-w-xs leading-relaxed">
            Przykłady prac wykonanych w Dneprovskiy Detailing na Towarowej 30 w Warszawie.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 mb-12">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className={`relative group overflow-hidden rounded-2xl h-64 lg:h-72 border border-white/10 ${photo.colSpan ?? ""}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute left-4 bottom-4 bg-[#F5C518] text-black text-xs font-bold px-3 py-1.5 rounded-full">
                {photo.label}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 bg-[#F5C518] hover:bg-yellow-400 text-black font-bold px-9 py-4 rounded-full transition-colors"
          >
            Zobacz pełną ofertę
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
