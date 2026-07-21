'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { FORMACOES } from '@/lib/content';
import { STACK_ICONS } from '@/lib/stackIcons';

type Formacao = (typeof FORMACOES)[number];

export function Formacoes() {
  const [ativo, setAtivo] = useState(0);
  const [modal, setModal] = useState<Formacao | null>(null);
  const total = FORMACOES.length;
  const trilhoRef = useRef<HTMLDivElement>(null);
  const scrollLock = useRef(false);

  const irPara = useCallback(
    (i: number) => setAtivo((i + total) % total), // wrap circular
    [total]
  );
  const anterior = useCallback(() => irPara(ativo - 1), [ativo, irPara]);
  const proximo = useCallback(() => irPara(ativo + 1), [ativo, irPara]);

  // Navegação por teclado (← →) quando o carrossel está em foco
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      anterior();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      proximo();
    }
  };

  // Scroll do mouse navega os cards (com trava pra não pular vários de vez)
  useEffect(() => {
    const el = trilhoRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // Só captura scroll predominantemente horizontal OU com shift,
      // pra não sequestrar o scroll vertical natural da página
      const horizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      if (!horizontal && !e.shiftKey) return;

      e.preventDefault();
      if (scrollLock.current) return;
      scrollLock.current = true;
      setTimeout(() => (scrollLock.current = false), 450);

      const delta = e.deltaX || e.deltaY;
      if (delta > 0) proximo();
      else anterior();
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [proximo, anterior]);

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
      </div>

      {/* ---------- Carrossel coverflow ---------- */}
      <div
        ref={trilhoRef}
        role="region"
        aria-roledescription="carrossel"
        aria-label="Formações do DevClub"
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="group relative mt-16 flex h-[440px] items-center justify-center overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-[#39d353]/50"
        style={{ perspective: '1600px' }}
      >
        {FORMACOES.map((f, i) => {
          // Distância relativa ao card ativo, no caminho circular mais curto
          let offset = i - ativo;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const abs = Math.abs(offset);
          const visivel = abs <= 1; // só centro + 2 vizinhos entram no fluxo
          const MainIcon = STACK_ICONS[f.tags[0]];
          const foco = offset === 0;

          return (
            <div
              key={f.id}
              aria-hidden={!foco}
              onClick={() => (foco ? setModal(f) : irPara(i))}
              className="absolute w-[340px] cursor-pointer transition-all duration-500 ease-out"
              style={{
                transform: `translateX(${offset * 300}px) scale(${
                  foco ? 1 : 0.82
                }) rotateY(${offset * -28}deg)`,
                opacity: visivel ? (foco ? 1 : 0.35) : 0,
                filter: foco ? 'blur(0)' : 'blur(3px)',
                zIndex: 10 - abs,
                pointerEvents: visivel ? 'auto' : 'none',
              }}
            >
              <article
                className={`relative h-[400px] overflow-hidden rounded-2xl border p-8 ${
                  foco
                    ? 'border-[#39d353]/40 bg-gradient-to-br from-[#39d353]/10 to-[#0d1117]'
                    : 'border-white/10 bg-[#0d1117]'
                }`}
              >
                <div
                  className={`relative mb-6 flex h-28 items-center justify-center rounded-xl bg-gradient-to-br ${f.gradient}`}
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
                <p className="mt-3 line-clamp-3 leading-relaxed text-gray-400">
                  {f.descricao}
                </p>

                {foco && (
                  <p className="mt-5 font-mono text-sm text-[#39d353]">
                    Ver detalhes →
                  </p>
                )}
              </article>
            </div>
          );
        })}

        {/* Setas na tela */}
        <button
          onClick={anterior}
          aria-label="Formação anterior"
          className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0a0a0f]/80 text-xl text-white backdrop-blur-sm transition-colors hover:border-[#39d353]/50 hover:text-[#39d353] md:left-10"
        >
          ‹
        </button>
        <button
          onClick={proximo}
          aria-label="Próxima formação"
          className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0a0a0f]/80 text-xl text-white backdrop-blur-sm transition-colors hover:border-[#39d353]/50 hover:text-[#39d353] md:right-10"
        >
          ›
        </button>
      </div>

      {/* Indicadores (dots) */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {FORMACOES.map((f, i) => (
          <button
            key={f.id}
            onClick={() => irPara(i)}
            aria-label={`Ir para ${f.nome}`}
            aria-current={i === ativo}
            className={`h-2 rounded-full transition-all ${
              i === ativo ? 'w-8 bg-[#39d353]' : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>


      {/* ---------- Modal (inalterado) ---------- */}
      {modal && (
        <div
          onClick={() => setModal(null)}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0d1117] p-8 md:p-10"
          >
            <div
              className={`relative mb-8 flex h-32 items-center justify-center rounded-xl bg-gradient-to-br ${modal.gradient}`}
            >
              {(() => {
                const Icon = STACK_ICONS[modal.tags[0]];
                return Icon ? (
                  <Icon className="h-16 w-16 text-white/80" aria-hidden />
                ) : null;
              })()}
              <button
                onClick={() => setModal(null)}
                aria-label="Fechar"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/70"
              >
                ✕
              </button>
            </div>

            <h3 className="text-3xl font-bold text-white">{modal.nome}</h3>

            <div className="mt-4 flex flex-wrap gap-3 font-mono text-sm">
              <span className="rounded-full border border-[#39d353]/30 bg-[#39d353]/10 px-4 py-1.5 text-[#39d353]">
                {modal.duracao}
              </span>
              <span className="rounded-full border border-white/10 px-4 py-1.5 text-gray-300">
                {modal.nivel}
              </span>
            </div>

            <p className="mt-6 leading-relaxed text-gray-400">{modal.descricao}</p>

            <h4 className="mt-8 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-[#39d353]">
              O que você vai aprender
            </h4>
            <ul className="mt-4 space-y-3">
              {modal.aprendizados.map((item) => (
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
              {modal.tags.map((tag) => {
                const Icon = STACK_ICONS[tag];
                return (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-sm text-gray-300"
                  >
                    {Icon && <Icon className="h-4 w-4 text-[#39d353]" aria-hidden />}
                    {tag}
                  </span>
                );
              })}
            </div>

            <a
              href="#seja-membro"
              onClick={() => setModal(null)}
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