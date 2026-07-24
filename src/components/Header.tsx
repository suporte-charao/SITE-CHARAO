"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { navLinks } from "@/lib/nav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o menu mobile com Esc (padrão de acessibilidade).
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Com o menu aberto o header precisa de fundo sólido mesmo no topo da
  // página, senão o painel branco "flutua" desconectado da barra.
  const solido = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solido
          ? "border-carvao/10 bg-white/95 text-carvao shadow-sm backdrop-blur-md"
          : "border-transparent bg-transparent text-white"
      }`}
    >
      <div className="relative mx-auto flex max-w-container items-center justify-between gap-3 px-6 pb-5 pt-7 lg:px-10 lg:pb-6 lg:pt-9">
        <Logo dark={solido} />

        {/* Pílula de navegação central — cápsula flutuante translúcida,
            só a partir de lg (6 itens não cabem em telas estreitas). */}
        <nav
          className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 rounded-full px-5 py-3 text-[13px] backdrop-blur-md transition-colors duration-300 lg:flex xl:gap-7 xl:px-8 xl:text-[15px] ${
            scrolled ? "bg-carvao/5" : "bg-white/10"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap transition-colors ${
                scrolled
                  ? "text-carvao/80 hover:text-carvao"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Botão superior (brief Sessão 1): "Converse com um consultor" →
              link externo do comercial. */}
          <a
            href="https://bit.ly/eduardocomercial1"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-full bg-laranja-500 px-3.5 py-2 text-[13px] font-semibold text-marinho-950 transition-colors hover:bg-laranja-300 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            {/* No mobile estreito o rótulo completo empurra o logo — encurta. */}
            <span className="sm:hidden">Converse conosco</span>
            <span className="hidden sm:inline">Converse com um consultor</span>
          </a>

          {/* Hambúrguer — só abaixo de lg (onde a pílula de navegação some).
              Sem ele o mobile ficava SEM NENHUM menu. */}
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
            className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
              solido
                ? "text-carvao hover:bg-carvao/5"
                : "text-white hover:bg-white/10"
            }`}
          >
            {open ? (
              <X className="h-6 w-6" strokeWidth={1.75} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      {/* Painel do menu mobile: dropdown sob a barra, fecha ao tocar num
          link. Itens com 48px de altura — alvo de toque confortável. */}
      {open && (
        <nav
          id="menu-mobile"
          className="border-t border-carvao/10 bg-white/95 backdrop-blur-md lg:hidden"
        >
          <ul className="mx-auto max-w-container px-6 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-carvao/85 transition-colors hover:bg-carvao/5 hover:text-carvao"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
