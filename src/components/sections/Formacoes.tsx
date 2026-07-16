import { FORMACOES } from '@/lib/content';

export function Formacoes() {
  return (
    <section id="formacoes" className="bg-[#0a0a0f] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <span className="font-mono text-sm text-[#39d353]">{"// formações"}</span>
        <h2 className="mt-3 max-w-2xl text-4xl font-bold text-white md:text-5xl">
          Trilhas completas, do zero ao contratado
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {FORMACOES.map((f) => (
            <article
              key={f.id}
              className={`group relative overflow-hidden rounded-2xl border p-8 transition-colors ${
                f.destaque
                  ? 'border-[#39d353]/40 bg-gradient-to-br from-[#39d353]/10 to-transparent'
                  : 'border-white/10 bg-white/[0.02] hover:border-white/25'
              }`}
            >
              {f.destaque && (
                <span className="absolute right-6 top-6 rounded-full bg-[#39d353] px-3 py-1 text-xs font-bold text-[#0a0a0f]">
                  MAIS PROCURADA
                </span>
              )}
              <h3 className="text-2xl font-bold text-white">{f.nome}</h3>
              <p className="mt-3 leading-relaxed text-gray-400">{f.descricao}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {f.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}