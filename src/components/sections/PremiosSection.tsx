import Image from "next/image";

const GOLD = "#C5A059";

type Premio = {
  id: string;
  nome: string;
  descricao: string;
  /** Números duros extraídos da própria descrição, para leitura rápida. */
  destaques?: { valor: string; rotulo: string }[];
  selos: { src: string; alt: string }[];
};

/**
 * Sessão 10 — Prêmios.
 *
 * Cada prêmio é uma "placa": selos à esquerda sobre um pedestal iluminado,
 * narrativa à direita, separadas por um fio dourado que dissolve nas pontas.
 */
const premios: Premio[] = [
  {
    id: "gptw",
    nome: "Great Place to Work — GPTW",
    descricao:
      "O GPTW reconhece empresas pela qualidade do ambiente de trabalho, pela cultura organizacional e pela experiência dos colaboradores. Pelo 4º ano consecutivo, a Charão está entre as melhores empresas para trabalhar da Região Norte, conquistando o 4º lugar na categoria Pequenas Empresas e passou a integrar o ranking das 150 melhores pequenas empresas para trabalhar no Brasil.",
    destaques: [
      { valor: "4º", rotulo: "ano consecutivo" },
      { valor: "4º", rotulo: "lugar · Pequenas Empresas" },
      { valor: "Top 150", rotulo: "pequenas empresas do Brasil" },
    ],
    /* TODO: entram aqui o SELO GPTW 2026 e o GPTW NACIONAL assim que os
       arquivos chegarem. O /badges/gptw.webp NÃO serve: é o logotipo da
       marca GPTW (quadrado vermelho), não um selo de certificação. */
    selos: [
      {
        src: "/Selo-Pequenas-Empresas-Horizontal-2025.png",
        alt: "Selo Great Place To Work — Melhores Empresas Para Trabalhar, Pequenas Empresas, Brasil 2025",
      },
    ],
  },
  {
    id: "leaders-league",
    nome: "Leaders League 2026",
    descricao:
      "Escritório ranqueado entre os destaques do país na avaliação internacional da Leaders League, que mapeia as principais consultorias e escritórios do mercado.",
    selos: [
      {
        src: "/badges/ranked-firm.png",
        alt: "Selo Ranked Firm 2026 — Leaders League",
      },
    ],
  },
];

export default function PremiosSection() {
  return (
    <section
      id="premios"
      className="relative isolate overflow-hidden bg-[#050505] py-24 text-white lg:py-32"
    >
      {/* Vinheta dourada vinda do topo, na direção de arte das demais
          seções escuras. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(65% 50% at 50% 0%, rgba(197,160,89,0.13), transparent 72%)",
        }}
      />

      <div className="mx-auto max-w-container px-6 lg:px-10">
        <header className="mx-auto max-w-3xl text-center">
          <span
            aria-hidden
            className="mx-auto block h-px w-24"
            style={{
              background: `linear-gradient(to right, transparent, ${GOLD}, transparent)`,
            }}
          />
          <h2 className="mt-7 text-balance text-3xl font-light leading-tight sm:text-4xl lg:text-[2.7rem]">
            Reconhecimentos que validam nossa trajetória
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-white/70 lg:text-lg">
            Nosso compromisso com pessoas, inovação, excelência técnica e
            resultados é reconhecido por prêmios regionais, nacionais e
            internacionais.
          </p>
        </header>

        <div className="mt-16 lg:mt-20">
          {premios.map((premio, i) => (
            <article key={premio.id} className="group relative">
              {/* Fio dourado separando as placas (não antes da primeira). */}
              {i > 0 && (
                <span
                  aria-hidden
                  className="my-12 block h-px w-full lg:my-16"
                  style={{
                    background: `linear-gradient(to right, transparent, ${GOLD}55 25%, ${GOLD}55 75%, transparent)`,
                  }}
                />
              )}

              <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
                {/* Pedestal dos selos: halo dourado que acende no hover. */}
                <div className="relative flex justify-center lg:justify-start">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 opacity-60 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(50% 50% at 50% 50%, ${GOLD}33, transparent 70%)`,
                    }}
                  />
                  <div className="flex flex-wrap items-center justify-center gap-8">
                    {premio.selos.map((selo) => (
                      <Image
                        key={selo.src}
                        src={selo.src}
                        alt={selo.alt}
                        width={360}
                        height={360}
                        className="h-32 w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04] lg:h-36"
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {premio.nome}
                  </h3>
                  <p className="mt-4 max-w-2xl text-pretty text-[15px] leading-relaxed text-white/70 lg:text-base">
                    {premio.descricao}
                  </p>

                  {premio.destaques && (
                    <dl className="mt-8 grid max-w-2xl gap-6 sm:grid-cols-3">
                      {premio.destaques.map((d) => (
                        <div
                          key={d.rotulo}
                          className="border-l pl-4"
                          style={{ borderColor: `${GOLD}59` }}
                        >
                          <dt
                            className="text-2xl font-semibold leading-none"
                            style={{ color: GOLD }}
                          >
                            {d.valor}
                          </dt>
                          <dd className="mt-2 text-xs leading-snug text-white/60">
                            {d.rotulo}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
