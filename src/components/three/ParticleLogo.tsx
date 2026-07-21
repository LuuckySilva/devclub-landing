'use client';

import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useImageParticles } from '@/hooks/useImageParticles';

// Constantes nomeadas: nada de número mágico no meio do loop
const REPULSION_RADIUS = 1.2;    // raio de ação do mouse (unidades de mundo)
const REPULSION_STRENGTH = 0.6;  // força do empurrão
const CONVERGENCE_SPEED = 0.06;  // fração do caminho percorrida por frame
const LOGO_OFFSET_X = 0;         // centralizado horizontalmente

interface ParticleLogoProps {
  samplingStep?: number;
  compact?: boolean;
}

export function ParticleLogo({ samplingStep = 4, compact = false }: ParticleLogoProps) {
  const pointsRef = useRef<THREE.Points>(null);

  // Posições-ALVO: a forma do logo (o "lar" de cada partícula).
  // No mobile (compact), logo menor pra caber na viewport estreita.
  const home = useImageParticles('/images/logo-silhouette.png', {
    samplingStep,
    scale: compact ? 0.008 : 0.010,
  });

  // Offset vertical: no mobile o logo desce (fica mais centralizado
  // com o texto); no desktop sobe pro centro-topo
  const offsetY = compact ? 0.3 : 0.8;

  // Posições INICIAIS: nuvem esférica caótica (determinística p/ evitar
  // mismatch de hidratação — sem Math.random no primeiro paint)
  const scattered = useMemo(() => {
    if (!home) return null;

    const arr = new Float32Array(home.length);
    for (let i = 0; i < arr.length; i += 3) {
      const seed = (i / 3) % 17;
      const r = 6 + (seed % 7) * 0.8;
      const theta = (seed / 17) * Math.PI * 2;
      const phi = Math.acos(2 * (seed / 16) - 1);
      arr[i] = r * Math.sin(phi) * Math.cos(theta);
      arr[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i + 2] = r * Math.cos(phi);
    }

    return arr;
  }, [home]);

  useFrame((state) => {
    if (!pointsRef.current || !home) return;

    const attr = pointsRef.current.geometry.attributes.position;
    const arr = attr.array as Float32Array;

    // Mouse: coords normalizadas (-1..1) → mundo, compensando o offset do grupo
    const mx = (state.pointer.x * state.viewport.width) / 2 - LOGO_OFFSET_X;
    const my = (state.pointer.y * state.viewport.height) / 2 - offsetY;

    for (let i = 0; i < arr.length; i += 3) {
      let tx = home[i];
      let ty = home[i + 1];
      const tz = home[i + 2];

      const dx = tx - mx;
      const dy = ty - my;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < REPULSION_RADIUS && dist > 0.001) {
        const force = (1 - dist / REPULSION_RADIUS) * REPULSION_STRENGTH;
        tx += (dx / dist) * force;
        ty += (dy / dist) * force;
      }

      arr[i]     += (tx - arr[i])     * CONVERGENCE_SPEED;
      arr[i + 1] += (ty - arr[i + 1]) * CONVERGENCE_SPEED;
      arr[i + 2] += (tz - arr[i + 2]) * CONVERGENCE_SPEED;
    }

    attr.needsUpdate = true;
  });

  if (!home || !scattered) return null;

  return (
    <Points
      ref={pointsRef}
      positions={scattered}
      stride={3}
      position={[LOGO_OFFSET_X, offsetY, 0]}
    >
      <PointMaterial
        transparent
        color="#39d353"
        size={compact ? 0.045 : 0.035}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}