import { FORMACOES } from '@/lib/content';
import { TiltCard } from '@/components/ui/TiltCard';
import { STACK_ICONS } from '@/lib/stackIcons';

export function Formacoes() {
  return (
    <section id="formacoes" className="section-grid relative bg-[#0a0a0f] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <span
  data-reveal
  className="inline-flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-[0.25em] text-[#39d353]"
>
  <span className="h-px w-8 bg-[#39d353]" aria-hidden />
  Formações
</span>
        <h2
          data-reveal
          className="mt-3 max-w-2xl text-4xl font-bold text-white md:text-5xl"
        >
          Trilhas completas, do zero ao contratado
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FORMACOES.map((f) => (
            <TiltCard key={f.id} data-reveal>
              <article
                className={`relative h-full overflow-hidden rounded-2xl border p-8 transition-colors ${
                  f.destaque
                    ? 'border-[#39d353]/40 bg-gradient-to-br from-[#39d353]/10 to-transparent'
                    : 'border-white/10 bg-white/[0.02] group-hover:border-white/25'
                }`}
              >
                {f.destaque && (
                  <span className="absolute right-6 top-6 rounded-full bg-[#39d353] px-3 py-1 text-xs font-bold text-[#0a0a0f]">
                    MAIS PROCURADA
                  </span>
                )}
                <h3 className="text-2xl font-bold text-white">{f.nome}</h3>
                <p className="mt-3 leading-relaxed text-gray-400">
                  {f.descricao}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
  {f.tags.map((tag) => {
    const Icon = STACK_ICONS[tag];
    return (
      <span
        key={tag}
        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-gray-400"
      >
        {Icon && <Icon className="h-3.5 w-3.5 text-[#39d353]" aria-hidden />}
        {tag}
      </span>
    );
  })}
                </div>
              </article>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}