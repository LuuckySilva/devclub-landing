'use client';

import { useEffect, useRef, useState } from 'react';
import { responder, SUGESTOES } from '@/lib/faq';

interface Mensagem {
  autor: 'bot' | 'user';
  texto: string;
}

const MENSAGEM_INICIAL: Mensagem = {
  autor: 'bot',
  texto:
    'Oi! Sou o assistente do DevClub 🤖 Posso te ajudar com dúvidas sobre formações, comunidade e como começar. Manda a sua!',
};

export function ChatWidget() {
  const [aberto, setAberto] = useState(false);
  const [mensagens, setMensagens] = useState<Mensagem[]>([MENSAGEM_INICIAL]);
  const [digitando, setDigitando] = useState(false);
  const [input, setInput] = useState('');
  const fimRef = useRef<HTMLDivElement>(null);

  // Auto-scroll pro fim a cada mensagem nova
  useEffect(() => {
    fimRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [mensagens, digitando]);

  const enviar = (texto: string) => {
    const pergunta = texto.trim();
    if (!pergunta || digitando) return;

    setMensagens((prev) => [...prev, { autor: 'user', texto: pergunta }]);
    setInput('');
    setDigitando(true);

    // Delay simulando processamento — dá ritmo de conversa real
    setTimeout(() => {
      setMensagens((prev) => [
        ...prev,
        { autor: 'bot', texto: responder(pergunta) },
      ]);
      setDigitando(false);
    }, 900);
  };

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={() => setAberto((v) => !v)}
        aria-label={aberto ? 'Fechar chat' : 'Abrir chat de dúvidas'}
        className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#39d353] text-2xl shadow-[0_0_30px_rgba(57,211,83,0.5)] transition-transform hover:scale-110"
      >
        {aberto ? '✕' : '💬'}
      </button>

      {/* Painel */}
      {aberto && (
        <div className="fixed bottom-24 right-6 z-[60] flex h-[min(480px,70vh)] w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] shadow-2xl">
          <div className="border-b border-white/5 bg-[#09090b] px-5 py-4">
            <p className="font-bold text-white">Assistente DevClub</p>
            <p className="font-mono text-xs text-[#39d353]">
              ● online — respostas na hora
            </p>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {mensagens.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.autor === 'bot'
                    ? 'bg-white/[0.05] text-gray-200'
                    : 'ml-auto bg-[#39d353]/15 text-[#c8f5d4]'
                }`}
              >
                {m.texto}
              </div>
            ))}

            {digitando && (
              <div className="w-16 rounded-2xl bg-white/[0.05] px-4 py-3 font-mono text-xs text-gray-400">
                <span className="animate-pulse">● ● ●</span>
              </div>
            )}
            <div ref={fimRef} />
          </div>

          {/* Sugestões rápidas */}
          <div className="flex flex-wrap gap-2 border-t border-white/5 px-4 py-3">
            {SUGESTOES.map((s) => (
              <button
                key={s}
                onClick={() => enviar(s)}
                className="rounded-full border border-[#39d353]/30 px-3 py-1 font-mono text-xs text-[#39d353] transition-colors hover:bg-[#39d353]/10"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              enviar(input);
            }}
            className="flex gap-2 border-t border-white/5 p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua dúvida..."
              aria-label="Digite sua dúvida"
              className="flex-1 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-[#39d353]/60"
            />
            <button
              type="submit"
              aria-label="Enviar"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#39d353] font-bold text-[#0a0a0f] transition-transform hover:scale-105"
            >
              →
            </button>
          </form>
        </div>
      )}
    </>
  );
}