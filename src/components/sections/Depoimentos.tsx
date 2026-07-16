import { DEPOIMENTOS } from '@/lib/content';

export function Depoimentos() {
  return (
    <section className="bg-[#0a0a0f] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <span className="font-mono text-sm text-[#39d353]">{"// histórias reais"}</span>
        <h2 className="mt-3 max-w-2xl text-4xl font-bold text-white md:text-5xl">
          Quem passou por aqui, hoje vive de código
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {DEPOIMENTOS.map((d) => (
            <figure
              key={d.nome}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-8"
            >
              <blockquote className="leading-relaxed text-gray-300">
                “{d.texto}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#39d353]/15 font-mono text-sm font-bold text-[#39d353]">
                  {d.avatar}
                </span>
                <div>
                  <p className="font-semibold text-white">{d.nome}</p>
                  <p className="text-sm text-gray-500">{d.cargo}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}