import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function CtaContatoSection() {
  return (
    <section id="contato" className="bg-white pb-24 pt-8 lg:pb-32">
      {/* O card escuro é REVELADO por varredura lateral (wipe) — a entrada
          mais teatral fica para o convite final da página. */}
      <Reveal variant="wipe" className="mx-auto max-w-container px-6 lg:px-10">
        <div className="overflow-hidden rounded-3xl bg-carvao lg:grid lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 lg:p-14">
            <h2 className="text-balance text-3xl font-light leading-tight text-white sm:text-4xl">
              Transforme desafios em decisões mais estratégicas
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-white/70">
              Cada empresa possui uma realidade, uma estrutura e objetivos
              específicos. Conheça as empresas que formam o Grupo Charão e
              descubra quais soluções contábeis, tributárias e empresariais
              podem gerar mais segurança, eficiência e crescimento para o seu
              negócio.
            </p>
            <a
              href="#empresas-servicos"
              className="mt-9 inline-flex w-fit rounded-full bg-tributario-500 px-8 py-3.5 text-sm font-semibold text-tributario-900 transition-colors hover:bg-tributario-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tributario-500"
            >
              Conheça o Grupo Charão
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
      </Reveal>
    </section>
  );
}
