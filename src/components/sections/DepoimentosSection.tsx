import DepoimentoCard3D, {
  type Depoimento,
} from "@/components/ui/DepoimentoCard3D";

/**
 * Depoimentos reais de clientes. Cada um tem uma frase de destaque (a fala
 * entre aspas) e o relato que a desdobra. O logo vem da mesma pasta usada na
 * seção de clientes, logo acima — as quatro empresas estão lá.
 */
const depoimentos: Depoimento[] = [
  {
    frase: "O trabalho é essencial para atravessar a transição com segurança.",
    relato:
      "Os sócios reconheceram o comprometimento da equipe, o avanço das parametrizações e destacaram a clareza nos cenários de custo e crédito, além da importância dos encaminhamentos organizados para garantir conformidade antes do início das penalidades.",
    autor: "Sr. Anderson & Sr. Jocelino",
    cargo: "Sócios",
    empresa: "Queiroz",
    logo: "3.png",
  },
  {
    frase: "A presença e atenção da equipe Charão para dúvidas é o mais valioso.",
    relato:
      "A linguagem acessível para não-contadores, as orientações práticas sobre configuração de sistema e a explicação da lógica tributária foram os pontos mais elogiados. “Luis sempre procura a equipe quando tem dúvidas.”",
    autor: "Luis",
    cargo: "Diretor",
    empresa: "Bonna Vitta",
    logo: "5.jpg",
  },
  {
    frase: "Tá muito boa a interação, tá positiva.",
    relato:
      "A equipe destacou que a Charão está sempre atenta às novidades e que, quando houve uma inconsistência no sistema, avisou imediatamente para acionar o suporte e corrigir antes de gerar problema.",
    autor: "Maykon",
    cargo: "Gestor",
    empresa: "Gavião",
    logo: "6.png",
  },
  {
    frase:
      "A contratação foi decisiva, tanto para o sistema quanto para a contabilidade.",
    relato:
      "Larissa elogiou a preocupação da consultoria em caminhar junto com o cliente, envolvendo a equipe e explicando cada etapa. “Tudo fluiu no momento certo. A paciência com quem está aprendendo fez toda a diferença.”",
    autor: "Larissa",
    cargo: "Responsável pela implantação",
    empresa: "Parima",
    logo: "10.jpg",
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

        {/* Duas colunas: com a frase de destaque + o relato, quatro colunas
            deixariam a linha estreita demais para ler. */}
        <div className="mt-14 grid gap-7 lg:grid-cols-2 lg:gap-10">
          {depoimentos.map((item, i) => (
            <DepoimentoCard3D key={item.empresa} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
