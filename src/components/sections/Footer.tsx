import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0f] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo-mark.png"
            alt="DevClub"
            width={32}
            height={32}
          />
          <span className="font-bold text-white">DevClub</span>
        </div>
        <p className="text-sm text-gray-600">
          © 2026 DevClub. Página conceitual — desafio técnico por Lucas Silva.
        </p>
      </div>
    </footer>
  );
}