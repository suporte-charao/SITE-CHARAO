"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Pirâmide escalonada (a MESMA arte da referência — teal à esquerda, verde à
 * direita, três degraus) dividida em 3 peças: base, meio e topo.
 *
 * Etapa 1 — MONTAGEM: as peças entram desmontadas (fade + translate + leve
 * rotação) e se encaixam com um settle discreto. Base vem da esquerda/baixo,
 * meio da direita, topo de cima, em sequência.
 * Etapa 2 — ROTAÇÃO: montada, a pirâmide gira lenta e continuamente.
 *
 * As três peças são SVGs de mesmo viewBox sobrepostos: no repouso (transform
 * zero) encaixam perfeitamente formando a pirâmide completa. Só a animação
 * foi adicionada — o visual é idêntico ao anterior.
 *
 * Robusto: sem JS ou com prefers-reduced-motion, aparece MONTADA e parada.
 */

/* ── Geometria (viewBox 640×680), reaproveitada da arte original ───────── */
const CX = 320;
const D = 0.414; // profundidade aparente do isométrico

type Corte = readonly [number, number]; // [y, semilargura]
const frente = (y: number, w: number) => y + w * D;
const tras = (y: number, w: number) => y - w * D;

const faceDir = ([yt, wt]: Corte, [yb, wb]: Corte) =>
  `${CX + wt},${yt} ${CX},${frente(yt, wt)} ${CX},${frente(yb, wb)} ${CX + wb},${yb}`;
const faceEsq = ([yt, wt]: Corte, [yb, wb]: Corte) =>
  `${CX - wt},${yt} ${CX},${frente(yt, wt)} ${CX},${frente(yb, wb)} ${CX - wb},${yb}`;
const degrau = ([y, w]: Corte) =>
  `${CX - w},${y} ${CX},${tras(y, w)} ${CX + w},${y} ${CX},${frente(y, w)}`;
const brilho = ([yt, wt]: Corte, [yb, wb]: Corte) =>
  `${CX},${frente(yt, wt)} ${CX + wt * 0.55},${yt + wt * 0.18} ${CX},${frente(yb, wb)}`;

const apice: Corte = [27, 0];
const base1: Corte = [218, 90];
const topo2: Corte = [218, 115];
const base2: Corte = [386, 186];
const topo3: Corte = [386, 216];
const base3: Corte = [531, 292];

const SVG =
  "pointer-events-none absolute inset-0 h-full w-full will-change-transform [backface-visibility:hidden]";

/* Cada peça é um SVG full-canvas; o transform-origin fica no centróide do
   degrau para a rotação de settle girar em torno da própria peça. */
function PecaBase() {
  return (
    <svg viewBox="0 0 640 680" className={cn(SVG, "piece piece-base")}>
      <defs>
        <linearGradient id="pm-luz3" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#9BDE58" />
          <stop offset="1" stopColor="#7CC63F" />
        </linearGradient>
        <linearGradient id="pm-sombra3" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#17685E" />
          <stop offset="1" stopColor="#0F4B46" />
        </linearGradient>
      </defs>
      <polygon points={degrau(topo3)} fill="#1A7C74" />
      <polygon points={faceEsq(topo3, base3)} fill="url(#pm-sombra3)" />
      <polygon points={faceDir(topo3, base3)} fill="url(#pm-luz3)" />
      <polygon points={brilho(topo3, base3)} fill="#ffffff" opacity="0.1" />
    </svg>
  );
}

function PecaMeio() {
  return (
    <svg viewBox="0 0 640 680" className={cn(SVG, "piece piece-middle")}>
      <defs>
        <linearGradient id="pm-luz2" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#A3E260" />
          <stop offset="1" stopColor="#82CB44" />
        </linearGradient>
        <linearGradient id="pm-sombra2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#18705F" />
          <stop offset="1" stopColor="#11544A" />
        </linearGradient>
      </defs>
      <polygon points={degrau(topo2)} fill="#1B837A" />
      <polygon points={faceEsq(topo2, base2)} fill="url(#pm-sombra2)" />
      <polygon points={faceDir(topo2, base2)} fill="url(#pm-luz2)" />
      <polygon points={brilho(topo2, base2)} fill="#ffffff" opacity="0.1" />
    </svg>
  );
}

function PecaTopo() {
  return (
    <svg viewBox="0 0 640 680" className={cn(SVG, "piece piece-top")}>
      <defs>
        <linearGradient id="pm-luz1" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#9BDB57" />
          <stop offset="1" stopColor="#7BC43E" />
        </linearGradient>
        <linearGradient id="pm-sombra1" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#43A567" />
          <stop offset="1" stopColor="#2E8450" />
        </linearGradient>
      </defs>
      <polygon points={faceEsq(apice, base1)} fill="url(#pm-sombra1)" />
      <polygon points={faceDir(apice, base1)} fill="url(#pm-luz1)" />
    </svg>
  );
}

const ASSEMBLY_MS = 1500; // fim da montagem → começa a girar

export default function PiramideMontagem() {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"idle" | "armed" | "mount">("idle");
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      return; // fica montada e parada
    }

    let spinTimer = 0;
    const start = () => {
      setPhase("mount");
      spinTimer = window.setTimeout(() => setSpinning(true), ASSEMBLY_MS);
    };

    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
      start();
      return () => clearTimeout(spinTimer);
    }

    setPhase("armed"); // esconde antes de entrar em tela (sem flash)
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(spinTimer);
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-[420px] [perspective:1200px]">
      <style>{`
        .pm-piece-orig .piece-base   { transform-origin: 50% 69%; }
        .pm-piece-orig .piece-middle { transform-origin: 50% 47%; }
        .pm-piece-orig .piece-top    { transform-origin: 50% 22%; }

        /* Escondida antes da montagem, sem transição (evita flash). */
        .pm.is-armed .piece { opacity: 0; }

        .pm.is-mount .piece-base {
          animation: pmBase 1s cubic-bezier(0.22,1,0.36,1) both;
        }
        .pm.is-mount .piece-middle {
          animation: pmMiddle 1s cubic-bezier(0.22,1,0.36,1) 0.18s both;
        }
        .pm.is-mount .piece-top {
          animation: pmTop 0.95s cubic-bezier(0.22,1,0.36,1) 0.36s both;
        }
        /* Rotação contínua SUTIL: um balanço 3D (rotateY) que nunca chega ao
           perfil — a arte é 2D, então um giro de 360° a deixaria fininha como
           uma lasca. O vai-e-vem suave lê como objeto tecnológico girando de
           leve para pegar a luz. Ciclo fechado (‑16→16→‑16), sem emenda. */
        .pm.is-spin { animation: pmSpin 9s ease-in-out infinite; }

        @keyframes pmBase {
          0%   { opacity: 0; transform: translate(-58px, 44px) rotate(-8deg); }
          72%  { opacity: 1; transform: translate(5px, -6px) rotate(1.4deg); }
          100% { opacity: 1; transform: translate(0,0) rotate(0deg); }
        }
        @keyframes pmMiddle {
          0%   { opacity: 0; transform: translate(64px, 12px) rotate(7deg); }
          72%  { opacity: 1; transform: translate(-6px, -4px) rotate(-1.4deg); }
          100% { opacity: 1; transform: translate(0,0) rotate(0deg); }
        }
        @keyframes pmTop {
          0%   { opacity: 0; transform: translate(0, -78px) rotate(-6deg); }
          72%  { opacity: 1; transform: translate(0, 5px) rotate(1.2deg); }
          100% { opacity: 1; transform: translate(0,0) rotate(0deg); }
        }
        @keyframes pmSpin {
          0%   { transform: rotateY(-16deg); }
          50%  { transform: rotateY(16deg); }
          100% { transform: rotateY(-16deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .pm, .pm .piece { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      <div
        ref={ref}
        role="img"
        aria-label="Pirâmide da Metodologia Charão. Da base ao topo: Sistemas, Processos e Pessoas."
        className={cn(
          "pm pm-piece-orig relative aspect-[640/680] [transform-style:preserve-3d]",
          phase === "armed" && "is-armed",
          phase === "mount" && "is-mount",
          spinning && "is-spin",
        )}
      >
        {/* Ordem base → meio → topo: cada peça cobre o miolo do degrau de baixo. */}
        <PecaBase />
        <PecaMeio />
        <PecaTopo />
      </div>
    </div>
  );
}
