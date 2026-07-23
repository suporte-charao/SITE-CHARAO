import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import Logo from "@/components/Logo";
import { navLinks } from "@/lib/nav";

const empresas = [
  { label: "Charão Consultoria", href: "#servicos" },
  { label: "Charão Tributário", href: "#servicos" },
  { label: "Charão Educacional", href: "#servicos" },
];

/* Logo do WhatsApp (lucide não traz ícones de marca) — inline para ser
   self-contained e herdar a cor via currentColor. */
function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/**
 * Instagram de cada empresa do grupo. O grupo tem um perfil por empresa, então
 * o ícone abre um menu para o usuário escolher qual abrir.
 */
const instagrams = [
  {
    label: "Charão Consultoria",
    href: "https://www.instagram.com/charaoconsultoria/",
  },
  {
    label: "Charão Tributário",
    href: "https://www.instagram.com/charaotributario/",
  },
  {
    label: "Charão Educacional",
    href: "https://www.instagram.com/charaoeducacional/",
  },
];

const badges = [
  {
    src: "/selo-19-anos.png",
    alt: "Selo comemorativo 19 anos — Grupo Charão",
    width: 504,
    height: 495,
    // Selos quadrados: altura padrão.
    heightClass: "h-14",
  },
  {
    src: "/gptw2026.png",
    alt: "Selo Great Place To Work Certificada — Brasil, Jul 2026 a Jul 2027",
    width: 1055,
    height: 1491,
    heightClass: "h-14",
  },
  {
    src: "/badges/ranked-firm.png",
    alt: "Selo Ranked Firm 2026 — Leaders League",
    width: 947,
    height: 911,
    heightClass: "h-14",
  },
  {
    src: "/fdc.png",
    alt: "Fundação Dom Cabral",
    width: 698,
    height: 357,
    // Wordmark (2:1, não quadrado): mais baixo para pesar igual aos selos.
    heightClass: "h-8",
  },
];

export default function Footer() {
  return (
    <footer className="bg-petroleo text-white">
      <div className="mx-auto max-w-container px-6 pb-8 pt-16 lg:px-10 lg:pt-20">
        {/* Bloco principal */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:grid-cols-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
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
          <div className="lg:col-span-2">
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
          <div className="col-span-2 md:col-span-2 lg:col-span-3">
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-white/40">
              Contato
            </h3>
            <a
              href="mailto:eduardo@charaoconsultoria.com.br"
              className="block break-all text-sm text-white/75 transition-colors hover:text-white"
            >
              eduardo@charaoconsultoria.com.br
            </a>

            <h3 className="mb-3 mt-8 text-xs font-medium uppercase tracking-wider text-white/40">
              Endereço
            </h3>
            <address className="text-sm not-italic leading-relaxed text-white/75">
              Av. André Araújo, 97 — Adrianópolis,
              <br />
              Manaus - AM
            </address>

            {/* Redes Sociais: um ícone de Instagram que abre a escolha do
                perfil (o grupo tem um por empresa). Usa <details> — abre no
                clique/toque, sem JS, e é acessível pelo teclado. O menu sobe
                (bottom-full) porque isto fica no rodapé da página. */}
            <h3 className="mb-3 mt-8 text-xs font-medium uppercase tracking-wider text-white/40">
              Redes Sociais
            </h3>
            <div className="flex flex-wrap items-center gap-3">
            <details className="group relative inline-block">
              <summary className="flex w-fit cursor-pointer list-none items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition-colors hover:border-white/30 hover:text-white [&::-webkit-details-marker]:hidden">
                <Instagram className="h-4 w-4" strokeWidth={1.75} />
                Instagram
                <span
                  aria-hidden
                  className="ml-1 text-white/50 transition-transform group-open:rotate-180"
                >
                  ▾
                </span>
              </summary>
              <div className="absolute bottom-full left-0 z-10 mb-2 w-56 overflow-hidden rounded-xl border border-white/10 bg-petroleo-800 p-1.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]">
                {instagrams.map((ig) => (
                  <a
                    key={ig.label}
                    href={ig.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white"
                  >
                    <Instagram className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                    {ig.label}
                  </a>
                ))}
              </div>
            </details>

              {/* WhatsApp: leva direto ao comercial (mesmo link do CTA do
                  topo). Verde da marca WhatsApp. */}
              <a
                href="https://bit.ly/eduardocomercial1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-[#0B2E13] transition-colors hover:bg-[#1EBE5A]"
              >
                <WhatsappIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Selos / certificações + parceria (FDC) */}
          <div className="col-span-2 md:col-span-4 lg:col-span-3">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 lg:justify-end">
              {badges.map((badge) => (
                <Image
                  key={badge.src}
                  src={badge.src}
                  alt={badge.alt}
                  width={badge.width}
                  height={badge.height}
                  className={`${badge.heightClass} w-auto shrink-0 object-contain`}
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
