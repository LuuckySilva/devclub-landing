'use client';

const PALAVRAS = [
  { texto: '{ código }',  top: '18%', left: '8%',   tamanho: 'text-4xl',  rotacao: -8, animacao: 'derivar-1', fonte: 'font-[family-name:var(--font-orbitron)] tracking-[0.2em] font-black' },
  { texto: '< futuro />', top: '30%', right: '10%', tamanho: 'text-5xl',  rotacao:  6, animacao: 'derivar-2', fonte: 'font-[family-name:var(--font-orbitron)] tracking-[0.15em] font-black' },
  { texto: 'function()',  top: '68%', left: '12%',  tamanho: 'text-3xl',  rotacao:  4, animacao: 'derivar-3', fonte: 'font-[family-name:var(--font-vt323)] tracking-wide' },
  { texto: 'BOOTCAMP',    top: '75%', right: '14%', tamanho: 'text-4xl',  rotacao: -5, animacao: 'derivar-4', fonte: 'font-[family-name:var(--font-orbitron)] tracking-[0.4em] font-black' },
  { texto: '.dev',        top: '55%', left: '45%',  tamanho: 'text-6xl',  rotacao:  2, animacao: 'derivar-5', fonte: 'font-[family-name:var(--font-orbitron)] tracking-[0.1em] font-black' },
] as const;

export function FloatingWords() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {PALAVRAS.map((p) => (
        <span
          key={p.texto}
          className={`absolute text-[#39d353] ${p.tamanho} opacity-[0.10] ${p.animacao} ${p.fonte}`}
          style={{
            top: p.top,
            left: 'left' in p ? p.left : undefined,
            right: 'right' in p ? p.right : undefined,
            ['--rotacao' as string]: `${p.rotacao}deg`,
          }}
        >
          {p.texto}
        </span>
      ))}
    </div>
  );
}