'use client';

import { useState } from 'react';
import { FORMACOES } from '@/lib/content';
import { TiltCard } from '@/components/ui/TiltCard';
import { STACK_ICONS } from '@/lib/stackIcons';

type Formacao = (typeof FORMACOES)[number];

export function Formacoes() {
  const [selecionada, setSelecionada] = useState<Formacao | null>(null);

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
          {FORMACOES.map((f) => {
            const MainIcon = STACK_ICONS[f.tags[0]];
            return (
              <TiltCard key={f.id} data-reveal>
                <article
                  onClick={() => setSelecionada(f)}
                  className={`relative h-full cursor-pointer overflow-hidden rounded-2xl border p-8 transition-colors ${
                    f.destaque
                      ? 'border-[#39d353]/40 bg-gradient-to-br from-[#39d353]/10 to-transparent'
                      : 'border-white/10 bg-white/[0.02] group-hover:border-white/25'
                  }`}
                >
                  <div
                    className={`relative mb-6 flex h-28 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${f.gradient}`}
                  >
                    {MainIcon && (
                      <MainIcon className="h-14 w-14 text-white/80" aria-hidden />
                    )}
                  </div>

                  {f.destaque && (
                    <span className="absolute right-6 top-6 z-10 rounded-full bg-[#39d353] px-3 py-1 text-xs font-bold text-[#0a0a0f]">
                      MAIS PROCURADA
                    </span>
                  )}

                  <h3 className="text-2xl font-bold text-white">{f.nome}</h3>
                  <p className="mt-3 leading-relaxed text-gray-400">
                    {f.descricao}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {f.tags.map((tag) => {
                      const Icon = STACK_ICONS[tag];
                      return (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-sm text-gray-300"
                        >
                          {Icon && (
                            <Icon className="h-4 w-4 text-[#39d353]" aria-hidden />
                          )}
                          {tag}
                        </span>
                      );
                    })}
                  </div>

                  <p className="mt-6 font-mono text-sm text-[#39d353] opacity-0 transition-opacity group-hover:opacity-100">
                    Ver detalhes →
                  </p>
                </article>
              </TiltCard>
            );
          })}
        </div>
      </div>

      {/* ---------- Modal de detalhes ---------- */}
      {selecionada && (
        <div
          onClick={() => setSelecionada(null)}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0d1117] p-8 md:p-10"
          >
            <div
              className={`relative mb-8 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br ${selecionada.gradient}`}
            >
              {(() => {
                const Icon = STACK_ICONS[selecionada.tags[0]];
                return Icon ? (
                  <Icon className="h-16 w-16 text-white/80" aria-hidden />
                ) : null;
              })()}
              <button
                onClick={() => setSelecionada(null)}
                aria-label="Fechar"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/70"
              >
                ✕
              </button>
            </div>

            <h3 className="text-3xl font-bold text-white">{selecionada.nome}</h3>

            <div className="mt-4 flex flex-wrap gap-3 font-mono text-sm">
              <span className="rounded-full border border-[#39d353]/30 bg-[#39d353]/10 px-4 py-1.5 text-[#39d353]">
                {selecionada.duracao}
              </span>
              <span className="rounded-full border border-white/10 px-4 py-1.5 text-gray-300">
                {selecionada.nivel}
              </span>
            </div>

            <p className="mt-6 leading-relaxed text-gray-400">
              {selecionada.descricao}
            </p>

            <h4 className="mt-8 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[#39d353]">
              O que você vai aprender
            </h4>
            <ul className="mt-4 space-y-3">
              {selecionada.aprendizados.map((item) => (
                <li key={item} className="flex gap-3 text-gray-300">
                  <span className="mt-1 text-[#39d353]">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <h4 className="mt-8 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[#39d353]">
              Stacks da formação
            </h4>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {selecionada.tags.map((tag) => {
                const Icon = STACK_ICONS[tag];
                return (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-sm text-gray-300"
                  >
                    {Icon && (
                      <Icon className="h-4 w-4 text-[#39d353]" aria-hidden />
                    )}
                    {tag}
                  </span>
                );
              })}
            </div>

            <a
              href="#seja-membro"
              onClick={() => setSelecionada(null)}
              className="mt-10 inline-block w-full rounded-full bg-[#39d353] py-4 text-center font-bold text-[#0a0a0f] shadow-[0_0_30px_rgba(57,211,83,0.35)] transition-shadow hover:shadow-[0_0_45px_rgba(57,211,83,0.55)]"
            >
              Quero essa formação
            </a>
          </div>
        </div>
      )}
    </section>
  );
}