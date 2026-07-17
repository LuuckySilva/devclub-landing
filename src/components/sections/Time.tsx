import { TIME } from '@/lib/content';

export function Time() {
  return (
    <section id="time" className="section-grid relative bg-[#0a0a0f] py-28">
      <div className="mx-auto max-w-7xl px-6">
       <span
  data-reveal
  className="inline-flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-[0.25em] text-[#39d353]"
>
  <span className="h-px w-8 bg-[#39d353]" aria-hidden />
  O Time DevClub
</span>
        <h2 data-reveal className="mt-3 max-w-2xl text-4xl font-bold text-white md:text-5xl">
          Aprenda com quem constrói de verdade
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TIME.map((pessoa) => (
        <div
  data-reveal
  key={pessoa.nome}
  className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center transition-colors hover:border-[#39d353]/40"
>
              <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#39d353]/25 to-[#26a641]/10 font-mono text-xl font-bold text-[#39d353]">
                {pessoa.avatar}
              </span>
              <p className="mt-5 font-semibold text-white">{pessoa.nome}</p>
              <p className="mt-1 text-sm text-gray-500">{pessoa.papel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}