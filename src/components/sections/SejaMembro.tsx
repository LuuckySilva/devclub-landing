export function SejaMembro() {
  return (
    <section
      id="seja-membro"
      className="relative overflow-hidden border-y border-white/5 bg-[#0a0a0f] py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#39d353]/[0.06] blur-[110px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span
          data-reveal
          className="inline-flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-[0.25em] text-[#39d353]"
        >
          <span className="h-px w-8 bg-[#39d353]" aria-hidden />
          Comunidade
        </span>

        <h2
          data-reveal
          className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl"
        >
          Faça parte da maior comunidade dev do Brasil
        </h2>

        <p data-reveal className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
          Networking com milhares de devs, revisão de código, lives semanais e
          suporte humano de verdade. Você não estuda sozinho — você entra pra
          um clube.
        </p>

        <div
          data-reveal
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#formacoes"
            className="rounded-full bg-[#39d353] px-8 py-4 font-bold text-[#0a0a0f] shadow-[0_0_30px_rgba(57,211,83,0.4)] transition-shadow hover:shadow-[0_0_50px_rgba(57,211,83,0.6)]"
          >
            Quero ser membro
          </a>
          <a
            href="#historias"
            className="rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/5"
          >
            Ver histórias de alunos
          </a>
        </div>
      </div>
    </section>
  );
}