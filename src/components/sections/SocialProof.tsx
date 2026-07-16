import { EMPRESAS } from '@/lib/content';

export function SocialProof() {
  return (
    <section className="border-y border-white/5 bg-[#0a0a0f] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center font-mono text-sm text-gray-500">
          Nossos alunos trabalham em empresas como
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {EMPRESAS.map((empresa) => (
            <span
              key={empresa}
              className="text-xl font-bold tracking-tight text-gray-600 transition-colors hover:text-gray-300"
            >
              {empresa}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}