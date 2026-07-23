import Image from "next/image";

/**
 * Sessão 7 — Nossa história.
 *
 * Verde oficial da marca (tributario-900) tratado como MATERIAL, não cor
 * chapada: gradiente diagonal, formas orgânicas desfocadas, luz ambiente,
 * ruído e vinheta dão a profundidade "premium" (Apple/Stripe/Linear).
 *
 * Layout: selo à esquerda; à direita, eyebrow + headline e os DOIS parágrafos
 * lado a lado — a coluna de pilares (ícones) saiu, o que encurta a seção.
 * As frases-chave recebem o verde-lima da paleta (tributario-300), o tom que
 * a marca reserva para destaques sobre fundo escuro.
 */

/* Ouro da direção de arte (eyebrow + halo do selo). */
const GOLD = "#C5A059";

/* Ruído fractal em SVG (data URI, self-contained), aplicado a ~3,5%. */
const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function Manifesto19Section() {
  return (
    <section
      id="sobre-nos"
      className="relative isolate overflow-hidden bg-tributario-900 py-24 text-white lg:py-[120px]"
    >
      {/* ── CAMADAS DE FUNDO ─────────────────────────────────────────── */}

      {/* 1. Gradiente diagonal pelos verdes da paleta: base viva. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(150deg, #09291F 0%, #0D3731 42%, #114A3B 74%, #185C48 100%)",
        }}
      />

      {/* 2. Formas orgânicas: dois grandes halos desfocados em baixa opacidade. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-[-10%] -z-10 h-[130%] w-[55%] opacity-[0.07] blur-3xl"
        style={{
          background: "radial-gradient(closest-side, #49DE7B, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 bottom-[-15%] -z-10 h-[120%] w-[50%] opacity-[0.06] blur-3xl"
        style={{
          background: "radial-gradient(closest-side, #AAF078, transparent 70%)",
        }}
      />

      {/* 3. Luz ambiente branca discreta no centro. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[520px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
        }}
      />

      {/* 4. Iluminação radial dourada atrás do SELO (esquerda). */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[12%] top-1/2 -z-10 hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full lg:block"
        style={{
          background:
            "radial-gradient(circle, rgba(197,160,89,0.16) 0%, rgba(197,160,89,0.05) 45%, transparent 72%)",
        }}
      />

      {/* 5. Ruído finíssimo. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] mix-blend-soft-light"
        style={{ backgroundImage: NOISE, backgroundSize: "140px 140px" }}
      />

      {/* 6. Vinheta. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 130% at 50% 45%, transparent 55%, rgba(0,0,0,0.38) 100%)",
        }}
      />

      {/* ── CONTEÚDO ─────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[auto_1fr] lg:gap-24 lg:px-12">
        {/* Selo, tratado como peça premium. */}
        <div className="relative flex shrink-0 items-center justify-center">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 scale-125 rounded-full blur-2xl"
            style={{
              background:
                "radial-gradient(circle, rgba(197,160,89,0.22), transparent 68%)",
            }}
          />
          <Image
            src="/selo-19-anos.png"
            alt="Selo comemorativo 19 anos — Grupo Charão"
            width={504}
            height={495}
            className="h-auto w-56 object-contain drop-shadow-[0_18px_50px_rgba(0,0,0,0.28)] lg:w-64"
          />
        </div>

        {/* Narrativa */}
        <div>
          <span className="flex items-center gap-4">
            <span
              aria-hidden
              className="h-px w-10"
              style={{
                background: `linear-gradient(to right, transparent, ${GOLD})`,
              }}
            />
            <span
              className="text-xs font-semibold uppercase"
              style={{ color: GOLD, letterSpacing: "0.3em" }}
            >
              Nossa história
            </span>
          </span>

          <h3 className="mt-7 max-w-3xl text-balance text-[1.7rem] font-semibold leading-[1.35] text-white sm:text-[2rem]">
            Uma trajetória construída no Norte, ao lado de quem empreende.
          </h3>

          {/* Duas colunas BALANCEADAS: em vez de um grid (onde o parágrafo
              mais longo deixava a base desalinhada), o texto flui em
              multi-coluna com column-fill: balance — o navegador iguala a
              altura das duas colunas automaticamente. Os parágrafos mantêm o
              respiro entre si com margem inferior. */}
          <div className="mt-8 text-[15px] leading-[1.9] text-[#E7E3D8] md:columns-2 md:gap-12 [&>p:not(:last-child)]:mb-5">
            <p className="text-pretty">
              A história do Grupo Charão começou há 19 anos, quando{" "}
              <strong className="font-semibold text-tributario-300">
                Eduardo Charão, gaúcho de origem, escolheu a região Norte para
                construir sua trajetória empresarial
              </strong>
              . Vivendo de perto a cultura, os desafios e as oportunidades
              locais, percebeu que compreender as empresas da região exigia ir
              além dos números e da contabilidade tradicional.
            </p>
            <p className="text-pretty">
              O que começou como um sonho cresceu ao lado de clientes e
              empresários, acompanhando a evolução dos negócios, as mudanças na
              legislação e as particularidades do Norte. Hoje, essa visão se
              transformou em um ecossistema formado pela{" "}
              <strong className="font-semibold text-tributario-300">
                Charão Consultoria, Charão Tributário e Charão Educacional
              </strong>
              , unindo conhecimento técnico, tecnologia, proximidade e a
              Metodologia Charão para transformar conhecimento em estratégia,
              estratégia em resultados e resultados em crescimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
