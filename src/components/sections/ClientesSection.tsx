const logos = [
  "Empresa A",
  "Empresa B",
  "Empresa C",
  "Empresa D",
  "Empresa E",
  "Empresa F",
];

export default function ClientesSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-container px-6 text-center lg:px-10">
        <h2 className="text-3xl font-light text-carvao sm:text-4xl">
          Empresas que confiam na Charão
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((nome) => (
            <div
              key={nome}
              className="flex h-16 items-center justify-center rounded-xl border border-carvao/5 bg-areia-50/50 text-xs font-medium uppercase tracking-wider text-carvao/30"
            >
              {nome}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
