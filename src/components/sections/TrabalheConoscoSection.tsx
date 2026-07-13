import Image from "next/image";

/**
 * Cor do card = tom do fundo de estúdio da foto, amostrado PIXEL A PIXEL de
 * `021A5900.jpg` (não estimado): o estúdio fica estável em ~rgb(212-214) do
 * topo até ~65% da altura, depois RAMPA rápido para o chão claro, ~rgb(241)
 * a partir de ~85%. O degradê anterior voltava para o tom do topo aos 74% —
 * bem no meio dessa rampa real — criando uma descontinuidade visível
 * (o "corte" da foto pro fundo). Estes stops seguem a curva real medida.
 */
const CARD_BG =
  "linear-gradient(180deg, #DDDCDA 0%, #D9D9D7 6%, #D4D4D2 20%, #D4D4D4 55%, #D6D6D6 65%, #DCDCDC 70%, #E8E8E8 75%, #EFEFEF 80%, #F1F1F1 88%, #F1F1F1 100%)";

export default function TrabalheConoscoSection() {
  return (
    <section id="trabalhe-conosco" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-container px-6 lg:px-10">
        {/* Um único fundo em degradê para o card inteiro (texto + foto),
            então não há emenda entre as duas metades. */}
        <div
          style={{ background: CARD_BG }}
          className="overflow-hidden rounded-3xl lg:grid lg:grid-cols-2"
        >
          <div className="flex flex-col justify-center p-8 lg:p-14">
            <span className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-carvao/50">
              <span className="h-1.5 w-1.5 rounded-full bg-areia-600" />
              Carreiras
            </span>
            <h2 className="mt-6 text-balance text-4xl font-light leading-[1.08] text-carvao sm:text-5xl">
              Faça parte do{" "}
              <span className="font-medium">Grupo Charão</span>
            </h2>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-carvao/70">
              Buscamos contadores, tributaristas e profissionais de gestão que
              querem construir uma atuação técnica sólida e próxima do
              cliente. Se você quer crescer numa estrutura contábil,
              tributária e de educação empresarial em expansão, queremos te
              conhecer.
            </p>
            {/* TODO: apontar para a página de vagas quando estiver publicada. */}
            <a
              href="/trabalhe-conosco"
              className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-carvao px-8 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-carvao/60"
            >
              Ver vagas abertas
            </a>
          </div>

          <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:min-h-[480px]">
            {/* object-contain preserva a foto inteira (o retrato de corpo
                inteiro não cabe sem cortar cabeça ou pé num container tão
                largo). Como o fundo do card já casa com o estúdio da foto,
                o respiro nas laterais praticamente some; os fades abaixo só
                limpam qualquer diferença residual de pixels nas bordas. */}
            <div className="relative flex h-full w-full items-end justify-center overflow-hidden">
              <Image
                src="/021A5900.jpg"
                alt="Colaboradora do Grupo Charão"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              {/* Fades físicos: dissolvem cada borda da foto no fundo do card.
                  A foto (object-contain) fica centralizada, com ~22% de respiro
                  de cada lado. As faixas laterais usam o MESMO degradê vertical
                  do card (CARD_BG) — não uma cor plana — porque o estúdio real
                  clareia MUITO perto do chão (rgb 212→241, medido pixel a
                  pixel); uma cor plana só acertava o tom no meio da foto e
                  criava um corte visível perto da base. A opacidade horizontal
                  (fade até a foto) agora vem de uma MÁSCARA separada, então a
                  cor de cada faixa acompanha a altura real sem perder o fade. */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[32%]"
                style={{
                  background: CARD_BG,
                  WebkitMaskImage:
                    "linear-gradient(to right, black 0%, black 78%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to right, black 0%, black 78%, transparent 100%)",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[32%]"
                style={{
                  background: CARD_BG,
                  WebkitMaskImage:
                    "linear-gradient(to left, black 0%, black 78%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to left, black 0%, black 78%, transparent 100%)",
                }}
              />
              {/* Faixa inferior: tom do CHÃO do estúdio (~rgb 241), bem mais
                  claro que o meio da foto — é a maior fonte do corte antigo. */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24"
                style={{
                  background:
                    "linear-gradient(to top, #F1F1F1 0%, #F1F1F1 55%, transparent 100%)",
                }}
              />
              {/* Faixa superior: tom do topo do estúdio (~rgb 221). */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16"
                style={{
                  background:
                    "linear-gradient(to bottom, #DDDCDA 0%, #DDDCDA 45%, transparent 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
