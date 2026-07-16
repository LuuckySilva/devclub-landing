import { STATS } from '@/lib/content';

export function Stats() {
  return (
    <section className="border-y border-white/5 bg-gradient-to-b from-[#0a0a0f] to-[#0d1117] py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            {/* data-* guarda o alvo do counter — a animação GSAP lê daqui depois */}
            <p
              className="text-4xl font-bold text-[#39d353] md:text-5xl"
              data-counter={s.valor}
              data-decimal={'decimal' in s && s.decimal ? 'true' : 'false'}
            >
              {s.valor.toLocaleString('pt-BR')}
              {s.sufixo}
            </p>
            <p className="mt-2 text-sm text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}