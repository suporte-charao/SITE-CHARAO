export default function VideoSection() {
  return (
    <section
      id="empresas-servicos"
      className="relative overflow-hidden bg-areia-50 py-14 lg:py-16"
    >
      {/* Atmosfera: brilho radial em tom de areia */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-[-6rem] h-[520px] w-[min(920px,90vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(200,168,144,0.22),transparent_68%)] blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-areia-700">
          <span className="h-1.5 w-1.5 rounded-full bg-areia-500" />
          O Grupo
        </span>
        <h2 className="mt-6 text-balance text-4xl font-light leading-[1.08] text-carvao sm:text-5xl lg:text-[3.4rem]">
          Conheça o <span className="font-medium text-carvao">Grupo Charão</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-carvao/60">
          Um ecossistema formado por três empresas, construído no Norte para
          integrar conhecimento, proximidade e soluções que acompanham a
          evolução de empresas e empresários.
        </p>
      </div>
    </section>
  );
}
