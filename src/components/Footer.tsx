import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";
import { navLinks } from "@/lib/nav";

const empresas = [
  { label: "Charão Consultoria", href: "#servicos" },
  { label: "Charão Tributário", href: "#servicos" },
  { label: "Charão Educacional", href: "#servicos" },
];

const badges = [
  {
    src: "/selo-19-anos.png",
    alt: "Selo comemorativo 19 anos — Grupo Charão",
    width: 504,
    height: 495,
  },
  {
    src: "/Selo-Pequenas-Empresas-Horizontal-2025.png",
    alt: "Selo Great Place To Work — Melhores Empresas Para Trabalhar, Pequenas Empresas, Brasil 2025",
    width: 854,
    height: 900,
  },
  {
    src: "/badges/ranked-firm.png",
    alt: "Selo Ranked Firm 2026 — Leaders League",
    width: 947,
    height: 911,
  },
];

export default function Footer() {
  return (
    <footer className="bg-petroleo text-white">
      <div className="mx-auto max-w-container px-6 pb-8 pt-16 lg:px-10 lg:pt-20">
        {/* Bloco principal */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:grid-cols-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-4 lg:col-span-3">
            <Logo />
          </div>

          {/* Coluna: navegação */}
          <nav className="lg:col-span-2">
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Coluna: empresas */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-white/40">
              Empresas
            </h3>
            <ul className="space-y-3 text-sm">
              {empresas.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/75 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna: contato */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-white/40">
              Contato
            </h3>
            <ul className="space-y-3 text-sm text-white/75">
              <li>Manaus / AM</li>
              <li>Boa Vista / RR</li>
              <li>
                <a
                  href="mailto:contato@charao.com.br"
                  className="transition-colors hover:text-white"
                >
                  contato@charao.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Selos / certificações */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <div className="flex items-center gap-4 lg:justify-end">
              {badges.map((badge) => (
                <Image
                  key={badge.src}
                  src={badge.src}
                  alt={badge.alt}
                  width={badge.width}
                  height={badge.height}
                  className="h-14 w-auto shrink-0 object-contain"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-16 border-t border-white/10 pt-6 text-xs text-white/45">
          <p>Copyright © 2026 Grupo Charão – Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
