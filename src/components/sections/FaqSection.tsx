import FaqAccordion from "@/components/FaqAccordion";

const faqItems = [
  {
    question: "Minha empresa é obrigada a estar no Lucro Real?",
    answer:
      "Depende do faturamento, da atividade e de outros critérios legais. Avaliamos o enquadramento atual e as alternativas com base na operação real da empresa.",
  },
  {
    question: "A Charão atende apenas empresas da ZFM?",
    answer:
      "Não. Temos atuação consolidada na ZFM e na ALC, mas atendemos empresas de diferentes regiões que operam no Lucro Real ou buscam estrutura contábil e tributária de maior exigência.",
  },
  {
    question: "Vocês substituem meu contador?",
    answer:
      "Não necessariamente. Atuamos como parceiros estratégicos — podemos complementar a estrutura existente ou assumir a contabilidade completa, conforme a necessidade.",
  },
  {
    question: "Como funciona a recuperação tributária?",
    answer:
      "Realizamos estudos técnicos para identificar créditos e oportunidades de recuperação, sempre com base na legislação vigente e na documentação da empresa.",
  },
  {
    question: "Lucro Real é mais arriscado?",
    answer:
      "Exige mais controle e apuração técnica, mas com a estrutura certa oferece previsibilidade e segurança. Nosso papel é construir essa base junto com o cliente.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-4xl font-light text-carvao sm:text-5xl">
              Perguntas Frequentes
            </h2>
            <p className="mt-5 text-base text-carvao/60">
              Respostas diretas sobre nossa atuação, regime tributário e como
              podemos apoiar sua empresa.
            </p>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
