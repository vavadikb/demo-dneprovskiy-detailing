import Link from "next/link";
import { Phone, MapPin, Clock, Calendar, Instagram, Facebook } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/dneprovskiy_detailing/";
const FACEBOOK_URL = "https://www.facebook.com/p/Dneprovskiy-detailing-61571768501435/";

const BOOKSY_URL =
  "https://booksy.com/pl-pl/264688_dneprovskiy-detailing-myjnia_motoryzacja_3_warszawa?rwg_token=AFd1xnHgjkoWY3cFoyTN28hU52IWD0tqiwXdtTXk654lsuJXlJcHz_cwpcmb6bq1XKfN_XNoqcIvUFH0vamPNs4AET9WMKQHZA%3D%3D#ba_s=seo";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/8 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-5">
              <div>
                <div className="logo-wordmark text-white text-lg">Dneprovskiy</div>
                <div className="logo-submark text-[#F5C518] text-[11px]">Detailing · Warszawa</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Profesjonalne mycie, detailing i ochrona lakieru w Warszawie. Umów się wygodnie przez Booksy.
            </p>
            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F5C518] hover:bg-yellow-400 text-black font-bold text-sm px-5 py-2.5 rounded-full transition-colors"
            >
              <Calendar size={14} />
              Zarezerwuj wizytę
            </a>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 hover:border-[#F5C518]/50 flex items-center justify-center text-white/50 hover:text-[#F5C518] transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 hover:border-[#F5C518]/50 flex items-center justify-center text-white/50 hover:text-[#F5C518] transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif font-semibold text-base text-white mb-5">Nawigacja</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Strona główna" },
                { href: "/services", label: "Nasze usługi" },
                { href: "/about", label: "O nas" },
                { href: "/contact", label: "Kontakt" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/50 hover:text-[#F5C518] text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5C518]/40 group-hover:bg-[#F5C518] transition-colors" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-base text-white mb-5">Usługi</h4>
            <ul className="space-y-2.5">
              {[
                "Detailing kompleks",
                "Express Kompleks",
                "Black Kompleks",
                "Pranie tapicerki",
                "Polerowanie lakieru",
                "Ceramika 2/4 lata",
                "Przyciemnianie szyb",
                "Mycie silnika",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-white/50 hover:text-[#F5C518] text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5C518]/40 group-hover:bg-[#F5C518] transition-colors" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-base text-white mb-5">Kontakt</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:512666799"
                  className="flex items-start gap-3 text-sm text-white/50 hover:text-[#F5C518] transition-colors group"
                >
                  <Phone size={15} className="mt-0.5 text-[#F5C518] flex-shrink-0" />
                  <div>
                    <div className="text-white/90 font-medium">Telefon</div>
                    <div>512 666 799</div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/50">
                <MapPin size={15} className="mt-0.5 text-[#F5C518] flex-shrink-0" />
                <div>
                  <div className="text-white/90 font-medium">Adres</div>
                  <div>Towarowa 30</div>
                  <div>00-868 Warszawa</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/50">
                <Clock size={15} className="mt-0.5 text-[#F5C518] flex-shrink-0" />
                <div>
                  <div className="text-white/90 font-medium">Godziny otwarcia</div>
                  <div>Pon–Sob: 8:00–20:00</div>
                  <div>Niedziela: zamknięte</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Dneprovskiy Detailing. Wszelkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-4">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#F5C518] transition-colors flex items-center gap-1.5">
              <Instagram size={13} /> Instagram
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#F5C518] transition-colors flex items-center gap-1.5">
              <Facebook size={13} /> Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
