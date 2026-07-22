import Image from "next/image";

/**
 * Sessão 7 — Nossa história. Bloco escuro com o selo dourado dos 19 anos à
 * esquerda e, à direita, a narrativa da origem do grupo.
 *
 * Os termos-chave usam o LARANJA CLARO da Charão Educacional (laranja-300,
 * #FF9144). Escolhi o tom 300 e não o principal (#FF7800): medido sobre este
 * grafite, o 500 rende 5,47:1 e o 300 chega a 6,47:1, com a mesma leitura de
 * marca.
 * O dourado segue nos ornamentos (fio do olho, selo, arestas), que é onde ele
 * é estrutura e não texto.
 */
export default function Manifesto19Section() {
  return (
    <section
      id="sobre-nos"
      className="relative overflow-hidden bg-[#222A35] pt-24 lg:pt-36"
    >
      {/* A seção fica entre um cinza CLARO (#E5E4E2, a foto de equipe) e um
          marinho ESCURO (#04101E, a ZFM).

          O grafite ANTERIOR (#141A22) era próximo demais do marinho de baixo
          e, somado a um degradê que derretia uma seção na outra, as duas
          viravam um bloco só. Agora: um grafite claramente mais CLARO que o
          marinho, sem nenhum degradê nas bordas — a seção é um painel com
          início e fim próprios, e cada emenda é um degrau visível reforçado
          por um fio dourado. */}
      {/* Emenda de topo RETA: só um fio dourado, dissolvendo nas pontas para
          não cortar seco nas bordas da tela — igual à emenda da base. A onda
          que existia aqui saiu a pedido do cliente; ela também trazia um
          preenchimento #FAF8F5 que combinava com a faixa clara que vinha
          antes na ordem antiga e hoje não existe mais. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(197,160,89,0.9) 32%, rgba(226,197,131,0.95) 72%, transparent)",
        }}
      />

      {/* Atmosfera dourada de SEÇÃO INTEIRA (absolute inset-0, independente do
          fluxo do conteúdo) — mesma técnica da Hero, garantindo que os anéis
          nunca extrapolem os limites da section e fluam até sumir atrás das
          curvas de cima e de baixo.

          O selo muda de posição real conforme o layout: no mobile fica
          centralizado no TOPO (flex-col, badge acima do texto); no desktop
          fica à ESQUERDA, no meio da altura (lg:flex-row, badge ao lado do
          texto). Por isso há DUAS variantes de anéis, cada uma centralizada
          na posição real medida do selo naquele layout — um único ponto fixo
          não serve para os dois casos. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* Brilho ambiente dourado difuso (sem linhas/traços) — mobile */}
        <div className="absolute inset-0 lg:hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(75% 42% at 50% 21%, rgba(197,160,89,0.14), rgba(197,160,89,0.045) 50%, transparent 88%)",
            }}
          />
        </div>

        {/* Brilho ambiente dourado difuso (sem linhas/traços) — desktop.
            Cobre a largura TOTAL da seção (não fica preso ao max-w-7xl do
            conteúdo), então não sobra faixa preta sem brilho em telas largas. */}
        <div className="absolute inset-0 hidden lg:block">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(38% 80% at 15% 50%, rgba(197,160,89,0.13), rgba(197,160,89,0.04) 50%, transparent 88%)",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16 lg:px-10">
        {/* Selo grande à esquerda — os anéis agora vivem no fundo da seção
            (acima), não mais aninhados aqui. */}
        <div className="relative flex shrink-0 items-center justify-center">
          <Image
            src="/selo-19-anos.png"
            alt="Selo comemorativo 19 anos — Grupo Charão"
            width={504}
            height={495}
            className="relative z-10 h-auto w-52 object-contain drop-shadow-[0_0_60px_rgba(197,160,89,0.35)] lg:w-64"
          />
        </div>

        {/* Narrativa única (antes eram duas colunas com ícone): o texto novo
            é uma história corrida, com começo e desfecho — quebrá-la em duas
            colunas paralelas faria o leitor pular do meio para o começo. */}
        <div className="flex-1">
          <span className="flex items-center gap-4">
            <span
              aria-hidden
              className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C5A059]">
              Nossa história
            </span>
          </span>

          <h3 className="mt-6 max-w-2xl text-balance text-2xl font-light leading-[1.25] text-white sm:text-3xl">
            Uma trajetória construída no Norte, ao lado de quem empreende.
          </h3>

          <div className="mt-7 max-w-3xl space-y-5">
            <p className="text-pretty text-[15px] leading-[1.85] text-white">
              A história do Grupo Charão começou há{" "}
              <span className="font-medium text-laranja-300">19 anos</span>, quando{" "}
              <span className="font-medium text-laranja-300">Eduardo Charão</span>,
              gaúcho de origem, escolheu a região Norte para construir sua
              trajetória empresarial. Vivendo de perto a cultura, os desafios e
              as oportunidades locais, percebeu que compreender as empresas da
              região exigia ir além dos números e da contabilidade tradicional.
            </p>
            <p className="text-pretty text-[15px] leading-[1.85] text-white">
              O que começou como um sonho cresceu ao lado de clientes e
              empresários, acompanhando a evolução dos negócios, as mudanças na
              legislação e as particularidades do Norte. Hoje, essa visão se
              transformou em um ecossistema formado pela{" "}
              <span className="font-medium text-laranja-300">
                Charão Consultoria, Charão Tributário e Charão Educacional
              </span>
              , unindo conhecimento técnico, tecnologia, proximidade e a{" "}
              <span className="font-medium text-laranja-300">
                Metodologia Charão
              </span>{" "}
              para transformar conhecimento em estratégia, estratégia em
              resultados e resultados em crescimento.
            </p>
          </div>
        </div>
      </div>

      {/* Fecho da seção: uma aresta física, não um degradê. De cima para
          baixo — uma sombra que escurece a base do painel, o fio dourado
          marcando a quebra e um filete escuro logo abaixo, que faz o painel
          parecer ter espessura e "descolar" da seção seguinte. */}
      <div aria-hidden className="relative z-10 mt-16 lg:mt-20">
        <div
          className="h-10 w-full"
          style={{
            background: "linear-gradient(to bottom, transparent, #1A212A)",
          }}
        />
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(197,160,89,0.9) 28%, rgba(226,197,131,0.95) 68%, transparent)",
          }}
        />
        <div className="h-1.5 w-full bg-[#0B1119]" />
      </div>
    </section>
  );
}
