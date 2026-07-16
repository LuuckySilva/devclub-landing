import { EMPRESAS } from '@/lib/content';

export function SocialProof() {
  return (
    <section className="border-y border-white/5 bg-[#0a0a0f] py-12">
      <p className="text-center font-mono text-sm text-gray-500">
        Nossos alunos trabalham em empresas como
      </p>

      {/* Máscara: esconde as bordas do loop */}
      <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        {/* Lista DUPLICADA: quando a 1ª metade sai da tela (-50%), 
            a 2ª está exatamente onde a 1ª começou — loop invisível */}
        <div className="flex w-max animate-marquee gap-16 pr-16">
          {[...EMPRESAS, ...EMPRESAS].map((empresa, i) => (
            <span
              key={`${empresa}-${i}`}
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