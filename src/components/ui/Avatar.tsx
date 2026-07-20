'use client';

import { useState } from 'react';

interface AvatarProps {
  foto?: string;
  iniciais: string;
  alt: string;
  size?: 'sm' | 'lg';
}

export function Avatar({ foto, iniciais, alt, size = 'sm' }: AvatarProps) {
  const [erro, setErro] = useState(false);

  const dim = size === 'lg' ? 'h-24 w-24 text-2xl' : 'h-12 w-12 text-sm';

  // Sem foto definida OU arquivo não encontrado → iniciais
  if (!foto || erro) {
    return (
      <span
        className={`${dim} flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#39d353]/25 to-[#26a641]/10 font-mono font-bold text-[#39d353]`}
        aria-hidden
      >
        {iniciais}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={foto}
      alt={alt}
      onError={() => setErro(true)}
      className={`${dim} shrink-0 rounded-full border border-white/10 object-cover`}
    />
  );
}