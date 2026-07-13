import Image from "next/image";

const ambientes = [
  "Zona Franca de Manaus",
  "Área de Livre Comércio",
  "Indústria, comércio e serviços de médio e grande porte",
];

export default function MapaAtuacaoSection() {
  return (
    <section
      className="py-24 text-white lg:py-32"
      style={{ backgroundColor: "#04101E" }}
    >
      <div className="mx-auto max-w-container px-6 lg:px-10">
        {/* Título da seção */}
        <h2 className="mb-12 text-center text-3xl font-light leading-tight sm:text-4xl lg:mb-16 lg:text-[2.7rem]">
          Atuação consolidada na ZFM e ALC
        </h2>

        {/* Distribuição em 2 colunas (auditoria): antes o card pequeno ficava
            centralizado sozinho, com ~352px de vazio de cada lado e o texto
            empilhado abaixo. Agora o mapa fica à esquerda e a cópia à direita,
            ocupando o espaço horizontal e ligando visual + explicação. No
            mobile, empilha na ordem natural (mapa → texto). */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Card do mapa. aspect-[16/9] ≈ proporção nativa do arquivo (1.78),
              então mostra o gráfico COMPLETO — nenhum rótulo é cortado. */}
          <figure className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.8)]">
            <Image
              src="/zfm.png"
              alt="Mapa da atuação do Grupo Charão: Zona Franca de Manaus (Manaus/AM) e Áreas de Livre Comércio (Boa Vista/RR)."
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 560px, 90vw"
            />
          </figure>

          {/* Cópia de apoio */}
          <div className="lg:pl-2">
            <p className="text-pretty text-lg leading-relaxed text-white/70">
              Atendimento a empresas em{" "}
              <span className="font-medium text-white">Manaus/AM</span> e{" "}
              <span className="font-medium text-white">Boa Vista/RR</span>, com
              presença real na operação dos clientes e repertório construído a
              partir da prática em ambientes como:
            </p>

            <ul className="mt-8 space-y-4">
              {ambientes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3.5 text-[15px] leading-snug text-white/80"
                >
                  <span
                    aria-hidden
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C5A059] ring-4 ring-[#C5A059]/15"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contato"
              className="mt-10 inline-flex rounded-full bg-areia-400 px-7 py-3.5 text-sm font-medium text-carvao transition-colors hover:bg-areia-300"
            >
              Agendar conversa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
