import { TIME } from '@/lib/content';
import { Avatar } from '@/components/ui/Avatar';

export function Time() {
  return (
    <section id="sobre" className="section-grid relative bg-[#0d1117] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <span
          data-reveal
          className="inline-flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-[0.25em] text-[#39d353]"
        >
          <span className="h-px w-8 bg-[#39d353]" aria-hidden />
          O time DevClub
        </span>
        <h2
          data-reveal
          className="mt-3 max-w-2xl text-4xl font-bold text-white md:text-5xl"
        >
          Aprenda com quem constrói de verdade
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TIME.map((pessoa) => (
            <div
              data-reveal
              key={pessoa.nome}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center transition-colors hover:border-[#39d353]/40"
            >
              <div className="mx-auto">
                <Avatar
                  foto={pessoa.foto}
                  iniciais={pessoa.avatar}
                  alt={pessoa.nome}
                  size="lg"
                />
              </div>
              <p className="mt-5 text-lg font-semibold text-white">
                {pessoa.nome}
              </p>
              <p className="mt-1 font-mono text-sm text-[#39d353]">
                {pessoa.papel}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                {pessoa.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}