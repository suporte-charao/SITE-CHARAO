import Reveal from "@/components/ui/Reveal";
import PiramideMontagem from "@/components/ui/PiramideMontagem";

/**
 * Sessão 5 — Metodologia Charão.
 *
 * Fundo azul marinho oficial da Charão Consultoria (#152031).
 *
 * A pirâmide é desenhada em SVG, reproduzindo a arte de referência do
 * cliente: três patamares em perspectiva isométrica, face esquerda na sombra
 * (teal escuro), face direita na luz (verde-limão) e o topo de cada patamar
 * aparecendo como um degrau em teal.
 *
 * Geometria: um corte horizontal na altura y com semilargura w vira o losango
 * (CX ± w, y) e (CX, y ± w·D). D é a profundidade aparente — 0.42 dá a mesma
 * inclinação da referência. Cada patamar é o tronco entre dois cortes, e o
 * topo de um patamar é sempre mais largo que a base do de cima: é essa
 * diferença que forma o degrau.
 */

const patamares = [
  {
    id: "pessoas",
    titulo: "Pessoas",
    atributos: "Especialistas • Engajadas • Orientadas a resultado",
    cor: "#8CD44E",
  },
  {
    id: "processos",
    titulo: "Processos",
    atributos: "Ágeis • Simples • Seguros",
    cor: "#9BDE58",
  },
  {
    id: "sistemas",
    titulo: "Sistemas",
    atributos: "Integrados • Estruturados • Baseados em boas práticas",
    cor: "#8ED14E",
  },
];

/**
 * Sistemas usados na metodologia, na ordem da arte de referência.
 * Arquivos de /public/LOGO METODOLOGIA — os nomes vieram como estavam, sem
 * renomear nada na pasta do cliente.
 *
 * `arquivo` indefinido = logo ainda não entregue: o medalhão mostra o nome em
 * texto em vez de uma imagem quebrada.
 */
const sistemas: {
  nome: string;
  arquivo?: string;
  /** Arte entregue com fundo colorido (não recortada): preenche o medalhão
   *  inteiro, e o círculo assume a cor da marca. Sem isso apareceria um
   *  quadrado colorido dentro do círculo branco. */
  fundoColorido?: boolean;
  /** Arte com fundo chapado mas FORA do quadrado (ex.: 768x432). Aqui o
   *  object-cover cortaria as laterais, então o medalhão inteiro recebe a cor
   *  do fundo da arte e a imagem entra inteira, sem corte. */
  fundo?: string;
  /** Arquivo derivado, salvo na raiz de /public em vez da pasta do cliente. */
  naRaiz?: boolean;
  /** Folga extra entre a arte e a borda. Para emblemas redondos e densos que,
   *  com o respiro padrão, pesam visualmente mais que os logos vizinhos. */
  respiroSolto?: boolean;
}[] = [
  { nome: "ContaAzul", arquivo: "Contaazul.png" },
  { nome: "Domínio", arquivo: "LOGO DOMINIO.jpg" },
  /* Arquivo derivado: o original (EAUDITORIA.png) vinha com fundo cinza
     opaco #F1F1F1, que virava um disco sujo dentro do medalhão branco.
     Tornei o fundo transparente e recortei rente ao símbolo. */
  { nome: "ë Auditoria", arquivo: "e-auditoria-limpo.png", naRaiz: true },
  { nome: "IOB", arquivo: "iob_logo_magenta_RGB_(1).png" },
  /* Arquivo derivado. O MA.png original tem 1024x1024, 1,5 MB, e o emblema
     vem sobre um fundo escuro com brilho — o que criava um disco azul
     destoando dos medalhões brancos vizinhos. Recortei o emblema pela croma
     (o azul é saturado, o fundo é cinza), deixando o fundo transparente. */
  {
    nome: "MA",
    arquivo: "ma-centralizado.png",
    naRaiz: true,
    respiroSolto: true,
  },
  { nome: "TOTVS", arquivo: "Logo_TOTVS.jpg" },
  { nome: "Auditto", arquivo: "auditto_logo.jpg", fundoColorido: true },
  { nome: "Accountfy", arquivo: "ACOUNTIFY.webp" },
  { nome: "ASIS", arquivo: "Asis.png" },
  { nome: "gestta", arquivo: "GESTTA.png", fundoColorido: true },
];

/* A pasta tem espaço no nome e um dos arquivos tem parênteses — encodo o
   caminho inteiro por segmento para a URL sair válida. */
const caminhoSistema = (arquivo: string, naRaiz?: boolean) =>
  naRaiz
    ? `/${encodeURIComponent(arquivo)}`
    : `/${encodeURIComponent("LOGO METODOLOGIA")}/${encodeURIComponent(arquivo)}`;

export default function MetodologiaSection() {
  return (
    <section
      id="metodologia"
      className="relative isolate overflow-hidden bg-marinho-900 py-24 lg:py-32"
    >
      {/* Atmosfera: brilho verde difuso, ecoando a pirâmide. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 55% at 30% 60%, rgba(73,222,123,0.12), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-container px-6 lg:px-10">
        {/* Título ENTRANDO por trás da máscara; parágrafos deslizam atrás. */}
        <Reveal variant="mask-up">
          <div className="flex items-center gap-5">
            <span
              aria-hidden
              className="h-10 w-1 rounded-full bg-tributario-300"
            />
            <h2 className="text-3xl font-semibold tracking-tight text-tributario-300 sm:text-4xl">
              Metodologia Charão
            </h2>
          </div>
        </Reveal>

        <Reveal delay={140} className="mt-7 max-w-3xl space-y-4">
          <p className="text-pretty text-base leading-relaxed text-white lg:text-lg">
            A Metodologia Charão conecta pessoas especializadas, processos ágeis
            e seguros e tecnologia aplicada à gestão. Utilizamos os melhores ERPs
            do mercado, sistemas próprios e ferramentas especializadas para
            integrar dados, processos e controles, garantindo qualidade,
            agilidade e segurança nas entregas contábeis e fiscais.
          </p>
          <p className="text-pretty text-base leading-relaxed text-white lg:text-lg">
            Assim, transformamos informações em conhecimento, estratégia e
            decisões que geram resultados consistentes.
          </p>
        </Reveal>

        {/* Diagrama: a pirâmide tem a PRÓPRIA animação de montagem + rotação
            (por isso não recebe Reveal, para não conflitar). Os patamares à
            direita entram pela DIREITA. */}
        <div className="mt-14 grid items-center gap-10 lg:mt-16 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
          <div className="mx-auto w-full max-w-[420px]">
            <PiramideMontagem />
          </div>

          <Reveal variant="slide-right" delay={160}>
            <ul className="space-y-5">
              {patamares.map((p) => (
                <li
                  key={p.id}
                  className="rounded-xl border border-white/15 bg-white/[0.03] px-7 py-6"
                >
                  <h3
                    className="text-lg font-bold tracking-tight"
                    style={{ color: p.cor }}
                  >
                    {p.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">
                    {p.atributos}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Sistemas utilizados — painel em marinho um tom acima do fundo da
            seção, com os logos em medalhões brancos, como na referência. */}
        <Reveal variant="zoom" delay={90} className="mt-16 lg:mt-20">
          <h3 className="text-center text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Sistemas utilizados para a Metodologia Charão
          </h3>

          {/* Fundo derivado do próprio marinho da seção (um véu branco de 4%),
              e não um azul fixo: assim o painel é sempre o mesmo tom do fundo,
              só um passo acima. Um hex cravado brigava com o #152031 atrás. */}
          <div className="mt-8 rounded-3xl bg-white/[0.04] px-6 py-10 ring-1 ring-white/10 sm:px-10 lg:py-14">
            <ul className="mx-auto grid max-w-4xl grid-cols-3 justify-items-center gap-6 sm:grid-cols-5 sm:gap-8">
              {sistemas.map((s) => (
                <li key={s.nome} className="flex flex-col items-center">
                  <span
                    style={s.fundo ? { backgroundColor: s.fundo } : undefined}
                    className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_10px_24px_-10px_rgba(0,0,0,0.55)] sm:h-24 sm:w-24"
                  >
                    {s.arquivo ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={caminhoSistema(s.arquivo, s.naRaiz)}
                        alt={`Logo ${s.nome}`}
                        loading="lazy"
                        className={
                          s.fundoColorido
                            ? "h-full w-full object-cover"
                            : s.fundo
                              ? "h-full w-full object-contain px-2"
                              : s.respiroSolto
                                ? "h-full w-full object-contain p-5"
                                : "h-full w-full object-contain p-4"
                        }
                      />
                    ) : (
                      <span className="px-2 text-center text-[11px] font-semibold leading-tight text-marinho-900">
                        {s.nome}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* CTA de fecho da seção → volta para "Conheça o Grupo Charão",
            onde a metodologia aparece aplicada em cada empresa. Verde da
            paleta, seguindo o acento desta seção (as demais seções também
            usam a cor da própria marca no botão). */}
        <div className="mt-14 flex justify-center lg:mt-16">
          <a
            href="#empresas-servicos"
            className="inline-flex items-center justify-center rounded-full bg-tributario-300 px-8 py-3.5 text-sm font-semibold text-marinho-950 transition-colors hover:bg-tributario-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tributario-300"
          >
            Conheça a Metodologia Charão na prática
          </a>
        </div>
      </div>
    </section>
  );
}
