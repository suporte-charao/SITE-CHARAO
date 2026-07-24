import Image from "next/image";

/* Dourado da direção de arte "Dark Premium". */
const GOLD = "#C5A059";

const seals = [
  {
    src: "/gptw2026.png",
    alt: "Selo Great Place To Work Certificada — Brasil, Jul 2026 a Jul 2027",
    width: 1055,
    height: 1491,
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
      {/* Entrada da Hero (SÓ título e subtítulo), no carregamento: sobem com
          fade e um desfoque que assenta — o look editorial premium. Em CSS
          puro (sem JS), escalonado, e desligado sob prefers-reduced-motion. */}
      <style>{`
        @keyframes heroIn {
          0%   { opacity: 0; transform: translateY(30px); filter: blur(10px); }
          100% { opacity: 1; transform: none;             filter: blur(0); }
        }
        .hero-in-title { animation: heroIn 1.05s cubic-bezier(0.22,1,0.36,1) 0.12s both; }
        .hero-in-sub   { animation: heroIn 1.05s cubic-bezier(0.22,1,0.36,1) 0.42s both; }
        @media (prefers-reduced-motion: reduce) {
          .hero-in-title, .hero-in-sub { animation: none; opacity: 1; filter: none; transform: none; }
        }
      `}</style>

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
      </div>

      {/* Primeira tela: ocupa 100vh exatos, então o Hero aparece inteiro ao
          abrir e a curva (que vem depois, em fluxo) fica abaixo da dobra —
          revelada só ao rolar. */}
      {/* [@media(max-height:...)]: em notebooks com pouca altura útil (zoom
          100%, barra de favoritos, etc.) o padding vertical fixo somado à
          altura do bloco de texto ultrapassava 100vh e cortava os selos na
          base. Essas variantes de altura comprimem o respiro SÓ nesse
          cenário — em telas normais/altas nada muda. */}
      <div className="relative z-20 mx-auto grid min-h-screen max-w-[1180px] grid-cols-1 items-center gap-8 px-8 pb-16 pt-28 [@media(max-height:760px)]:pb-8 [@media(max-height:760px)]:pt-32 lg:grid-cols-2 lg:gap-8 lg:px-12 lg:pb-16 lg:pt-44 [@media(max-height:760px)]:lg:pb-8 [@media(max-height:760px)]:lg:pt-36">
        <div className="relative z-20 max-w-xl">
          {/* Tipografia do Figma: peso REGULAR (não medium) em corpo grande,
              entrelinha ~1.16 — o look "editorial leve" da referência. */}
          {/* lg:text-[32px]: o texto atual é mais longo que a versão anterior
              e, com a coluna limitada a ~528px (antes de esbarrar na foto),
              48px (3rem) fazia 3 das 4 linhas quebrarem em duas — medido
              pixel a pixel no navegador. 32px é o maior tamanho que ainda
              fecha nas 4 linhas pedidas dentro do espaço real disponível. */}
          <h1 className="hero-in-title max-w-none text-balance text-[2rem] font-normal leading-[1.18] tracking-tight text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.55)] sm:text-[2.5rem] lg:w-[33rem] lg:text-[32px] lg:leading-[1.22]">
            {/* Quebras manuais no desktop (lg:block), calibradas para larguras
                de linha equilibradas (bloco visualmente organizado, sem
                recorrer a text-justify); no mobile os spans ficam inline e o
                texto flui naturalmente. */}
            <span className="lg:block">Transformamos gestão contábil,</span>{" "}
            <span className="lg:block">
              <span className="text-tributario-300">inteligência tributária</span> e
            </span>{" "}
            <span className="lg:block">
              <span className="text-laranja-300">educação empresarial</span> em
              segurança,
            </span>{" "}
            <span className="lg:block">
              eficiência e <span className="text-tributario-300">proteção do lucro</span>.
            </span>
          </h1>

          {/* Tamanho calibrado pixel a pixel na coluna de ~528px (o limite
              antes de esbarrar na foto). Em telas de pouca altura o texto
              encolhe mais um passo para não empurrar CTA/selos para fora da
              primeira tela. */}
          <p className="hero-in-sub mt-6 max-w-md text-pretty text-base leading-relaxed text-white [@media(max-height:760px)]:mt-4 [@media(max-height:760px)]:text-[15px] lg:max-w-[33rem] lg:text-[16px] [@media(max-height:760px)]:lg:text-[15px]">
            Com forte atuação na região Norte e visibilidade nacional, unimos 19
            anos de expertise na Zona Franca de Manaus e na Área de Livre
            Comércio de Boa Vista para dominar a complexidade do Lucro Real e da
            Reforma Tributária, garantindo segurança e crescimento para sua
            empresa.
          </p>

          {/* Botão inferior (brief Sessão 1): "Descubra a solução certa para
              sua empresa" → leva à seção "Conheça o Grupo Charão" (empresas). */}
          <div className="mt-9 [@media(max-height:760px)]:mt-6">
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
          <div className="mt-10 flex items-center gap-6 [@media(max-height:760px)]:mt-6">
            {seals.map((seal) => (
              <Image
                key={seal.src}
                src={seal.src}
                alt={seal.alt}
                width={seal.width}
                height={seal.height}
                className="h-20 w-auto shrink-0 object-contain md:h-[5.85rem] [@media(max-height:760px)]:h-16 [@media(max-height:760px)]:md:h-16"
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
