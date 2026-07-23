"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { navLinks } from "@/lib/nav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-carvao/10 bg-white/95 text-carvao shadow-sm backdrop-blur-md"
          : "border-transparent bg-transparent text-white"
      }`}
    >
      <div className="relative mx-auto flex max-w-container items-center justify-between px-6 pb-5 pt-7 lg:px-10 lg:pb-6 lg:pt-9">
        <Logo dark={scrolled} />

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
      </div>
    </header>
  );
}
