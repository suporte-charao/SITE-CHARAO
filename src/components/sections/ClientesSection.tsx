import { Logos3, type Logo } from "@/components/ui/logos3";

/**
 * Clientes na ordem numérica dos arquivos de /public/LOGO CLIENTES.
 * O nome de cada um foi conferido abrindo arquivo por arquivo — a numeração
 * NÃO segue a ordem alfabética das marcas (13.png é a Agroam, por exemplo).
 *
 * `bleed` marca as artes que vieram com fundo colorido em vez de recortadas:
 * nelas a imagem preenche o medalhão inteiro e o círculo assume a cor da
 * marca, senão apareceria um quadrado colorido dentro do círculo branco.
 */
const clientes: Logo[] = [
  { id: "1", name: "Info Store", image: "1.png", pad: "tight" },
  { id: "2", name: "Natan Congelados", image: "2.jpg", bleed: true },
  { id: "3", name: "Queiroz", image: "3.png" },
  { id: "4", name: "CAA", image: "4.jpg", bleed: true },
  { id: "5", name: "Bonna Vitta", image: "5.jpg" },
  { id: "6", name: "Gavião", image: "6.png" },
  { id: "7", name: "Japurá Pneus", image: "7.png" },
  { id: "8", name: "Comac", image: "8.png" },
  { id: "9", name: "Conde do Pão", image: "9.jpg" },
  { id: "10", name: "Parima", image: "10.jpg", pad: "tight" },
  { id: "11", name: "Amazon Industrial", image: "11.jpg", bleed: true },
  { id: "12", name: "Lindopan", image: "12.jpg" },
  { id: "13", name: "Agroam", image: "13.png" },
  { id: "14", name: "Fennix", image: "14.png" },
  { id: "15", name: "Portal Vidros", image: "15.jpg" },
  { id: "16", name: "Rede Agro", image: "16.jpg", pad: "loose" },
  { id: "17", name: "Techfrio", image: "17.png" },
  { id: "18", name: "Globarium", image: "18.jpg", pad: "tight" },
  { id: "19", name: "Ortoclin", image: "19.jpg", bleed: true },
  { id: "20", name: "União Center", image: "20.jpg", bleed: true },
  { id: "21", name: "Potência Agrícola", image: "21.jpg" },
  { id: "22", name: "São Jorge", image: "22.jpg", bleed: true },
  { id: "23", name: "3A", image: "23.jpg", bleed: true },
];

// A pasta tem espaço no nome — precisa vir codificado na URL.
const logos: Logo[] = clientes.map((cliente) => ({
  ...cliente,
  id: `cliente-${cliente.id}`,
  image: `/LOGO%20CLIENTES/${cliente.image}`,
}));

export default function ClientesSection() {
  return (
    <section id="clientes" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-container px-6 text-center lg:px-10">
        <h2 className="text-balance text-3xl font-light text-carvao sm:text-4xl">
          Empresas que confiam no Grupo Charão
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-carvao/70 lg:text-lg">
          Indústria, distribuição, varejo e serviços escolhem o Grupo Charão
          para fortalecer a gestão, tomar decisões mais seguras e crescer com
          consistência.
        </p>
      </div>

      {/* Esteira full-bleed: os logos entram e saem pelas bordas da tela. */}
      <Logos3 logos={logos} className="mt-14 lg:mt-20" fadeFrom="from-white" />
    </section>
  );
}
