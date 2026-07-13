"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

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
      <div className="mx-auto flex max-w-container items-center justify-between px-6 pb-5 pt-7 lg:px-10 lg:pb-6 lg:pt-9">
        <Logo dark={scrolled} />

        <a
          href="#contato"
          className="rounded-full bg-areia-400 px-5 py-2.5 text-sm font-medium text-carvao transition-colors hover:bg-areia-300"
        >
          Agendar conversa
        </a>
      </div>
    </header>
  );
}
