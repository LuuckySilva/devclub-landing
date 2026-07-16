'use client';

import { useRef } from 'react';
import { gsap } from '@/lib/gsap';

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function TiltCard({ children, className = '', ...rest }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;   // 0..1 na horizontal
    const py = (e.clientY - r.top) / r.height;   // 0..1 na vertical

    // Inclina na direção do cursor (máx. ±7 graus)
    gsap.to(el, {
      rotateY: (px - 0.5) * 14,
      rotateX: (0.5 - py) * 14,
      transformPerspective: 800,
      duration: 0.4,
      ease: 'power2.out',
    });

    // Posição do glow via CSS custom properties (lidas no ::before abaixo)
    el.style.setProperty('--glow-x', `${px * 100}%`);
    el.style.setProperty('--glow-y', `${py * 100}%`);
  };

  const handleLeave = () => {
    gsap.to(ref.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: 'power3.out',
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`group relative will-change-transform ${className}`}
      {...rest}
    >
      {/* Glow que segue o cursor — invisível até o hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(400px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(57,211,83,0.12), transparent 60%)',
        }}
      />
      {children}
    </div>
  );
}