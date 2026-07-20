'use client';

import { useState } from 'react';

export function FinalCTA() {
  const [enviado, setEnviado] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#0d1117] py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#39d353]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <h2
          data-reveal
          className="text-4xl font-bold leading-tight text-white md:text-6xl"
        >
          Sua carreira em tech começa{' '}
          <span className="bg-gradient-to-r from-[#39d353] to-[#26a641] bg-clip-text text-transparent">
            hoje
          </span>
        </h2>
        <p data-reveal className="mt-6 text-lg text-gray-400">
          Deixa seu contato e receba o passo a passo da primeira turma
          disponível. Sem spam, prometido.
        </p>

        {enviado ? (
          <div className="mt-10 rounded-2xl border border-[#39d353]/40 bg-[#39d353]/10 p-8">
            <p className="text-2xl font-bold text-[#39d353]">
              ✓ Recebido!
            </p>
            <p className="mt-2 text-gray-300">
              Em breve você recebe as próximas instruções no seu e-mail.
              Bem-vindo(a) à jornada.
            </p>
          </div>
        ) : (
          <form
            data-reveal
            onSubmit={(e) => {
              e.preventDefault();
              setEnviado(true);
            }}
            className="mt-10 space-y-4 text-left"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder="Nome completo"
                aria-label="Nome completo"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white placeholder-gray-500 outline-none transition-colors focus:border-[#39d353]/60"
              />
              <input
                type="email"
                required
                placeholder="Seu melhor e-mail"
                aria-label="E-mail"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white placeholder-gray-500 outline-none transition-colors focus:border-[#39d353]/60"
              />
            </div>
            <input
              type="tel"
              placeholder="WhatsApp (opcional)"
              aria-label="WhatsApp"
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white placeholder-gray-500 outline-none transition-colors focus:border-[#39d353]/60"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-[#39d353] py-4 text-lg font-bold text-[#0a0a0f] shadow-[0_0_40px_rgba(57,211,83,0.4)] transition-shadow hover:shadow-[0_0_60px_rgba(57,211,83,0.7)]"
            >
              Quero minha vaga
            </button>
          </form>
        )}
      </div>
    </section>
  );
}