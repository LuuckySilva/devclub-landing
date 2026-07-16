export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0d1117] py-32">
      {/* glow decorativo de fundo */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#39d353]/10 blur-[120px]" />

     <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 data-reveal className="text-4xl font-bold leading-tight text-white md:text-6xl">
          Sua carreira em tech começa{' '}
          <span className="bg-gradient-to-r from-[#39d353] to-[#26a641] bg-clip-text text-transparent">
            hoje
          </span>
        </h2>
        <p data-reveal className="mt-6 text-lg text-gray-400">
          Milhares já fizeram a transição. A única diferença entre você e eles
          é a decisão de começar.
        </p>
        <a
          data-reveal
          href="#formacoes"
          className="mt-10 inline-block rounded-full bg-[#39d353] px-10 py-5 text-lg font-semibold text-[#0a0a0f] shadow-[0_0_40px_rgba(57,211,83,0.4)] transition-shadow hover:shadow-[0_0_60px_rgba(57,211,83,0.7)]"
        >
          Quero minha vaga
        </a>
      </div>
    </section>
  );
}