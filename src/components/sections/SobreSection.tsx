import Image from "next/image";

/**
 * A "estrutura de cores" do Figma: o bloco da foto usa EXATAMENTE a cor do
 * fundo do estúdio da foto (021A6543 — amostrada em ~#E5E4E2, um cinza quente
 * claro). Como as duas cores são iguais, a foto se funde na seção sem precisar
 * de NENHUM blend mode, máscara, degradê ou overlay.
 *
 * A faixa branca de textos foi removida — a história agora é lida na seção
 * escura do Manifesto 19 Anos, logo acima desta.
 */
const STUDIO_BG = "#E5E4E2";

export default function SobreSection() {
  return (
    <section
      className="relative w-full overflow-hidden pt-10 lg:pt-0"
      style={{ backgroundColor: STUDIO_BG }}
    >
      <h2 className="mx-auto mb-8 max-w-4xl text-balance px-6 text-center text-[1.6rem] font-light leading-[1.15] tracking-tight text-[#1E293B] md:text-[2.2rem] lg:absolute lg:inset-x-0 lg:top-[3.2vw] lg:z-10 lg:mb-0 lg:max-w-5xl lg:text-[clamp(1.6rem,2.56vw,2.7rem)] lg:leading-[1.1]">
        Uma trajetória marcada por{" "}
        <span className="font-normal">profundidade técnica</span> e{" "}
        <span className="font-normal">visão estratégica</span>
      </h2>

      {/* Corte seco na altura das coxas: aspect-ratio mais largo que a foto
          recorta a base via object-cover + object-top. Sem blend mode — o
          fundo do estúdio já é a cor da seção. */}
      <div className="relative aspect-[200/100] w-full overflow-hidden lg:aspect-[200/87]">
        <Image
          src="/equipe-socios-otim.jpg"
          alt="Equipe de sócios do Grupo Charão"
          fill
          priority={false}
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
