'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AreaAlunoModal } from './AreaAlunoModal';

const LINKS = [
  { href: '#formacoes', label: 'Formações' },
  { href: '#historias', label: 'Histórias' },
  { href: '#sobre', label: 'Quem ensina' },
];

export function Navbar() {
  const [modalAberto, setModalAberto] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#09090b]/70 backdrop-blur-md">
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-3">
            <Image src="/images/logo-mark.png" alt="" width={36} height={36} />
            <span className="text-xl font-bold text-white">DevClub</span>
          </a>

          {/* Desktop: links no centro */}
          <div className="hidden items-center gap-10 lgflex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-base font-medium text-gray-300 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop: ações à direita */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#seja-membro"
              className="rounded-full bg-[#39d353] px-5 py-2.5 text-sm font-bold text-[#0a0a0f] shadow-[0_0_20px_rgba(57,211,83,0.35)] transition-shadow hover:shadow-[0_0_35px_rgba(57,211,83,0.55)]"
            >
              Seja membro
            </a>
            <button
              onClick={() => setModalAberto(true)}
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              Área do aluno
            </button>
          </div>

          {/* Mobile: CTA compacto + hambúrguer */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="#seja-membro"
              className="rounded-full bg-[#39d353] px-4 py-2 text-sm font-bold text-[#0a0a0f]"
            >
              Seja membro
            </a>
            <button
              onClick={() => setMenuAberto((v) => !v)}
              aria-label="Abrir menu"
              aria-expanded={menuAberto}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white"
            >
              <div className="space-y-1.5">
                <span className="block h-0.5 w-5 bg-white" />
                <span className="block h-0.5 w-5 bg-white" />
                <span className="block h-0.5 w-5 bg-white" />
              </div>
            </button>
          </div>
        </nav>

        {/* Painel mobile expansível */}
        {menuAberto && (
          <div className="border-t border-white/5 bg-[#09090b] px-6 py-4 lg:hidden">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuAberto(false)}
                className="block py-3 text-base font-medium text-gray-300"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMenuAberto(false);
                setModalAberto(true);
              }}
              className="mt-2 w-full rounded-full border border-white/15 py-3 text-sm font-semibold text-white"
            >
              Área do aluno
            </button>
          </div>
        )}
      </header>

      <AreaAlunoModal
        aberto={modalAberto}
        onFechar={() => setModalAberto(false)}
      />
    </>
  );
}