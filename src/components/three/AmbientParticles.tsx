'use client';

import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

interface AmbientParticlesProps {
  count?: number;
}

/**
 * Campo de partículas em movimento — efeito hyperjump / viagem estelar.
 * As partículas viajam em Z na direção da câmera, resetando quando passam
 * dela para criar um fluxo contínuo. Fica atrás do logo principal.
 */
export function AmbientParticles({ count = 450 }: AmbientParticlesProps) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // distribuição determinística — evita divergência de hidratação
      const seed = i * 0.618;
      arr[i * 3]     = ((seed * 13.7) % 28) - 14;  // x em [-14, 14]
      arr[i * 3 + 1] = ((seed * 7.3) % 16) - 8;    // y em [-8, 8]
      arr[i * 3 + 2] = ((seed * 4.1) % 28) - 20;   // z em [-20, 8]
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current) return;

    const attr = ref.current.geometry.attributes.position;
    const arr = attr.array as Float32Array;
    const avanco = delta * 4; // velocidade do "hyperjump"

    for (let i = 2; i < arr.length; i += 3) {
      // avança em direção à câmera (posição z=8)
      arr[i] += avanco;

      // ao passar da câmera, reseta lá longe pra criar loop contínuo
      if (arr[i] > 8) {
        arr[i] = -20;
        // reposiciona X e Y aleatoriamente pra não repetir a mesma trilha
        arr[i - 2] = (Math.random() - 0.5) * 28;
        arr[i - 1] = (Math.random() - 0.5) * 16;
      }
    }

    attr.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#39d353"
        size={0.05}
        sizeAttenuation
        opacity={0.55}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}