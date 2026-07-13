import { Quote, Star } from "lucide-react";

const depoimentos = [
  {
    text: "A Charão trouxe clareza para nossa apuração no Lucro Real. Hoje temos indicadores que realmente apoiam a gestão.",
    author: "Diretor Financeiro",
    empresa: "Indústria — ZFM",
  },
  {
    text: "A assessoria tributária identificou oportunidades que não víamos. O retorno superou nossas expectativas.",
    author: "CEO",
    empresa: "Comércio — ALC",
  },
  {
    text: "As mentorias transformaram a forma como nossa equipe financeira enxerga a contabilidade como ferramenta de gestão.",
    author: "Empresário",
    empresa: "Serviços",
  },
  {
    text: "Profissionalismo, proximidade e profundidade técnica. Parceiros de verdade na operação do negócio.",
    author: "Controller",
    empresa: "Indústria",
  },
];

export default function DepoimentosSection() {
  return (
    <section id="cases" className="bg-areia-50 py-24 lg:py-32">
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <div className="text-center">
          <h2 className="text-3xl font-light text-carvao sm:text-4xl">
            Depoimentos
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-carvao/60">
            O que nossos clientes dizem sobre a parceria com o Grupo Charão.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {depoimentos.map((item) => (
            <article
              key={item.author + item.empresa}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm"
            >
              <Quote className="h-8 w-8 text-areia-400" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-areia-400 text-areia-400"
                  />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-carvao/70">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="mt-6 border-t border-carvao/5 pt-4">
                <p className="text-sm font-medium text-carvao">{item.author}</p>
                <p className="text-xs text-carvao/50">{item.empresa}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
