import Image from "next/image";
import { Landmark, Play } from "lucide-react";

/**
 * Faixa de transição clara entre a Hero escura e a seção dos 19 anos.
 * O bg (#FAF8F5) é EXATAMENTE o fill da curva que fecha a Hero — as duas
 * superfícies se fundem sem emenda. Ornamento central com ícone e fios
 * dourados abre o manifesto.
 */
export default function ManifestoFaixaSection() {
  return (
    <section className="w-full bg-[#FAF8F5] pb-12 pt-10 md:pb-16 md:pt-14">
      {/* Ornamento: fio — ícone em medalhão — fio */}
      <div className="mb-8 flex items-center justify-center gap-5 md:mb-10">
        <span
          aria-hidden
          className="h-px w-20 bg-gradient-to-r from-transparent to-[#C5A059]/70 md:w-28"
        />
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C5A059]/60 text-[#8a6d2f]">
          <Landmark className="h-5 w-5" strokeWidth={1.5} />
        </span>
        <span
          aria-hidden
          className="h-px w-20 bg-gradient-to-l from-transparent to-[#C5A059]/70 md:w-28"
        />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center text-lg font-medium leading-relaxed text-gray-600 md:text-xl">
        Com forte atuação na região Norte e visibilidade nacional, unimos{" "}
        <span className="font-semibold text-[#8a6d2f]">19 anos de expertise</span>{" "}
        na{" "}
        <span className="font-semibold text-[#8a6d2f]">
          Zona Franca de Manaus
        </span>{" "}
        e na{" "}
        <span className="font-semibold text-[#8a6d2f]">
          Área de Livre Comércio
        </span>{" "}
        de Boa Vista para dominar a complexidade do{" "}
        <span className="font-semibold text-[#8a6d2f]">Lucro Real</span> e da{" "}
        <span className="font-semibold text-[#8a6d2f]">Reforma Tributária</span>,
        garantindo segurança e crescimento para sua empresa.
      </div>

      {/* Card de vídeo: poster com botão de play em moldura dourada premium.
          TODO: plugar a fonte real do vídeo (embed do YouTube/Vimeo ou <video>
          com .mp4) no clique do botão — por ora é o card estático de entrada. */}
      <div className="mx-auto mt-12 max-w-xl px-6 md:mt-14">
        <button
          type="button"
          aria-label="Assistir vídeo institucional do Grupo Charão"
          className="group relative block aspect-video w-full overflow-hidden rounded-2xl shadow-[0_20px_60px_-20px_rgba(10,10,10,0.35)] ring-1 ring-[#C5A059]/25 transition-transform duration-500 ease-out hover:scale-[1.01]"
        >
          <Image
            src="/021A6543.jpg"
            alt="Equipe do Grupo Charão — vídeo institucional"
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(min-width: 768px) 896px, 100vw"
          />

          {/* Scrim escuro para dar contraste ao botão de play e ao texto */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/25 transition-colors duration-500 group-hover:from-black/65"
          />

          {/* Botão de play: glow dourado respirando + preenchimento em gradiente */}
          <span className="absolute inset-0 flex items-center justify-center">
            <span
              aria-hidden
              className="absolute h-20 w-20 rounded-full bg-[#C5A059] opacity-40 blur-xl motion-safe:animate-glowPulse md:h-24 md:w-24"
            />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-[#e2c583] to-[#C5A059] text-black shadow-[0_8px_28px_-6px_rgba(197,160,89,0.7)] transition-transform duration-300 ease-out group-hover:scale-110 md:h-20 md:w-20">
              <Play className="ml-1 h-6 w-6 md:h-7 md:w-7" fill="currentColor" strokeWidth={0} />
            </span>
          </span>

        </button>
      </div>
    </section>
  );
}
