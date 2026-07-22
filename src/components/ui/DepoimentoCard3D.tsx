"use client";

import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

const GOLD = "#C5A059";

/** Inclinação máxima (graus) nos dois eixos. Acima disso vira caricatura. */
const TILT = 7;

export interface Depoimento {
  frase: string;
  relato: string;
  autor: string;
  cargo: string;
  empresa: string;
  logo: string;
}

/**
 * Card de depoimento em 3D real: perspectiva no invólucro + `preserve-3d`
 * na placa, com cada camada em um translateZ diferente. O aspa, o nome e o
 * logo flutuam ACIMA da superfície, então o movimento gera paralaxe de
 * verdade — não é um "hover que finge profundidade".
 *
 * O ponteiro alimenta variáveis CSS (--rx/--ry/--mx/--my) por ref, sem
 * setState: nenhum re-render por frame.
 */
export default function DepoimentoCard3D({
  item,
  index,
}: {
  item: Depoimento;
  index: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  // Revelação escalonada na entrada em tela.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const semMovimento = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const mover = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el || semMovimento()) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--ry", `${(px - 0.5) * 2 * TILT}deg`);
    el.style.setProperty("--rx", `${(0.5 - py) * 2 * TILT}deg`);
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    el.style.setProperty("--s", "1.015");
  };

  const sair = () => {
    const el = wrapRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--s", "1");
  };

  return (
    <div
      ref={wrapRef}
      onPointerMove={mover}
      onPointerLeave={sair}
      style={{
        perspective: "1100px",
        transitionDelay: `${index * 110}ms`,
        ["--rx" as string]: "0deg",
        ["--ry" as string]: "0deg",
        ["--mx" as string]: "50%",
        ["--my" as string]: "50%",
      }}
      className={`group relative transition-[opacity,transform] duration-700 ease-out ${
        visivel ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {/* Halo dourado que só respira no hover, atrás da placa. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-3 rounded-[2rem] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(60% 60% at var(--mx) var(--my), ${GOLD}40, transparent 70%)`,
        }}
      />

      <article
        className="relative flex h-full flex-col rounded-[1.75rem] bg-white p-7 ring-1 ring-carvao/5 transition-[transform,box-shadow] duration-300 ease-out will-change-transform lg:p-9"
        style={{
          transformStyle: "preserve-3d",
          transform:
            "rotateX(var(--rx)) rotateY(var(--ry)) translateZ(0) scale(var(--s, 1))",
          boxShadow:
            "0 2px 4px -2px rgba(20,16,10,0.10), 0 18px 40px -24px rgba(20,16,10,0.45)",
        }}
      >
        {/* Bisel: luz no topo/esquerda e sombra na base — dá espessura à placa. */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[1.75rem]"
          style={{
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.9), inset 0 0 0 1px rgba(197,160,89,0.14), inset 0 -14px 26px -22px rgba(20,16,10,0.5)",
          }}
        />

        {/* Especular dourado seguindo o ponteiro. */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[1.75rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(28rem circle at var(--mx) var(--my), ${GOLD}26, transparent 42%)`,
          }}
        />

        <Quote
          className="h-9 w-9 shrink-0 text-areia-400 transition-transform duration-300"
          style={{ transform: "translateZ(58px)" }}
        />

        <p
          className="mt-5 text-pretty text-lg font-medium leading-snug text-carvao lg:text-xl"
          style={{ transform: "translateZ(34px)" }}
        >
          &ldquo;{item.frase}&rdquo;
        </p>

        <p
          className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-carvao/65"
          style={{ transform: "translateZ(16px)" }}
        >
          {item.relato}
        </p>

        <div
          className="mt-7 flex items-center gap-4 border-t border-carvao/5 pt-5"
          style={{ transform: "translateZ(42px)" }}
        >
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-carvao/10 transition-shadow duration-300 group-hover:shadow-[0_10px_20px_-8px_rgba(20,16,10,0.45)]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/LOGO%20CLIENTES/${item.logo}`}
              alt={`Logo ${item.empresa}`}
              loading="lazy"
              className="h-full w-full object-contain p-1.5"
            />
          </span>
          <div>
            <p className="text-sm font-semibold text-carvao">{item.autor}</p>
            <p className="text-xs text-carvao/50">
              {item.cargo} · {item.empresa}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
