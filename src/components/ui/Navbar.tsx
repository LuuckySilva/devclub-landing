import Image from 'next/image';

const LINKS = [
  { href: '#formacoes', label: 'Formações' },
  { href: '#historias', label: 'Histórias' },
  { href: '#sobre', label: 'Quem ensina' },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#09090b]/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2.5">
          <Image src="/images/logo-mark.png" alt="" width={30} height={30} />
          <span className="text-lg font-bold text-white">DevClub</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#area-do-aluno"
          className="rounded-full border border-[#39d353]/40 bg-[#39d353]/10 px-5 py-2 text-sm font-semibold text-[#39d353] transition-colors hover:bg-[#39d353]/20"
        >
          Área do aluno
        </a>
      </nav>
    </header>
  );
}