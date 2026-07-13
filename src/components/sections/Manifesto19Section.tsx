import Image from "next/image";
import { UserRound, BarChart3 } from "lucide-react";

/**
 * Manifesto 19 Anos — bloco escuro após a faixa clara. Selo dourado grande à
 * esquerda; à direita, duas colunas com ícone + título + história, separadas
 * por uma divisória vertical sutil (como no layout aprovado).
 */
export default function Manifesto19Section() {
  return (
    <section
      id="sobre-nos"
      className="relative overflow-hidden bg-[#050505] pt-24 lg:pt-36"
    >
      {/* Curva de topo AGORA pertence a esta seção (não mais à faixa clara
          anterior). Preenche SÓ a forma da onda (topo reto, base ondulada) —
          diferente das outras curvas do site, NÃO fecha num retângulo até o
          fim. Assim a área abaixo da onda fica transparente e a atmosfera
          dourada (z-0, logo abaixo) aparece imediatamente, sem o corte preto
          que existia quando o retângulo sólido da seção anterior cobria essa
          área sem nenhum fio dourado. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-[5]"
      >
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          className="block h-[74px] w-full md:h-[140px]"
        >
          <defs>
            <linearGradient id="manifesto19-curve-gold" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#C5A059" stopOpacity="0" />
              <stop offset="0.32" stopColor="#e2c583" stopOpacity="0.95" />
              <stop offset="0.72" stopColor="#C5A059" stopOpacity="0.9" />
              <stop offset="1" stopColor="#C5A059" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 L1440,0 L1440,70 C1000,26 620,124 0,124 Z"
            fill="#FAF8F5"
          />
          <path
            d="M0,124 C620,124 1000,26 1440,70"
            fill="none"
            stroke="url(#manifesto19-curve-gold)"
            strokeWidth="2.5"
          />
        </svg>
      </div>

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
        {/* Variante MOBILE: selo centralizado no topo (~50%, ~21%). Máscara
            radial ao redor do selo, extinguindo antes do texto abaixo. O
            brilho ambiente (sem máscara) é mais amplo que os anéis/linhas,
            para que o preto ao redor não fique "vazio" — só um leve calor
            dourado difuso, sem formar linhas sob o texto. */}
        <div className="absolute inset-0 lg:hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(75% 42% at 50% 21%, rgba(197,160,89,0.14), rgba(197,160,89,0.045) 50%, transparent 88%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              WebkitMaskImage:
                "radial-gradient(60% 34% at 50% 21%, black 45%, transparent 82%)",
              maskImage:
                "radial-gradient(60% 34% at 50% 21%, black 45%, transparent 82%)",
            }}
          >
            {[
              { size: 620, opacity: 0.4, w: "1.5px" },
              { size: 480, opacity: 0.32, w: "1.25px" },
              { size: 350, opacity: 0.24, w: "1px" },
            ].map((ring) => (
              <div
                key={ring.size}
                className="absolute rounded-full"
                style={{
                  left: `calc(50% - ${ring.size / 2}px)`,
                  top: `calc(21% - ${ring.size / 2}px)`,
                  height: ring.size,
                  width: ring.size,
                  border: `${ring.w} solid rgba(197,160,89,${ring.opacity})`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Variante DESKTOP: selo à esquerda, no meio da altura.

            O BRILHO AMBIENTE (glow difuso, sem linhas) fica FORA do wrapper
            max-w-7xl — cobre a largura TOTAL da seção. Ele estava antes
            aninhado dentro do max-w-7xl (mesmo container do selo, para
            alinhamento preciso), mas em monitores largos esse container fica
            centralizado com margem (ex.: 313px de vão em 1920px de largura),
            e como o glow só existia DENTRO dele, sobrava uma faixa sólida
            preta sem nenhum brilho antes do selo — o "corte" na lateral. Um
            glow difuso não precisa de alinhamento pixel-perfeito (ele é
            suave), então cobrir a seção inteira resolve sem reintroduzir o
            problema de desalinhamento em telas largas.

            Os TRAÇOS FINOS dos anéis (que SIM precisam de alinhamento
            preciso com o selo) continuam aninhados no wrapper max-w-7xl,
            exatamente como antes. Máscara horizontal, extinguindo antes do
            texto. */}
        <div className="absolute inset-0 hidden lg:block">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(38% 80% at 15% 50%, rgba(197,160,89,0.13), rgba(197,160,89,0.04) 50%, transparent 88%)",
            }}
          />
          <div className="relative mx-auto h-full max-w-7xl px-10">
            <div
              className="absolute inset-0"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, black 16%, transparent 27%)",
                maskImage:
                  "linear-gradient(to right, black 16%, transparent 27%)",
              }}
            >
              {[
                { size: 780, opacity: 0.4, w: "1.5px" },
                { size: 600, opacity: 0.32, w: "1.25px" },
                { size: 440, opacity: 0.24, w: "1px" },
                { size: 300, opacity: 0.16, w: "1px" },
              ].map((ring) => (
                <div
                  key={ring.size}
                  className="absolute rounded-full"
                  style={{
                    left: `calc(13% - ${ring.size / 2}px)`,
                    top: `calc(57% - ${ring.size / 2}px)`,
                    height: ring.size,
                    width: ring.size,
                    border: `${ring.w} solid rgba(197,160,89,${ring.opacity})`,
                  }}
                />
              ))}
            </div>
          </div>
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

        {/* Duas colunas com ícone + título + história, divisória vertical */}
        <div className="grid flex-1 grid-cols-1 gap-10 md:grid-cols-2 md:gap-0">
          <div className="md:pr-10">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C5A059]/50 text-[#C5A059]">
                <UserRound className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="text-lg font-medium leading-snug text-white">
                Uma trajetória construída
                <br className="hidden md:block" /> com propósito e resultado.
              </h3>
            </div>
            <p className="mt-6 text-pretty text-[13px] leading-[1.8] text-gray-400">
              Ao longo de{" "}
              <span className="font-medium text-[#C5A059]">
                19 anos de atuação
              </span>{" "}
              na região Norte, o Grupo Charão foi sendo construído a partir da
              experiência direta com empresários, da vivência em ambientes de
              maior exigência contábil e tributária e do acompanhamento próximo
              da realidade de quem decide o negócio no dia a dia.
            </p>
          </div>

          <div className="md:border-l md:border-white/10 md:pl-10">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C5A059]/50 text-[#C5A059]">
                <BarChart3 className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="text-lg font-medium leading-snug text-white">
                Profundidade técnica.
                <br className="hidden md:block" /> Visão estratégica. Decisão.
              </h3>
            </div>
            <p className="mt-6 text-pretty text-[13px] leading-[1.8] text-gray-400">
              Essa trajetória consolidou uma forma de trabalho marcada por
              profundidade técnica, proximidade com o cliente e visão
              estratégica sobre números, estrutura e decisão.
            </p>
            <p className="mt-4 text-pretty text-[13px] leading-[1.8] text-gray-400">
              Mais do que reunir empresas sob uma mesma marca, o grupo reflete
              uma história construída na prática, diante de demandas reais do
              ambiente empresarial.
            </p>
          </div>
        </div>
      </div>

      {/* Transição RETA para a foto da equipe: um fio dourado fino marca a
          emenda, sem curva. O fill do fio dissolve nas pontas para não cortar
          seco nas bordas da tela. */}
      <div
        aria-hidden
        className="relative z-10 mt-16 h-px w-full lg:mt-20"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(197,160,89,0.9) 28%, rgba(226,197,131,0.95) 68%, transparent)",
        }}
      />
    </section>
  );
}
