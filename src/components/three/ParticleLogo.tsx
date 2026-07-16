'use client';

import * as THREE from 'three';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useImageParticles } from '@/hooks/useImageParticles';

// Constantes nomeadas: nada de número mágico no meio do loop
const REPULSION_RADIUS = 1.2;    // raio de ação do mouse (unidades de mundo)
const REPULSION_STRENGTH = 0.6;  // força do empurrão
const CONVERGENCE_SPEED = 0.06;  // fração do caminho percorrida por frame
const LOGO_OFFSET_X = 2.8;       // deslocamento do logo p/ direita (compensado na conta do mouse)

export function ParticleLogo() {
  const pointsRef = useRef<THREE.Points>(null);

  // Posições-ALVO: a forma do logo (o "lar" de cada partícula)
  const home = useImageParticles('/images/logo-silhouette.png', {
    samplingStep: 4,
    scale: 0.012,
  });

  // Posições INICIAIS: nuvem esférica caótica ao redor da cena
  const scattered = useMemo(() => {
    if (!home) return null;
    const arr = new Float32Array(home.length);
    for (let i = 0; i < arr.length; i += 3) {
      const r = 6 + Math.random() * 6;                 // raio 6–12
      const theta = Math.random() * Math.PI * 2;       // ângulo horizontal
      const phi = Math.acos(2 * Math.random() - 1);    // ângulo vertical (uniforme na esfera)
      arr[i]     = r * Math.sin(phi) * Math.cos(theta);
      arr[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [home]);

  useFrame((state) => {
    if (!pointsRef.current || !home) return;

    const attr = pointsRef.current.geometry.attributes.position;
    const arr = attr.array as Float32Array;

    // Mouse: coords normalizadas (-1..1) → mundo no plano z=0,
    // compensando o deslocamento do grupo de partículas
    const mx = (state.pointer.x * state.viewport.width) / 2 - LOGO_OFFSET_X;
    const my = (state.pointer.y * state.viewport.height) / 2;

    for (let i = 0; i < arr.length; i += 3) {
      // 1. Alvo padrão = posição "home"
      let tx = home[i];
      let ty = home[i + 1];
      const tz = home[i + 2];

      // 2. Se o mouse está perto do alvo, empurra o alvo pra fora
      const dx = tx - mx;
      const dy = ty - my;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < REPULSION_RADIUS && dist > 0.001) {
        const force = (1 - dist / REPULSION_RADIUS) * REPULSION_STRENGTH;
        tx += (dx / dist) * force;
        ty += (dy / dist) * force;
      }

      // 3. Persegue o alvo: anda 6% do caminho restante por frame
      arr[i]     += (tx - arr[i])     * CONVERGENCE_SPEED;
      arr[i + 1] += (ty - arr[i + 1]) * CONVERGENCE_SPEED;
      arr[i + 2] += (tz - arr[i + 2]) * CONVERGENCE_SPEED;
    }

    // Avisa a GPU que o buffer mudou — sem isso, nada se move na tela
    attr.needsUpdate = true;
  });

  if (!home || !scattered) return null;

  return (
    <Points
      ref={pointsRef}
      positions={scattered}
      stride={3}
      position={[LOGO_OFFSET_X, 0, 0]}
    >
      <PointMaterial
        transparent
        color="#39d353"
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}