'use client';

import { useState } from 'react';
import { FORMACOES } from '@/lib/content';
import { STACK_ICONS } from '@/lib/stackIcons';

type Formacao = (typeof FORMACOES)[number];

interface CheckoutModalProps {
  formacao: Formacao | null;
  onFechar: () => void;
}

const PAGAMENTOS = [
  { id: 'cartao', label: 'Cartão' },
  { id: 'pix', label: 'Pix' },
  { id: 'boleto', label: 'Boleto' },
] as const;

export function CheckoutModal({ formacao, onFechar }: CheckoutModalProps) {
  const [metodo, setMetodo] = useState<string>('cartao');
  const [concluido, setConcluido] = useState(false);

  if (!formacao) return null;

  const Icon = STACK_ICONS[formacao.tags[0]];

  const fechar = () => {
    setConcluido(false);
    setMetodo('cartao');
    onFechar();
  };

  return (
    <div
      onClick={fechar}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0d1117]"
      >
        <button
          onClick={fechar}
          aria-label="Fechar"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/80"
        >
          ✕
        </button>

        {concluido ? (
          <div className="p-10 text-center md:p-16">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#39d353]/15 text-4xl text-[#39d353]">
              ✓
            </div>
            <h3 className="mt-6 text-3xl font-bold text-white">
              Matrícula confirmada!
            </h3>
            <p className="mx-auto mt-4 max-w-md text-gray-400">
              Sua vaga na <strong className="text-white">{formacao.nome}</strong>{' '}
              está garantida. Em instantes você recebe os dados de acesso à
              plataforma no seu e-mail.
            </p>
            <button
              onClick={fechar}
              className="mt-8 rounded-full bg-[#39d353] px-8 py-3.5 font-bold text-[#0a0a0f]"
            >
              Voltar para o site
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-[1fr_1.2fr]">
            <aside
              className={`relative overflow-hidden bg-gradient-to-br p-8 md:p-10 ${formacao.gradient}`}
            >
              {/* Fundo: grade técnica sutil, mesma linguagem visual da página */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />

              <div className="relative">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/70">
                  Sua matrícula
                </span>

                <div className="mt-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-black/30">
                  {Icon && <Icon className="h-12 w-12 text-white" aria-hidden />}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {formacao.nome}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
                  <span className="rounded-full bg-black/30 px-3 py-1 text-white/90">
                    {formacao.duracao}
                  </span>
                  <span className="rounded-full bg-black/30 px-3 py-1 text-white/90">
                    {formacao.nivel}
                  </span>
                </div>

                <ul className="mt-8 space-y-2.5">
                  {formacao.aprendizados.slice(0, 4).map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-white/85">
                      <span className="text-[#39d353]">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-white/20 pt-6">
                  <p className="text-3xl font-bold text-white">
                    {formacao.parcelado}
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    ou {formacao.preco} à vista
                  </p>
                </div>
              </div>
            </aside>

            <div className="p-8 md:p-10">
              <h4 className="text-xl font-bold text-white">Seus dados</h4>

              {/* demonstração: nenhum dado é processado */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setConcluido(true);
                }}
                className="mt-6 space-y-4"
              >
                <Campo id="nome" label="Nome completo" placeholder="Seu nome" required />
                <Campo id="email" label="E-mail" type="email" placeholder="voce@email.com" required />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Campo id="cpf" label="CPF" placeholder="000.000.000-00" required />
                  <Campo id="tel" label="WhatsApp" type="tel" placeholder="(00) 00000-0000" required />
                </div>

                <div className="pt-2">
                  <p className="mb-3 font-mono text-xs uppercase tracking-wider text-gray-400">
                    Forma de pagamento
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {PAGAMENTOS.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setMetodo(p.id)}
                        aria-pressed={metodo === p.id}
                        className={`rounded-xl border py-3 text-sm font-semibold transition-colors ${
                          metodo === p.id
                            ? 'border-[#39d353] bg-[#39d353]/10 text-[#39d353]'
                            : 'border-white/10 text-gray-400 hover:border-white/25'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {metodo === 'cartao' && (
                  <div className="space-y-4 pt-2">
                    <Campo id="cartao" label="Número do cartão" placeholder="0000 0000 0000 0000" />
                    <div className="grid grid-cols-2 gap-4">
                      <Campo id="validade" label="Validade" placeholder="MM/AA" />
                      <Campo id="cvv" label="CVV" placeholder="123" />
                    </div>
                  </div>
                )}

                {metodo === 'pix' && (
                  <p className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-gray-400">
                    O código Pix aparece na próxima etapa. Aprovação em até 2 minutos.
                  </p>
                )}

                {metodo === 'boleto' && (
                  <p className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-gray-400">
                    O boleto é gerado na próxima etapa. Compensação em até 3 dias úteis.
                  </p>
                )}

                <button
                  type="submit"
                  className="!mt-8 w-full rounded-full bg-[#39d353] py-4 text-lg font-bold text-[#0a0a0f] shadow-[0_0_30px_rgba(57,211,83,0.35)] transition-shadow hover:shadow-[0_0_50px_rgba(57,211,83,0.6)]"
                >
                  Garantir minha vaga
                </button>

                <p className="text-center font-mono text-xs text-gray-600">
                  Ambiente de demonstração — nenhum dado é processado
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* input padrão do formulário */
function Campo({
  id,
  label,
  ...rest
}: { id: string; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-gray-400"
      >
        {label}
      </label>
      <input
        id={id}
        {...rest}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors focus:border-[#39d353]/60"
      />
    </div>
  );
}