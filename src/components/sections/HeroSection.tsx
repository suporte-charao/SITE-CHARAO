import Image from "next/image";
import { ArrowRight } from "lucide-react";

/* Dourado da direção de arte "Dark Premium". */
const GOLD = "#C5A059";

const seals = [
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

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-[#050505]"
    >
      {/* Atmosfera "Dark Premium": brilho dourado ambiente + anéis concêntricos
          finos de luz. Camada de FUNDO (-z-10, absolute inset-0 relativa à
          <section> INTEIRA — cobre 100% da altura, inclusive a faixa da curva
          no rodapé, encostando exatamente na borda da próxima seção). Os fios
          passam por trás do texto e da foto, reaparecendo só nos vazios. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Brilho ambiente dourado, quente, atrás do sujeito */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(58% 55% at 74% 34%, rgba(197,160,89,0.16), rgba(197,160,89,0.05) 42%, transparent 70%)",
          }}
        />

        {/* Arcos concêntricos dourados (listras). IMPORTANTE: a foto tem uma
            máscara de opacidade na borda esquerda (transparente→opaca), então
            z-index sozinho NÃO impede as linhas de vazarem ATRAVÉS da zona
            translúcida sobre o rosto. Este wrapper corta os anéis
            horizontalmente: 100% visíveis no preto puro à esquerda e
            totalmente extintos antes de alcançar a foto/rosto (>54% da tela). */}
        <div
          className="absolute inset-0"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, black 40%, transparent 54%)",
            maskImage:
              "linear-gradient(to right, black 40%, transparent 54%)",
          }}
        >
          {[
            { size: 1240, opacity: 0.45, w: "1.5px" },
            { size: 980, opacity: 0.34, w: "1.25px" },
            { size: 720, opacity: 0.24, w: "1px" },
            { size: 480, opacity: 0.16, w: "1px" },
          ].map((ring) => (
            <div
              key={ring.size}
              className="absolute top-1/2 rounded-full"
              style={{
                right: `calc(26% - ${ring.size / 2}px)`,
                height: ring.size,
                width: ring.size,
                marginTop: -ring.size / 2,
                border: `${ring.w} solid rgba(197,160,89,${ring.opacity})`,
                WebkitMaskImage:
                  "radial-gradient(70% 85% at 8% 50%, black 30%, transparent 72%)",
                maskImage:
                  "radial-gradient(70% 85% at 8% 50%, black 30%, transparent 72%)",
              }}
            />
          ))}
        </div>

        {/* Zona de sombra atrás do bloco de texto: um scrim preto radial
            pintado POR CIMA dos fios (mas ainda no fundo, sob o texto).
            As linhas dissolvem ao se aproximar das letras e reaparecem no
            preto vazio ao redor — como no layout de referência. */}
        <div
          className="absolute left-[-8%] top-[18%] h-[56%] w-[112%] lg:w-[60%]"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #050505 42%, rgba(5,5,5,0.85) 62%, transparent 100%)",
          }}
        />

        {/* Vinheta sutil para aprofundar as bordas e concentrar o olhar */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 120% at 50% 45%, transparent 55%, rgba(0,0,0,0.55) 100%)",
          }}
        />
      </div>

      {/* Foto do Eduardo: absolute inset-0 relativa à <section> INTEIRA (não só
          à primeira tela), então a arte se estende sem margem/gap até a borda
          exata da curva de transição no rodapé. object-bottom ancora a
          imagem pela BASE — ela nunca corta o queixo/peito, mesmo com a
          altura extra da curva; o corte (se houver) acontece no topo
          (cabelo), nunca embaixo. Sem fade/máscara na base: sólida até o fim. */}
      <div className="absolute inset-y-0 right-0 z-20 hidden w-[50%] overflow-hidden lg:block [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_40%)] [mask-image:linear-gradient(to_right,transparent_0%,black_40%)] [-webkit-mask-repeat:no-repeat] [mask-repeat:no-repeat]">
        <Image
          src="/A5553.jpg"
          alt="Eduardo Charão"
          fill
          className="h-full object-cover object-bottom"
          priority
        />

        {/* Selo de 19 anos reinando sozinho no vão escuro à direita da cabeça
            dele. Top fixo em pixels para nunca colidir com o header fixed
            (~89px). */}
        <div className="absolute right-[3%] top-28 z-20 lg:top-32">
          <Image
            src="/selo-19-anos.png"
            alt="Selo comemorativo 19 anos — Grupo Charão"
            width={504}
            height={495}
            className="h-auto w-32 object-contain drop-shadow-[0_0_45px_rgba(197,160,89,0.35)]"
          />
        </div>
      </div>

      {/* Primeira tela: ocupa 100vh exatos, então o Hero aparece inteiro ao
          abrir e a curva (que vem depois, em fluxo) fica abaixo da dobra —
          revelada só ao rolar. */}
      <div className="relative z-20 mx-auto grid min-h-screen max-w-[1180px] grid-cols-1 items-center gap-8 px-8 pb-16 pt-28 lg:grid-cols-2 lg:gap-8 lg:px-12 lg:pb-16 lg:pt-44">
        <div className="relative z-20 max-w-xl">
          <h1 className="max-w-none text-balance text-[1.6rem] font-medium leading-[1.18] tracking-tight text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.55)] sm:text-[2rem] lg:w-[37rem] lg:text-[2.15rem] lg:leading-[1.25]">
            {/* Quebras manuais no desktop (lg:block), calibradas para larguras
                de linha equilibradas (bloco visualmente organizado, sem
                recorrer a text-justify); no mobile os spans ficam inline e o
                texto flui naturalmente. */}
            <span className="lg:block">
              Transformamos{" "}
              <span className="text-[#C5A059]">gestão contábil</span>,
            </span>{" "}
            <span className="lg:block">
              <span className="text-[#C5A059]">inteligência tributária</span> e{" "}
              <span className="text-[#C5A059]">educação</span>
            </span>{" "}
            <span className="lg:block">
              <span className="text-[#C5A059]">empresarial</span> em
              segurança,
            </span>{" "}
            <span className="lg:block">eficiência e proteção do lucro.</span>
          </h1>

          <div className="relative mt-8 inline-block">
            {/* Glow dourado respirando atrás do botão — chama o olhar */}
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-1.5 rounded-full bg-[#C5A059] opacity-40 blur-xl motion-safe:animate-glowPulse"
            />
            <a
              href="#contato"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-b from-[#e2c583] to-[#C5A059] px-7 py-3 text-[13.5px] font-semibold text-black shadow-[0_6px_28px_-6px_rgba(197,160,89,0.6)] ring-1 ring-[#efd9a6]/50 transition-all duration-300 ease-out hover:scale-[1.04] hover:shadow-[0_10px_44px_-4px_rgba(197,160,89,0.9)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A059]"
            >
              {/* Brilho que varre da esquerda à direita no hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 w-1/2 -translate-x-[180%] -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-[900ms] ease-out group-hover:translate-x-[280%]"
              />
              <span className="relative">Agendar conversa</span>
              <span className="relative ml-3 flex h-6 w-6 items-center justify-center rounded-full bg-black/15">
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
            </a>
          </div>

          {/* Prova social imediata: GPTW + Leaders League logo abaixo do CTA */}
          <div className="mt-10 flex items-center gap-6">
            {seals.map((seal) => (
              <Image
                key={seal.src}
                src={seal.src}
                alt={seal.alt}
                width={seal.width}
                height={seal.height}
                className="h-20 w-auto shrink-0 object-contain md:h-[5.85rem]"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Transição em curva para a faixa clara: fica em FLUXO logo abaixo da
          primeira tela (100vh), então só aparece ao rolar. A onda branca varre
          a base da Hero com um fio dourado acompanhando o contorno. O fill
          (#FAF8F5) é EXATAMENTE o bg da faixa seguinte — emenda invisível. */}
      <div
        aria-hidden
        className="pointer-events-none relative z-30 -mt-px"
      >
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          className="block h-[74px] w-full md:h-[140px]"
        >
          <defs>
            <linearGradient id="hero-curve-gold" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#C5A059" stopOpacity="0" />
              <stop offset="0.28" stopColor="#C5A059" stopOpacity="0.9" />
              <stop offset="0.68" stopColor="#e2c583" stopOpacity="0.95" />
              <stop offset="1" stopColor="#C5A059" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,70 C440,26 820,124 1440,124 L1440,150 L0,150 Z"
            fill="#FAF8F5"
          />
          <path
            d="M0,70 C440,26 820,124 1440,124"
            fill="none"
            stroke="url(#hero-curve-gold)"
            strokeWidth="2.5"
          />
        </svg>
      </div>
    </section>
  );
}
