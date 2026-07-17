import { EMPRESAS } from '@/lib/content';
import { COMPANY_META } from '@/lib/stackIcons';

export function SocialProof() {
  return (
    <section className="border-y border-white/5 bg-[#0a0a0f] py-14">
      <p className="text-center font-mono text-sm text-gray-500">
        Nossos alunos trabalham em empresas como
      </p>

      <div className="mt-9 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max animate-marquee gap-20 pr-20">
          {[...EMPRESAS, ...EMPRESAS].map((empresa, i) => {
            const meta = COMPANY_META[empresa];
            const Icon = meta?.icon;
            return (
              <span
                key={`${empresa}-${i}`}
                className="flex items-center gap-3 text-2xl font-bold tracking-tight opacity-80 transition-opacity hover:opacity-100"
                style={{ color: meta?.color ?? '#9ca3af' }}
              >
                {Icon && <Icon className="h-8 w-8" aria-hidden />}
                {empresa}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}