import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { TrendingUp, Scale, GraduationCap, Check } from "lucide-react";
import BrandLockup from "@/components/BrandLockup";
import StackPanel from "@/components/StackPanel";

type Empresa = {
  id: string;
  label: string;
  /** Logo específica da frente (marca própria, não a assinatura genérica do Grupo). */
  logoSrc: string;
  /** Dimensões intrínsecas do arquivo (px) — cada marca tem uma proporção própria. */
  logoWidth: number;
  logoHeight: number;
  /** A arte da logo já inclui o nome da frente (evita duplicar o rótulo de texto). */
  logoIncludesLabel?: boolean;
  headlineLead: string;
  headlineHighlight: string;
  headlineTail: string;
  /** Linha de apoio abaixo do título principal (opcional). */
  subheadline?: string;
  paragraph: string;
  /** Segundo parágrafo, opcional. */
  paragraph2?: string;
  /** Rótulo do CTA que levará ao subdomínio da empresa. */
  ctaLabel: string;
  /** Grade de indicadores curtos. Ignorada quando `checklist` está presente. */
  stats?: { value: string; label: string }[];
  /** Quando presente, substitui a grade de indicadores por uma checklist. */
  checklist?: {
    heading: string;
    items: string[];
    closingNote?: string;
  };
  photoAlt: string;
  /** Foto real do sócio. Enquanto ausente, mostra o placeholder em degradê + ícone. */
  photoSrc?: string;
  /**
   * "cover" (padrão) preenche o card, cortando as bordas da foto.
   * "contain" mostra a foto inteira sem cortar ninguém — usado quando o
   * enquadramento já foi ajustado manualmente e precisa ser preservado.
   */
  photoFit?: "cover" | "contain";
  icon: LucideIcon;
  theme: {
    bg: string;
    eyebrow: string;
    highlight: string;
    glow: string;
    photoGradient: string;
    /** Fundo e texto do botão de CTA — combinação com contraste verificado. */
    ctaBg: string;
    ctaText: string;
  };
};

const empresas: Empresa[] = [
  {
    id: "consultoria",
    label: "Consultoria",
    logoSrc: "/logo-charao.png",
    logoWidth: 512,
    logoHeight: 256,
    headlineLead: "Charão",
    headlineHighlight: "Consultoria",
    headlineTail: "",
    subheadline: "Contabilidade especializada em Lucro Real",
    paragraph:
      "A Charão Consultoria atua na estrutura contábil da empresa com proximidade real da rotina do cliente, sustentando organização, controle, indicadores e segurança na condução das obrigações fiscais e contábeis.",
    paragraph2:
      "Mais do que executar rotinas, a atuação busca dar consistência à operação e apoiar decisões com base em informação confiável.",
    ctaLabel: "Conhecer a Consultoria",
    checklist: {
      heading: "Principais frentes de atuação",
      items: [
        "Escrituração contábil completa",
        "Apuração de tributos no regime de Lucro Real",
        "Revisão de processos contábeis",
        "Rotinas fiscais e contábeis",
        "Indicadores para apoio à gestão",
        "Acompanhamento da legislação",
      ],
      closingNote:
        "Empresas no Lucro Real exigem presença técnica, leitura constante da operação e uma contabilidade que vá além do cumprimento das obrigações.",
    },
    photoAlt: "Sócio responsável pela Charão Consultoria",
    photoSrc: "/socio-consultoria.jpg",
    icon: TrendingUp,
    theme: {
      bg: "#0B132B",
      eyebrow: "#5B84BE",
      highlight: "#5B84BE",
      glow: "#5B84BE",
      ctaBg: "#5B84BE",
      ctaText: "#071A2E",
      photoGradient:
        "linear-gradient(160deg, #1c2c4d 0%, #274b7d 55%, #0B132B 100%)",
    },
  },
  {
    id: "tributario",
    label: "Tributário",
    logoSrc: "/logo-charao-tributario.png",
    logoWidth: 1343,
    logoHeight: 426,
    logoIncludesLabel: true,
    headlineLead: "Charão",
    headlineHighlight: "Tributário",
    headlineTail: "",
    subheadline:
      "Estratégia tributária, recuperação de créditos e Reforma Tributária",
    paragraph:
      "A Charão Tributário atua com visão técnica aprofundada sobre a estrutura fiscal das empresas, com proximidade da realidade do cliente e análises voltadas à segurança das decisões, à identificação de oportunidades e à preparação para os impactos da Reforma Tributária.",
    paragraph2:
      "A atuação combina leitura técnica, respaldo legal e compreensão prática da operação para apoiar movimentos tributários com mais clareza e segurança.",
    ctaLabel: "Conhecer Mentoria",
    checklist: {
      heading: "Atuações mais recorrentes",
      items: [
        "Planejamento tributário estratégico",
        "Revisão de tributos pagos",
        "Recuperação de créditos tributários",
        "Estudos sobre a Reforma Tributária",
        "Revisão de enquadramentos fiscais",
        "Estruturação tributária para expansão ou reorganização societária",
      ],
      closingNote:
        "O foco é garantir segurança fiscal, capturar oportunidades legítimas e preparar a empresa para um ambiente tributário em transformação.",
    },
    photoAlt: "Sócia responsável pela Charão Tributário",
    photoSrc: "/021A6502.jpg",
    icon: Scale,
    theme: {
      bg: "#27AE60",
      eyebrow: "rgba(255,255,255,0.9)",
      highlight: "#E4FCEE",
      glow: "#6EE7B7",
      ctaBg: "#E4FCEE",
      ctaText: "#1B7C45",
      photoGradient:
        "linear-gradient(160deg, #35b873 0%, #1e6d45 55%, #0e3a25 100%)",
    },
  },
  {
    id: "educacional",
    label: "Educacional",
    logoSrc: "/logo-charao-educacional.png",
    logoWidth: 2387,
    logoHeight: 738,
    logoIncludesLabel: true,
    headlineLead: "Charão",
    headlineHighlight: "Educacional",
    headlineTail: "",
    subheadline:
      "Mentorias e treinamentos para empresários e contadores",
    paragraph:
      "A Charão Educacional transforma experiência prática em mentorias e treinamentos voltados ao desenvolvimento de empresários e contadores, com foco em gestão empresarial, estratégia, indicadores e tomada de decisão.",
    paragraph2:
      "A proposta é ampliar repertório, fortalecer análise e levar conhecimento aplicável à realidade de quem decide e conduz o negócio.",
    ctaLabel: "Conhecer o Educacional",
    checklist: {
      heading: "Atuações mais recorrentes",
      items: [
        "Mentorias estratégicas para empresários",
        "Treinamentos em gestão empresarial",
        "Capacitação para contadores",
        "Treinamentos para equipes financeiras e contábeis",
        "Conteúdos sobre indicadores e decisões gerenciais",
      ],
      closingNote:
        "O objetivo é transformar conhecimento em critério, leitura de cenário e capacidade real de decisão.",
    },
    stats: [
      { value: "Mentorias", label: "Acompanhamento próximo" },
      { value: "Cursos", label: "Formação prática" },
      { value: "Autoridade", label: "Posicionamento premium" },
    ],
    photoAlt: "Sócios responsáveis pela Charão Educacional",
    photoSrc: "/FOTO.png",
    photoFit: "contain",
    icon: GraduationCap,
    theme: {
      bg: "#1A1A1A",
      eyebrow: "#F2994A",
      highlight: "#F2994A",
      glow: "#F2994A",
      ctaBg: "#F2994A",
      ctaText: "#1A1A1A",
      photoGradient:
        "linear-gradient(160deg, #2c2c2c 0%, #3a2a1c 55%, #1A1A1A 100%)",
    },
  },
];

export default function EmpresasImersivasSection() {
  return (
    // Paginação vertical: cada painel trava no fim da leitura e o seguinte
    // desliza por cima, como folhas empilhadas (ver StackPanel). O wrapper
    // delimita até onde cada folha permanece presa. A última não trava —
    // nada desliza sobre ela.
    <div className="relative bg-areia-50">
      {empresas.map((empresa, index) => {
        const { theme } = empresa;
        const Icon = empresa.icon;
        const isLast = index === empresas.length - 1;

        return (
          <StackPanel
            key={empresa.id}
            id={empresa.id}
            pinned={!isLast}
            style={{ backgroundColor: theme.bg }}
            className="flex min-h-screen w-full items-center overflow-hidden rounded-t-[2.5rem] py-24 shadow-[0_-28px_60px_-20px_rgba(0,0,0,0.45)] lg:py-28"
          >
            {/* Brilho suave no tom de destaque */}
            <span
              aria-hidden
              style={{ backgroundColor: theme.glow }}
              className="pointer-events-none absolute -left-24 top-1/3 h-96 w-96 rounded-full opacity-20 blur-[120px]"
            />

            <div className="relative z-10 mx-auto grid w-full max-w-[1800px] items-start gap-12 px-6 sm:px-10 md:grid-cols-2 lg:gap-20 lg:px-16 xl:px-20 2xl:gap-28">
              {/* Coluna esquerda — narrativa */}
              <div>
                <BrandLockup
                  label={empresa.label}
                  accent={theme.eyebrow}
                  markSrc={empresa.logoSrc}
                  markWidth={empresa.logoWidth}
                  markHeight={empresa.logoHeight}
                  markIncludesLabel={empresa.logoIncludesLabel}
                />

                <h2 className="mt-8 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:mt-10 lg:text-6xl">
                  {empresa.headlineLead}{" "}
                  <span style={{ color: theme.highlight }}>
                    {empresa.headlineHighlight}
                  </span>{" "}
                  {empresa.headlineTail}
                </h2>

                {empresa.subheadline && (
                  <p className="mt-3 max-w-xl text-pretty text-xl font-medium leading-snug text-white/85">
                    {empresa.subheadline}
                  </p>
                )}

                <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/75">
                  {empresa.paragraph}
                </p>

                {empresa.paragraph2 && (
                  <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-white/75">
                    {empresa.paragraph2}
                  </p>
                )}

                {/* TODO: substituir "#" pelo link do subdomínio da empresa
                    quando estiver disponível (ex.: https://consultoria.charao.com.br) */}
                <a
                  href="#"
                  style={{
                    backgroundColor: theme.ctaBg,
                    color: theme.ctaText,
                  }}
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold shadow-lg transition-transform duration-300 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/60"
                >
                  {empresa.ctaLabel}
                </a>

                {empresa.checklist ? (
                  <div className="mt-12 max-w-xl border-t border-white/10 pt-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                      {empresa.checklist.heading}
                    </h3>
                    <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                      {empresa.checklist.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm leading-snug text-white/75"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0"
                            style={{ color: theme.highlight }}
                            strokeWidth={2.5}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {empresa.checklist.closingNote && (
                      <p className="mt-6 text-sm leading-relaxed text-white/55">
                        {empresa.checklist.closingNote}
                      </p>
                    )}
                  </div>
                ) : (
                  /* Indicadores da frente */
                  <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
                    {empresa.stats?.map((stat) => (
                      <div key={stat.value}>
                        <dt className="text-sm font-semibold text-white">
                          {stat.value}
                        </dt>
                        <dd className="mt-1 text-xs leading-snug text-white/55">
                          {stat.label}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>

              {/* Coluna direita — glass card do sócio */}
              <div className="relative">
                <figure className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.05] shadow-2xl">
                  {/* Foto do sócio (placeholder em degradê até a imagem real ser adicionada) */}
                  <div
                    role={empresa.photoSrc ? undefined : "img"}
                    aria-label={empresa.photoSrc ? undefined : empresa.photoAlt}
                    style={{
                      background: empresa.photoSrc
                        ? theme.bg
                        : theme.photoGradient,
                      // Proporção padrão dos 3 cards — igual à foto da Educacional
                      // (a única sem sobra de fundo em volta), aplicada às 3 frentes
                      // para manter o mesmo tamanho de card em todas.
                      aspectRatio: "2560 / 2469",
                    }}
                    className="relative w-full bg-cover bg-center"
                  >
                    {empresa.photoSrc ? (
                      <Image
                        src={empresa.photoSrc}
                        alt={empresa.photoAlt}
                        fill
                        quality={95}
                        className={
                          empresa.photoFit === "contain"
                            ? "object-contain"
                            : "object-cover object-center"
                        }
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    ) : (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <Icon
                          className="h-20 w-20 text-white/25"
                          strokeWidth={1.25}
                        />
                      </span>
                    )}
                    {/* Degradê escurecendo a base da foto para mesclar com o card.
                        Span cobre só a metade inferior, e o fade some por completo
                        a partir de 60% do próprio span (~30% da caixa) — fica bem
                        abaixo do rosto/pescoço, tocando só roupa/ombros. */}
                    <span
                      aria-hidden
                      style={{
                        background: `linear-gradient(to top, ${theme.bg} 10%, transparent 60%)`,
                      }}
                      className="absolute inset-x-0 bottom-0 h-1/2"
                    />
                  </div>
                </figure>
              </div>
            </div>
          </StackPanel>
        );
      })}
    </div>
  );
}
