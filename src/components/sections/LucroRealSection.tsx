import Image from "next/image";

export default function LucroRealSection() {
  return (
    <section className="bg-white">
      <div className="relative w-full">
        {/* No mobile fica em fluxo normal, acima da foto (não há fundo livre
            o bastante para sobrepor sem tampar rostos nesse recorte estreito).
            A partir de sm, vira sobreposição no topo da faixa, sobre o fundo
            liso que sobra acima do grupo (a foto tem folga de ~13% no topo). */}
        <div className="relative z-10 mx-auto flex max-w-container flex-col gap-6 px-6 pb-6 sm:absolute sm:inset-0 sm:flex-row sm:items-start sm:justify-between sm:px-10 sm:pb-0 sm:pt-[clamp(1.1rem,2vw,2.1rem)] lg:px-16">
          {/* No overlay (sm+), fonte e leading são FLUIDOS (vw) para o bloco de
              2 linhas caber sempre na faixa vazia acima das cabeças — que é
              uma fração constante da largura (~11.4vw). Com tamanho fixo em px,
              o título estourava essa faixa em telas < ~1500px, encostando no
              cabelo. O clamp mantém proporção sem ficar minúsculo/gigante. */}
          <h2 className="text-4xl font-light leading-tight text-carvao sm:text-[clamp(1.6rem,2.9vw,3.25rem)] sm:leading-[1.06]">
            Especialização
            <br />
            <span className="font-medium">em Lucro Real</span>
          </h2>
          <p className="max-w-xs text-base leading-relaxed text-carvao/70 sm:max-w-[min(20rem,26vw)] sm:text-right sm:text-[clamp(0.8rem,1.15vw,1rem)] sm:leading-[1.55]">
            Grande parte das empresas atendidas está no regime de Lucro Real,
            que exige apuração técnica, controle rigoroso, acompanhamento
            constante da legislação e consistência contábil.
          </p>
        </div>

        {/* aspect-[4/3] no mobile: caixa mais estreita que a foto (corta só as
            laterais, dentro da margem de fundo vazio ali — texto fica em
            fluxo normal acima, sem sobreposição). Do sm em diante,
            aspect-[3/2] (proporção nativa do arquivo) → zero corte em
            qualquer pessoa do grupo. Também é o que garante que o parágrafo
            (lado direito) não esbarre na cabeça de quem está mais à direita:
            essas pessoas têm menos fundo livre acima (~21-24%) do que a
            pessoa mais alta ao centro (~13%), então um corte mais agressivo
            no topo (como 16/9) cortaria justo atrás do texto sobreposto. */}
        <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[3/2]">
          <Image
            src="/lucro-real-otim.jpg"
            alt="Equipe do Grupo Charão"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
