import Image from "next/image";
import { Briefcase, Hexagon, ShoppingBag, Truck } from "lucide-react";

const ambientes = [
  "Zona Franca de Manaus",
  "Área de Livre Comércio de Boa Vista",
  "Indústria, comércio e serviços de médio e grande porte",
];

/* Verdes da faixa de setores, amostrados da arte de referência do cliente.
   Não vêm da paleta oficial: o tributario-900 (#0D3731) é mais escuro e
   puxa para o teal, enquanto a arte usa um verde-floresta mais aberto. */
const SETORES_VERDE = "#16402E";
const SETORES_LINHA = "#2C6B4E";
const SETORES_ICONE = "#4ADE80";
const SETORES_TEXTO = "#D8F5E3";

/** Ícones dos setores. Mantidos FORA da array de dados: guardar o componente
 *  lucide (um objeto forwardRef) dentro de `setores` fazia o React 19 tentar
 *  serializá-lo no payload do servidor e disparar "Only plain objects can be
 *  passed to Client Components". Na data ficam só strings; o ícone é resolvido
 *  aqui, na renderização. */
const ICONES = {
  industrias: Briefcase,
  distribuidoras: Truck,
  varejo: ShoppingBag,
  servicos: Hexagon,
} as const;

/**
 * Setores atendidos — faixa verde com 4 células, seguindo a arte de
 * referência. Refeito em HTML (e não como imagem) para o texto ficar nítido
 * em qualquer tela, ser lido por buscadores e leitores de tela, e reagir ao
 * redimensionamento: no mobile as células viram uma coluna só.
 */
const setores: { nome: string; icone: keyof typeof ICONES }[] = [
  { nome: "Indústrias", icone: "industrias" },
  { nome: "Distribuidoras", icone: "distribuidoras" },
  { nome: "Varejo", icone: "varejo" },
  { nome: "Serviços", icone: "servicos" },
];

export default function MapaAtuacaoSection() {
  return (
    // Sem padding-bottom de propósito: a faixa verde dos setores É o fim da
    // seção, encostando direto na seção seguinte.
    <section
      className="pt-24 text-white lg:pt-32"
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

          </div>
        </div>

      </div>

      {/* Setores atendidos — FORA do container, para a faixa verde atravessar
          a página de ponta a ponta, como na arte de referência. A seção não
          tem padding inferior, então esta faixa É o fim da seção. */}
      <div className="mt-16 lg:mt-20">
        <div className="mx-auto max-w-container px-6 lg:px-10">
          <h3 className="text-center text-xl font-light text-white sm:text-2xl">
            Nossa atuação abrange os setores:
          </h3>
        </div>

        {/* gap-px sobre um fundo mais claro cria os fios divisórios entre as
            células sem precisar acertar bordas célula a célula. */}
        <ul
          className="mt-8 grid grid-cols-1 gap-px sm:grid-cols-2"
          style={{ backgroundColor: SETORES_LINHA }}
        >
          {setores.map(({ nome, icone }) => {
            const Icone = ICONES[icone];
            return (
            <li
              key={nome}
              className="group relative isolate flex items-center gap-4 overflow-hidden bg-[#16402E] px-7 py-6 transition-colors duration-500 ease-out hover:bg-[#1A4C36] sm:px-10"
            >
              {/* Varredura de luz: entra pela esquerda no hover, como se a
                  célula acendesse da margem para dentro. */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 -translate-x-full bg-gradient-to-r from-[#4ADE80]/20 via-[#4ADE80]/[0.06] to-transparent transition-transform duration-[900ms] ease-out group-hover:translate-x-0"
              />

              {/* Fio vivo desenhando a base da célula, da esquerda para a
                  direita — o "sublinhado" que confirma o hover. */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#4ADE80] transition-transform duration-700 ease-out group-hover:scale-x-100"
              />

              {/* O ícone ganha uma moldura que acende e um halo verde. */}
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4ADE80]/0 ring-1 ring-[#4ADE80]/20 transition-all duration-500 ease-out group-hover:bg-[#4ADE80]/10 group-hover:ring-[#4ADE80]/70 group-hover:shadow-[0_0_24px_-4px_rgba(74,222,128,0.55)]">
                <Icone
                  className="h-5 w-5 text-[#4ADE80] transition-transform duration-500 ease-out group-hover:scale-110"
                  strokeWidth={1.75}
                />
              </span>

              <span className="text-[15px] font-semibold text-[#D8F5E3] transition-transform duration-500 ease-out group-hover:translate-x-1">
                {nome}
              </span>
            </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
