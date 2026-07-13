import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DebugAudit from "@/components/DebugAudit";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

/* Serifada de luxo — headline da Hero "Dark Premium". */
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Grupo Charão — Estratégia que protege o lucro",
  description:
    "Lucro Real, Reforma Tributária e educação empresarial aplicados com método, indicadores e foco em resultado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${playfair.variable} scroll-smooth scroll-pt-24`}
    >
      <body className="bg-white font-sans text-carvao antialiased">
        <Header />
        {children}
        <Footer />
        <DebugAudit />
      </body>
    </html>
  );
}
