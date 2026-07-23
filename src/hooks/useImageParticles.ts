'use client';

import { useState, useEffect } from 'react';

/**
 * Carrega uma imagem, desenha num canvas offscreen e amostra os pixels
 * visíveis (alpha > threshold) para gerar posições-alvo das partículas.
 *
 * Retorna um Float32Array no formato [x, y, z, x, y, z, ...] pronto
 * para virar o atributo `position` de um THREE.BufferGeometry.
 */

interface UseImageParticlesOptions {
  /** Amostra 1 pixel a cada N (maior = menos partículas) */
  samplingStep?: number;
  /** Alpha mínimo (0-255) para o pixel virar partícula */
  threshold?: number;
  /** Escala de pixel da imagem → unidade do mundo 3D */
  scale?: number;
  /** Profundidade máxima do jitter aleatório no eixo Z */
  depthJitter?: number;
}

export function useImageParticles(
  src: string,
  {
    samplingStep = 4,
    threshold = 128,
    scale = 0.02,
    depthJitter = 0.3,
  }: UseImageParticlesOptions = {}
) {
  const [positions, setPositions] = useState<Float32Array | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      // Canvas offscreen: nunca entra no DOM, só serve pra ler pixels
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);

      // array plano [R,G,B,A, ...], 4 valores por pixel
      const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);

      const points: number[] = [];

      for (let y = 0; y < canvas.height; y += samplingStep) {
        for (let x = 0; x < canvas.width; x += samplingStep) {
          // Índice do pixel (x,y) no array plano; +3 = canal alpha
          const alpha = data[(x + y * canvas.width) * 4 + 3];

          if (alpha > threshold) {
            points.push(
              (x - canvas.width / 2) * scale,   // centraliza X
              -(y - canvas.height / 2) * scale, // centraliza e inverte Y (canvas cresce p/ baixo, mundo 3D p/ cima)
              (Math.random() - 0.5) * depthJitter // jitter em Z: dá volume
            );
          }
        }
      }

      setPositions(new Float32Array(points));
    };

    img.onerror = () => {
      console.error(`[useImageParticles] falha ao carregar: ${src}`);
    };
  }, [src, samplingStep, threshold, scale, depthJitter]);

  return positions;
}