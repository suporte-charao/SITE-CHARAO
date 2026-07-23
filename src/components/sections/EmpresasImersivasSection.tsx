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
  /** Terceiro parágrafo, opcional. */
  paragraph3?: string;
  /**
   * Frentes de atuação em linha ("Gestão Contábil | Gestão Fiscal | ...").
   * Quando presente, substitui a checklist e é exibida acima do CTA.
   */
  frentes?: string[];
  /**
   * Termos-chave realçados nos parágrafos → cor. Cada termo recebe uma cor
   * distinta da paleta oficial da própria marca.
   */
  highlights?: Record<string, string>;
  /** Rótulo do CTA que levará ao subdomínio da empresa. */
  ctaLabel: string;
  /**
   * Destino do CTA. Enquanto a empresa não tiver página própria fica sem
   * destino ("#"), em vez de apontar para uma rota inexistente. Endereços
   * externos (http…) abrem em nova aba automaticamente.
   */
  ctaHref?: string;
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

/**
 * Aplica os realces coloridos aos termos-chave dentro de um parágrafo.
 * Ordena por comprimento decrescente para que um termo longo
 * ("Área de Livre Comércio de Boa Vista") vença um eventual termo curto
 * contido nele.
 */
function realcar(texto: string, highlights?: Record<string, string>) {
  if (!highlights) return texto;
  const termos = Object.keys(highlights)
    .sort((a, b) => b.length - a.length)
    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const partes = texto.split(new RegExp(`(${termos.join("|")})`, "g"));
  return partes.map((parte, i) =>
    highlights[parte] ? (
      <strong
        key={i}
        style={{ color: highlights[parte] }}
        className="font-semibold"
      >
        {parte}
      </strong>
    ) : (
      parte
    ),
  );
}

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
    subheadline: "Contabilidade que participa da gestão.",
    paragraph:
      "Atuamos na gestão contábil, fiscal e de departamento pessoal de empresas de médio e grande porte, gerando indicadores confiáveis para apoiar decisões, ampliar a previsibilidade e otimizar a carga tributária de maneira estruturada. Com isso, sua empresa ganha mais controle, segurança e clareza para conduzir a gestão.",
    paragraph2:
      "Somos especialistas em empresas do Lucro Real, com experiência consolidada na Zona Franca de Manaus e na Área de Livre Comércio de Boa Vista, compreendendo profundamente as particularidades fiscais, contábeis e operacionais da região para reduzir riscos e garantir maior eficiência às operações.",
    paragraph3:
      "Por meio da Metodologia Charão, conectamos profissionais especializados, processos seguros e tecnologia para conhecer cada negócio a fundo, acompanhar a gestão de perto e transformar dados em informações estratégicas, proporcionando decisões mais seguras e um crescimento sustentável.",
    frentes: ["Gestão Contábil", "Gestão Fiscal", "Departamento Pessoal"],
    /* Realces todos na família rosé/tan da paleta oficial da Consultoria
       (#C7A78F). Quatro matizes distintos deixavam o painel excessivamente
       colorido — mantendo uma só família e variando só a luminosidade, os
       termos continuam se destacando sem virar arco-íris.
       Contrastes sobre o fundo #0B132B: 8,2:1 e 11,4:1. */
    highlights: {
      "Lucro Real": "#DFC4AE",
      "Zona Franca de Manaus": "#C7A78F",
      "Área de Livre Comércio de Boa Vista": "#C7A78F",
      "Metodologia Charão": "#DFC4AE",
    },
    ctaLabel: "Conheça a Charão Consultoria",
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
      "Estratégia tributária para proteger resultados e ampliar a eficiência.",
    paragraph:
      "Atuamos na recuperação de créditos pagos indevidamente, na revisão de operações e no planejamento tributário estratégico, identificando riscos e oportunidades para reduzir perdas, recuperar recursos e fortalecer os resultados da empresa.",
    paragraph2:
      "Somos especialistas nos impactos e na aplicação da Reforma Tributária na Zona Franca de Manaus e na Área de Livre Comércio de Boa Vista, apoiando empresas na preparação para as novas regras e na construção de estratégias que reduzam incertezas, preservem margens e mantenham sua competitividade.",
    paragraph3:
      "Por meio da Mentoria da Reforma Tributária, analisamos os impactos sobre preços, margens e operações, orientando empresários e gestores na aplicação das mudanças ao longo dos sete anos de transição. Com base em dados reais e na realidade de cada negócio, proporcionamos mais clareza para decidir, antecipar riscos e conduzir as mudanças de forma estruturada.",
    frentes: [
      "Reforma Tributária",
      "Assessoria Fiscal, Contábil e DP",
      "Mentoria da Reforma Tributária",
    ],
    /* Verde ESCURO oficial do Tributário (#0D3731). Sobre o fundo verde do
       painel ele rende 4,5:1 e se separa nitidamente do corpo em branco —
       um verde claro ficaria indistinguível do texto. Mesma lógica de
       "uma só família de cor" adotada na Consultoria. */
    highlights: {
      "Reforma Tributária na Zona Franca de Manaus e na Área de Livre Comércio de Boa Vista":
        "#0D3731",
      "Mentoria da Reforma Tributária": "#0D3731",
    },
    ctaLabel: "Saiba mais sobre a Charão Tributário",
    ctaHref: "https://mentoria.charaoconsultoria.com/",
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
      "A experiência de 19 anos transformada em método para fortalecer negócios.",
    paragraph:
      "A Charão Educacional nasceu da convicção de que o conhecimento construído na prática precisa ser compartilhado. Por meio de mentorias e cursos, levamos a empresários de serviços, contadores e empresários contábeis a experiência acumulada em 19 anos de gestão, crescimento e resultados, contribuindo para decisões mais seguras, lideranças mais preparadas e empresas mais estruturadas.",
    paragraph2:
      "Com o Método Charão, apoiamos a estruturação de empresas a partir de indicadores que orientam decisões, uma estrutura societária bem definida, uma cultura forte e uma gestão capaz de sustentar o crescimento. Mais do que transmitir conhecimento, conduzimos sua aplicação na realidade de cada negócio para fortalecer a gestão, ampliar a clareza estratégica e transformar estratégia em resultados.",
    frentes: ["Mentorias e cursos para empresários e contadores"],
    /* Laranja PRINCIPAL oficial do Educacional (#FF7800), 6,6:1 sobre o fundo
       #1A1A1A. Um único termo realçado, uma única cor. */
    highlights: {
      "Método Charão": "#FF7800",
    },
    ctaLabel: "Conheça a Charão Educacional",
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
                  <p className="mt-3 max-w-xl text-pretty text-xl font-medium leading-snug text-white">
                    {empresa.subheadline}
                  </p>
                )}

                <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white">
                  {realcar(empresa.paragraph, empresa.highlights)}
                </p>

                {empresa.paragraph2 && (
                  <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-white">
                    {realcar(empresa.paragraph2, empresa.highlights)}
                  </p>
                )}

                {empresa.paragraph3 && (
                  <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-white">
                    {realcar(empresa.paragraph3, empresa.highlights)}
                  </p>
                )}

                {/* Frentes de atuação em linha, separadas por um filete no tom
                    de destaque (o "|" do briefing, tipografado). */}
                {empresa.frentes && (
                  <ul className="mt-8 flex max-w-xl flex-wrap items-center gap-x-4 gap-y-2">
                    {empresa.frentes.map((frente, i) => (
                      <li key={frente} className="flex items-center gap-4">
                        {i > 0 && (
                          <span
                            aria-hidden
                            style={{ backgroundColor: theme.highlight }}
                            className="h-4 w-px opacity-60"
                          />
                        )}
                        <span className="text-base font-semibold text-white">
                          {frente}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* TODO: Consultoria e Educacional ainda sem página própria —
                    preencher `ctaHref` quando os endereços existirem. */}
                <a
                  href={empresa.ctaHref ?? "#"}
                  {...(empresa.ctaHref?.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
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
                          className="flex items-start gap-2 text-sm leading-snug text-white"
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
                ) : empresa.stats ? (
                  /* Indicadores da frente */
                  <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
                    {empresa.stats.map((stat) => (
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
                ) : null}
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
