import Image from "next/image";
import { Briefcase, Hexagon, ShoppingBag, Truck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const ambientes = [
  "Zona Franca de Manaus",
  "Área de Livre Comércio de Boa Vista",
  "Indústria, comércio e serviços de médio e grande porte",
];

/* Paleta amostrada PIXEL A PIXEL do próprio card (zfm.png), para o texto da
   seção falar a mesma língua da arte e não destoar sobre o off-white:
   - navy do mapa (#11223E) nos títulos;
   - navy suave nos corpos;
   - âmbar dos pinos "MANAUS/AM" e "BOA VISTA/RR" nos destaques — o âmbar
     vivo do card (#E1A75D) é ilegível sobre o claro, então uso um bronze da
     MESMA família, escuro o bastante para o texto (highlights) e um âmbar
     mais aberto só nos pontos decorativos. */
const NAVY = "#11223E";
const NAVY_SOFT = "#3E4A63";
/* Destaques (Manaus/AM · Boa Vista/RR) em azul marinho da marca
   (marinho-900, #152031): um passo mais escuro e denso que o corpo, então
   sobressaem como ênfase sem sair da família navy do card. */
const MARINHO = "#152031";
const AMBER_DOT = "#C4883A";

/* Verdes da faixa de setores, agora na PALETA OFICIAL da marca — os mesmos
   tons da seção "Nossa história", para as duas áreas verdes do site
   conversarem:
     célula        tributario-900  #0D3731   (bg-[#0D3731] no JSX)
     hover         um passo acima  #124A3F   (hover:bg-[#124A3F])
     ícone/acento  tributario-500  #49DE7B
     texto         tributario-100  #E8F5E1
   Só o fio divisório vira variável, porque é o único aplicado via style. */
const SETORES_LINHA = "#1C5A4B";

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
      className="pt-24 lg:pt-32"
      style={{ backgroundColor: "#E7E1D4" }}
    >
      <div className="mx-auto max-w-container px-6 lg:px-10">
        {/* Título em navy do card, ENTRANDO por trás da máscara (cortina). */}
        <Reveal variant="mask-up" className="mb-12 lg:mb-16">
          <h2
            className="text-center text-3xl font-light leading-tight sm:text-4xl lg:text-[2.7rem]"
            style={{ color: NAVY }}
          >
            Atuação consolidada na ZFM e ALC
          </h2>
        </Reveal>

        {/* Distribuição em 2 colunas (auditoria): antes o card pequeno ficava
            centralizado sozinho, com ~352px de vazio de cada lado e o texto
            empilhado abaixo. Agora o mapa fica à esquerda e a cópia à direita,
            ocupando o espaço horizontal e ligando visual + explicação. No
            mobile, empilha na ordem natural (mapa → texto). */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Card do mapa entra por VARREDURA (wipe), como se a tela o
              abrisse; o texto chega depois, deslizando. */}
          <Reveal variant="wipe" delay={120}>
            <figure className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-[0_24px_70px_-30px_rgba(44,40,32,0.45)]">
              <Image
                src="/card%20zfm.png"
                alt="Mapa da atuação do Grupo Charão: Zona Franca de Manaus (Manaus/AM) e Áreas de Livre Comércio (Boa Vista/RR)."
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 560px, 90vw"
              />
            </figure>
          </Reveal>

          {/* Cópia de apoio */}
          <Reveal delay={260} className="lg:pl-2">
            <p
              className="text-pretty text-lg leading-relaxed"
              style={{ color: NAVY_SOFT }}
            >
              Atendimento a empresas em{" "}
              <span className="font-semibold" style={{ color: MARINHO }}>
                Manaus/AM
              </span>{" "}
              e{" "}
              <span className="font-semibold" style={{ color: MARINHO }}>
                Boa Vista/RR
              </span>
              , com presença real na operação dos clientes e repertório
              construído a partir da prática em ambientes como:
            </p>

            <ul className="mt-8 space-y-4">
              {ambientes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3.5 text-[15px] leading-snug"
                  style={{ color: NAVY_SOFT }}
                >
                  <span
                    aria-hidden
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{
                      backgroundColor: AMBER_DOT,
                      boxShadow: `0 0 0 4px ${AMBER_DOT}26`,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>

          </Reveal>
        </div>

      </div>

      {/* Setores atendidos — FORA do container, para a faixa verde atravessar
          a página de ponta a ponta, como na arte de referência. A seção não
          tem padding inferior, então esta faixa É o fim da seção. */}
      <div className="mt-16 lg:mt-20">
        <Reveal
          variant="mask-up"
          className="mx-auto max-w-container px-6 lg:px-10"
        >
          <h3
            className="text-center text-xl font-light sm:text-2xl"
            style={{ color: NAVY }}
          >
            Nossa atuação abrange os setores:
          </h3>
        </Reveal>

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
              className="group relative isolate flex items-center gap-4 overflow-hidden bg-[#0D3731] px-7 py-6 transition-colors duration-500 ease-out hover:bg-[#124A3F] sm:px-10"
            >
              {/* Varredura de luz: entra pela esquerda no hover, como se a
                  célula acendesse da margem para dentro. */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 -translate-x-full bg-gradient-to-r from-[#49DE7B]/20 via-[#49DE7B]/[0.06] to-transparent transition-transform duration-[900ms] ease-out group-hover:translate-x-0"
              />

              {/* Fio vivo desenhando a base da célula, da esquerda para a
                  direita — o "sublinhado" que confirma o hover. */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#49DE7B] transition-transform duration-700 ease-out group-hover:scale-x-100"
              />

              {/* O ícone ganha uma moldura que acende e um halo verde. */}
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#49DE7B]/0 ring-1 ring-[#49DE7B]/20 transition-all duration-500 ease-out group-hover:bg-[#49DE7B]/10 group-hover:ring-[#49DE7B]/70 group-hover:shadow-[0_0_24px_-4px_rgba(73,222,123,0.55)]">
                <Icone
                  className="h-5 w-5 text-[#49DE7B] transition-transform duration-500 ease-out group-hover:scale-110"
                  strokeWidth={1.75}
                />
              </span>

              <span className="text-[15px] font-semibold text-[#E8F5E1] transition-transform duration-500 ease-out group-hover:translate-x-1">
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
