"use client";

import { useEffect, useRef, useState } from "react";
import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export interface Logo {
  id: string;
  /** Nome do cliente, exibido abaixo do medalhão. */
  name: string;
  image: string;
  /**
   * Arte com fundo colorido (não recortada). Nesses casos a imagem preenche
   * o medalhão inteiro (`object-cover`), e o próprio círculo assume a cor da
   * marca — em vez de aparecer um quadrado colorido dentro do círculo branco.
   */
  bleed?: boolean;
  /**
   * Respiro entre a arte e a borda do medalhão.
   * - "tight": a arte já vem com moldura/círculo próprio e margem embutida;
   *   com o respiro padrão ela ficaria minúscula dentro do círculo.
   * - "loose": a arte ocupa o quadrado de ponta a ponta; precisa de folga
   *   extra, senão os cantos são cortados pela curva do círculo.
   */
  pad?: "tight" | "loose";
}

const RESPIRO = {
  tight: "p-0.5 md:p-1",
  normal: "p-3.5 md:p-4",
  loose: "p-5 md:p-6",
} as const;

interface Logos3Props {
  logos: Logo[];
  className?: string;
  /** Cor das faixas de fade nas bordas — precisa bater com o bg da seção. */
  fadeFrom?: string;
}

/**
 * Esteira infinita de logos de clientes (bloco "logos3" da shadcnblocks,
 * adaptado): sem os tokens do shadcn (`container`, `--background`) e em
 * sintaxe Tailwind v3 (`bg-gradient-to-*`, não o `bg-linear-to-*` da v4).
 *
 * Cada logo vive dentro de um medalhão circular de tamanho fixo. É o que
 * padroniza artes de proporções muito diferentes: sem o círculo, um logo
 * horizontal ocupa 3x a largura de um quadrado e a fileira fica irregular.
 */
const Logos3 = ({ logos, className, fadeFrom = "from-white" }: Logos3Props) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<CarouselApi>();

  /* Perf: o AutoScroll rodava a página inteira, mesmo com a esteira fora da
     tela — trabalho contínuo de main thread à toa. Pausa quando sai da
     viewport e retoma ao voltar; com prefers-reduced-motion fica parada. */
  useEffect(() => {
    const root = rootRef.current;
    if (!api || !root) return;
    const auto = (api.plugins() as { autoScroll?: { play: () => void; stop: () => void } })
      .autoScroll;
    if (!auto) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      auto.stop();
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) auto.play();
        else auto.stop();
      },
      { rootMargin: "120px 0px" },
    );
    io.observe(root);
    return () => io.disconnect();
  }, [api]);

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <div className="relative mx-auto flex items-center justify-center">
        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[AutoScroll({ playOnInit: true, speed: 0.7 })]}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {logos.map((logo) => (
              <CarouselItem
                key={logo.id}
                className="flex basis-auto justify-center pl-0"
              >
                <figure className="mx-3 flex w-28 shrink-0 flex-col items-center md:mx-4 md:w-32">
                  <span className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_6px_20px_-6px_rgba(10,10,10,0.28)] ring-1 ring-carvao/10 md:h-28 md:w-28">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logo.image}
                      alt={`Logo ${logo.name}`}
                      loading="lazy"
                      className={cn(
                        "h-full w-full",
                        logo.bleed
                          ? "object-cover"
                          : cn("object-contain", RESPIRO[logo.pad ?? "normal"]),
                      )}
                    />
                  </span>
                  <figcaption className="mt-3 text-center text-xs leading-tight text-carvao/60">
                    {logo.name}
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Fades laterais: a esteira "nasce" e "morre" no fundo da seção. */}
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r to-transparent md:w-28",
            fadeFrom,
          )}
        />
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l to-transparent md:w-28",
            fadeFrom,
          )}
        />
      </div>
    </div>
  );
};

export { Logos3 };
