"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Sistema de ENTRADA de tela — não um simples fade. Cada variante encena a
 * chegada do conteúdo:
 *
 * - "mask-up": o conteúdo SOBE POR TRÁS de uma máscara invisível (cortina de
 *   teatro) — para títulos e headlines.
 * - "wipe": revelado por uma varredura de recorte (clip-path) da esquerda
 *   para a direita — para imagens, cards e painéis.
 * - "zoom": assenta de uma escala 1.04 com deslize — para blocos grandes.
 * - "fade-up": o fade discreto original — para textos de apoio.
 *
 * O easing (cubic-bezier(0.22, 1, 0.36, 1)) desacelera longamente no fim —
 * é o "assentamento" que dá a impressão física de entrada, em vez do
 * ease-out genérico.
 *
 * Robusto por construção — nunca deixa conteúdo preso invisível:
 * - No servidor renderiza VISÍVEL. Sem JS, tudo aparece.
 * - Só esconde APÓS montar e apenas o que está abaixo da dobra.
 * - `prefers-reduced-motion` e ausência de IntersectionObserver: sem animação.
 */

type Variant =
  | "fade-up"
  | "mask-up"
  | "wipe"
  | "zoom"
  /** Entra vindo da ESQUERDA (desliza para a direita até o lugar). */
  | "slide-left"
  /** Entra vindo da DIREITA (desliza para a esquerda até o lugar). */
  | "slide-right";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function Reveal({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  y = 26,
  duration,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  /** Atraso da animação em ms — use para escalonar itens. */
  delay?: number;
  /** Distância (px) do deslize (fade-up/zoom). */
  y?: number;
  /** Duração em ms (padrão por variante). */
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // null = estado do servidor (visível). false = armado. true = revelado.
  const [shown, setShown] = useState<boolean | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      setShown(true);
      return;
    }
    if (el.getBoundingClientRect().top < window.innerHeight * 0.88) {
      setShown(true);
      return;
    }

    setShown(false);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hidden = shown === false;
  const dur = duration ?? (variant === "fade-up" ? 750 : 950);

  /* will-change só enquanto a entrada está armada/animando. Deixá-lo
     permanente mantinha DEZENAS de camadas compositadas vivas na página
     inteira (custo real de memória/compositor); "auto" após revelar devolve
     tudo ao fluxo normal de pintura. */
  const wc = (props: string) => (hidden ? props : "auto");

  /* mask-up: o wrapper é a máscara (overflow-hidden); um filho interno faz o
     movimento — o texto surge "de dentro" da própria linha. */
  if (variant === "mask-up") {
    return (
      /* A máscara é um clip-path estendido 14px ABAIXO da caixa — não um
         overflow-hidden puro: títulos grandes do Tailwind (text-5xl tem
         line-height 1) deixam o descender de g/j/q/ç fora da caixa, e o
         overflow decepava a perna das letras depois de revelado. Os 14px
         extras ficam invisíveis durante a subida na prática (o texto entra
         com opacity 0.25) e devolvem o descender inteiro no repouso. */
      <div
        ref={ref}
        className={className}
        style={{ clipPath: "inset(0 0 -14px 0)" }}
      >
        <div
          style={{
            transition: `transform ${dur}ms ${EASE} ${delay}ms, opacity ${Math.round(dur * 0.6)}ms ease-out ${delay}ms`,
            transform: hidden ? "translateY(108%)" : "none",
            opacity: hidden ? 0.25 : 1,
            willChange: wc("transform"),
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  /* wipe: o recorte fica num FILHO — clip-path no próprio elemento observado
     zera a área visível e o IntersectionObserver nunca dispara (ratio 0). */
  if (variant === "wipe") {
    return (
      <div ref={ref} className={className}>
        <div
          style={{
            transition: `clip-path ${dur}ms ${EASE} ${delay}ms, transform ${dur}ms ${EASE} ${delay}ms`,
            clipPath: hidden ? "inset(0 100% 0 0)" : "inset(0 0% 0 0)",
            transform: hidden ? "translateX(-14px)" : "none",
            willChange: wc("clip-path, transform"),
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  // Distância lateral: o dobro do deslize vertical dá um gesto de "entrar
  // pela borda" nítido, sem exagerar a ponto de causar rolagem horizontal
  // (o overflow-x da página já está contido nas seções).
  const dx = Math.max(y * 2, 56);

  let transform = `translateY(${y}px)`;
  if (variant === "zoom") transform = `translateY(${y}px) scale(1.04)`;
  else if (variant === "slide-left") transform = `translateX(-${dx}px)`;
  else if (variant === "slide-right") transform = `translateX(${dx}px)`;

  const styles: React.CSSProperties = {
    transition: `transform ${dur}ms ${EASE} ${delay}ms, opacity ${Math.round(dur * 0.7)}ms ease-out ${delay}ms`,
    transform: hidden ? transform : "none",
    opacity: hidden ? 0 : 1,
    willChange: wc("transform"),
  };

  return (
    <div ref={ref} className={className} style={styles}>
      {children}
    </div>
  );
}
