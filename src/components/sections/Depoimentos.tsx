import { DEPOIMENTOS } from '@/lib/content';
import { Avatar } from '@/components/ui/Avatar';

export function Depoimentos() {
  return (
    <section id="historias" className="relative bg-[#0a0a0f] pt-28 pb-16">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#39d353]/[0.04] blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6">
        <span
          data-reveal
          className="inline-flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-[0.25em] text-[#39d353]"
        >
          <span className="h-px w-8 bg-[#39d353]" aria-hidden />
          Histórias reais
        </span>
        <h2
          data-reveal
          className="mt-3 max-w-2xl text-4xl font-bold text-white md:text-5xl"
        >
          Quem passou por aqui, hoje vive de código
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DEPOIMENTOS.map((d) => (
            <figure
              data-reveal
              key={d.nome}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-[#39d353]/30"
            >
              <div className="flex items-center gap-4">
                <Avatar foto={d.foto} iniciais={d.avatar} alt={d.nome} />
                <div>
                  <p className="font-semibold text-white">{d.nome}</p>
                  <p className="font-mono text-xs text-gray-500">{d.tempo}</p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 font-mono text-xs">
                <span className="rounded-full border border-white/10 px-3 py-1 text-gray-400">
                  {d.antes}
                </span>
                <span className="text-[#39d353]">→</span>
                <span className="rounded-full border border-[#39d353]/30 bg-[#39d353]/10 px-3 py-1 text-[#39d353]">
                  {d.hoje}
                </span>
              </div>

              <blockquote className="mt-5 flex-1 leading-relaxed text-gray-300">
                “{d.texto}”
              </blockquote>

              <figcaption className="mt-5 border-t border-white/5 pt-4 font-mono text-xs text-gray-500">
                Hoje em uma {d.empresa}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}