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

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#09090b]/70 backdrop-blur-md">
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-3">
            <Image src="/images/logo-mark.png" alt="" width={36} height={36} />
            <span className="text-xl font-bold text-white">DevClub</span>
          </a>

          <div className="hidden items-center gap-10 md:flex">
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

          <div className="flex items-center gap-3">
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
        </nav>
      </header>

      <AreaAlunoModal
        aberto={modalAberto}
        onFechar={() => setModalAberto(false)}
      />
    </>
  );
}