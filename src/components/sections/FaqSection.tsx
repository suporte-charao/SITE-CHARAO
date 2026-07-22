import FaqAccordion from "@/components/FaqAccordion";

const faqItems = [
  {
    question: "O que o Grupo Charão faz?",
    answer:
      "O Grupo Charão reúne soluções de gestão contábil, inteligência tributária e educação empresarial para apoiar empresas e profissionais na tomada de decisões mais seguras, eficientes e estratégicas.",
  },
  {
    question:
      "Qual empresa do Grupo Charão é mais adequada para o meu negócio?",
    answer:
      "A Charão Consultoria atua na gestão contábil, fiscal e de departamento pessoal. A Charão Tributário desenvolve soluções tributárias, revisões, recuperação de créditos e estratégias para a Reforma Tributária. A Charão Educacional oferece mentorias e cursos para empresários e contadores.",
  },
  {
    question: "Quais empresas são atendidas pela Charão?",
    answer:
      "Atendemos principalmente empresas de médio e grande porte dos setores de indústria, distribuição, varejo e serviços, considerando as particularidades de cada operação.",
  },
  {
    question: "A Charão é especializada em Lucro Real?",
    answer:
      "Sim. A Charão Consultoria possui experiência consolidada na gestão de empresas do Lucro Real, especialmente na Zona Franca de Manaus e na Área de Livre Comércio de Boa Vista.",
  },
  {
    question:
      "Como a Charão pode apoiar minha empresa na Reforma Tributária?",
    answer:
      "Analisamos os impactos sobre preços, margens, créditos, operações e competitividade, estruturando estratégias para preparar a empresa e orientar suas decisões durante o período de transição.",
  },
  {
    question: "O que é a Metodologia Charão?",
    answer:
      "É uma metodologia construída na prática que conecta pessoas especializadas, processos seguros, tecnologia e indicadores confiáveis para transformar dados em conhecimento, estratégia e resultados.",
  },
  {
    question:
      "A Charão trabalha com os sistemas utilizados pela minha empresa?",
    answer:
      "Atuamos com os principais ERPs do mercado, além de sistemas próprios e ferramentas especializadas que garantem integração, agilidade e segurança às entregas.",
  },
  {
    question: "Como saber qual solução é mais adequada para minha empresa?",
    answer:
      "Um consultor Charão analisa a realidade, os desafios e os objetivos do negócio para identificar a solução mais adequada e estruturar os próximos passos.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Coluna esquerda fixa enquanto a lista rola: com 8 perguntas, o
              título sairia de tela e o CTA ficaria órfão lá em cima. */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="text-4xl font-light text-carvao sm:text-5xl">
              Perguntas frequentes
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-carvao/60">
              Encontre respostas sobre a atuação, as soluções e a forma de
              trabalho do Grupo Charão.
            </p>

            <a
              href="https://bit.ly/eduardocomercial1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex w-fit items-center rounded-full bg-laranja-500 px-8 py-3.5 text-sm font-semibold text-marinho-950 transition-colors hover:bg-laranja-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-laranja-500"
            >
              Fale com um consultor Charão
            </a>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
