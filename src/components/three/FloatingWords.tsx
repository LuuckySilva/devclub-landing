'use client';

// Palavras "fantasma" no fundo do hero — vocabulário dev discreto
// que reforça a atmosfera sem competir com o logo.
// Cada palavra tem sua própria animação de deriva CSS.

const PALAVRAS = [
  { texto: '{ código }',  top: '15%', left: '6%',   tamanho: 'text-5xl',  rotacao: -8, animacao: 'derivar-1' },
  { texto: '< futuro />', top: '28%', right: '8%',  tamanho: 'text-6xl',  rotacao:  6, animacao: 'derivar-2' },
  { texto: 'function()',  top: '68%', left: '10%',  tamanho: 'text-4xl',  rotacao:  4, animacao: 'derivar-3' },
  { texto: 'bootcamp',    top: '75%', right: '10%', tamanho: 'text-5xl',  rotacao: -5, animacao: 'derivar-4' },
  { texto: '.dev',        top: '52%', left: '45%',  tamanho: 'text-7xl',  rotacao:  2, animacao: 'derivar-5' },
] as const;

export function FloatingWords() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {PALAVRAS.map((p) => (
        <span
          key={p.texto}
          className={`absolute font-mono font-bold text-[#39d353] opacity-[0.10] ${p.tamanho} ${p.animacao}`}
          style={{
            top: p.top,
            left: 'left' in p ? p.left : undefined,
            right: 'right' in p ? p.right : undefined,
            // rotação base passada como CSS var para a animação incorporar
            ['--rotacao' as string]: `${p.rotacao}deg`,
          }}
        >
          {p.texto}
        </span>
      ))}
    </div>
  );
}