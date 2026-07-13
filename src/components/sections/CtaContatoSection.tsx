import Image from "next/image";

export default function CtaContatoSection() {
  return (
    <section id="contato" className="bg-white pb-24 pt-8 lg:pb-32">
      <div className="mx-auto max-w-container px-6 lg:px-10">
        <div className="overflow-hidden rounded-3xl bg-carvao lg:grid lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 lg:p-14">
            <h2 className="text-3xl font-light leading-tight text-white sm:text-4xl">
              Estrutura contábil, tributária e gerencial exige direção clara.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/60">
              Converse com o Grupo Charão e entenda qual frente faz mais
              sentido para o momento da sua empresa.
            </p>
            <a
              href="mailto:contato@charao.com.br"
              className="mt-9 inline-flex w-fit rounded-full bg-areia-400 px-7 py-3.5 text-sm font-medium text-carvao transition-colors hover:bg-areia-300"
            >
              Agendar diagnóstico
            </a>
          </div>
          <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:min-h-[360px]">
            <Image
              src="/021A5510.jpg"
              alt="Eduardo Charão, fundador do Grupo Charão"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
