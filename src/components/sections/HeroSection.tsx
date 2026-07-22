import Image from "next/image";

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
      {/* Fundo limpo (brief Sessão 1: "retirar linhas de fundo para ficar
          visivelmente mais limpo"). Sem brilho/atmosfera dourada — só um preto
          sólido com uma vinheta sutil para dar profundidade e ajudar a
          legibilidade do texto, como no Figma. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(130% 120% at 50% 40%, transparent 58%, rgba(0,0,0,0.5) 100%)",
        }}
      />

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
          {/* Tipografia do Figma: peso REGULAR (não medium) em corpo grande,
              entrelinha ~1.16 — o look "editorial leve" da referência. */}
          <h1 className="max-w-none text-balance text-[2rem] font-normal leading-[1.18] tracking-tight text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.55)] sm:text-[2.5rem] lg:w-[34rem] lg:text-[3rem] lg:leading-[1.16]">
            {/* Quebras manuais no desktop (lg:block), calibradas para larguras
                de linha equilibradas (bloco visualmente organizado, sem
                recorrer a text-justify); no mobile os spans ficam inline e o
                texto flui naturalmente. */}
            <span className="lg:block">Estratégia que protege</span>{" "}
            <span className="lg:block">
              o lucro, <span className="text-tributario-300">fortalece decisões</span>
            </span>{" "}
            <span className="lg:block">
              <span className="text-tributario-300">e sustenta</span> o crescimento
            </span>{" "}
            <span className="lg:block">da sua empresa.</span>
          </h1>

          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-gray-400 lg:text-lg">
            Lucro Real, Reforma Tributária e educação empresarial aplicados com
            método, indicadores e foco em resultado.
          </p>

          {/* Botão inferior (brief Sessão 1): "Descubra a solução certa para
              sua empresa" → leva à seção "Conheça o Grupo Charão" (empresas). */}
          <div className="mt-9">
            <a
              href="#empresas-servicos"
              className="inline-flex items-center justify-center rounded-full bg-laranja-500 px-8 py-3.5 text-sm font-semibold text-marinho-950 transition-colors hover:bg-laranja-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-laranja-500"
            >
              Descubra a solução certa para sua empresa
            </a>
          </div>

          {/* Prova social imediata: GPTW + Leaders League logo abaixo do CTA.
              A âncora #premios saiu daqui quando a Sessão 10 (Prêmios) ganhou
              seção própria — dois elementos com o mesmo id quebrariam o menu. */}
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
