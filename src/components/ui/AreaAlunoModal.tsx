'use client';

interface AreaAlunoModalProps {
  aberto: boolean;
  onFechar: () => void;
}

export function AreaAlunoModal({ aberto, onFechar }: AreaAlunoModalProps) {
  if (!aberto) return null;

  return (
    <div
      onClick={onFechar}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0d1117] p-8"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-white">Área do aluno</h3>
          <button
            onClick={onFechar}
            aria-label="Fechar"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/15"
          >
            ✕
          </button>
        </div>

        <p className="mt-2 text-sm text-gray-400">
          Entre com seus dados de acesso da plataforma.
        </p>

        {/* Formulário VISUAL — página conceitual, sem autenticação real.
            preventDefault impede o reload; nenhum dado é enviado. */}
        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label
              htmlFor="email-aluno"
              className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-gray-400"
            >
              E-mail
            </label>
            <input
              id="email-aluno"
              type="email"
              placeholder="voce@email.com"
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors focus:border-[#39d353]/60"
            />
          </div>

          <div>
            <label
              htmlFor="senha-aluno"
              className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-gray-400"
            >
              Senha
            </label>
            <input
              id="senha-aluno"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors focus:border-[#39d353]/60"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[#39d353] py-3.5 font-bold text-[#0a0a0f] shadow-[0_0_25px_rgba(57,211,83,0.35)] transition-shadow hover:shadow-[0_0_40px_rgba(57,211,83,0.55)]"
          >
            Entrar
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-500">
          Ainda não é aluno?{' '}
          <a
            href="#seja-membro"
            onClick={onFechar}
            className="font-semibold text-[#39d353] hover:underline"
          >
            Seja membro
          </a>
        </p>
      </div>
    </div>
  );
}