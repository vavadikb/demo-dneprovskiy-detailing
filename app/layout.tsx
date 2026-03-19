import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dneprovskiy Detailing | Profesjonalne mycie i detailing w Warszawie",
  description:
    "Profesjonalne mycie samochodów, detailing, polerowanie lakieru, ceramika i pranie tapicerki w Warszawie. Umów się przez Booksy. Towarowa 30, Warszawa.",
  keywords:
    "detailing Warszawa, mycie samochodu Warszawa, polerowanie lakieru, ceramika samochodowa, pranie tapicerki, Dneprovskiy Detailing",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
