export function assinarConsole() {
  const arte = `

    ██████╗ ███████╗██╗   ██╗ ██████╗██╗     ██╗   ██╗██████╗
    ██╔══██╗██╔════╝██║   ██║██╔════╝██║     ██║   ██║██╔══██╗
    ██║  ██║█████╗  ██║   ██║██║     ██║     ██║   ██║██████╔╝
    ██║  ██║██╔══╝  ╚██╗ ██╔╝██║     ██║     ██║   ██║██╔══██╗
    ██████╔╝███████╗ ╚████╔╝ ╚██████╗███████╗╚██████╔╝██████╔╝
    ╚═════╝ ╚══════╝  ╚═══╝   ╚═════╝╚══════╝ ╚═════╝ ╚═════╝

`;

  const verde = 'color:#39d353; font-family: ui-monospace, monospace; font-size: 12px; line-height: 1.1;';
  const claro = 'color:#e5e7eb; font-family: ui-monospace, monospace; font-size: 12px;';
  const cinza = 'color:#6b7280; font-family: ui-monospace, monospace; font-size: 11px;';

  console.log(`%c${arte}`, verde);
  console.log('%cOlá, dev.', claro);
  console.log(
    '%cCurioso pra ver como as partículas do herói funcionam?\n' +
      'Dá uma olhada em: src/components/three/ParticleLogo.tsx',
    claro
  );
  console.log(
    '%c\nRepositório: https://github.com/LuuckySilva/devclub-landing\n' +
      'Página conceitual feita por Lucas Silva como desafio técnico.\n',
    cinza
  );
}