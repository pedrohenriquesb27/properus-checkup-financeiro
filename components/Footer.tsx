import React from 'react';
import { Phone } from 'lucide-react';

export default function Footer() {
  const whatsappUrl = "https://wa.me/5562994560265?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Checkup%20Financeiro%20da%20Prosperus.";

  return (
    <footer className="bg-[#072B20] text-slate-300 py-12 px-4 sm:px-6 lg:px-12 border-t border-[#C5A059]/30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-2">
          <img
            src="/images/logo.png"
            alt="Prosperus Inteligência Financeira"
            className="h-10 sm:h-12 w-auto object-contain brightness-200"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div className="flex flex-col text-left justify-center py-0.5">
            <span className="font-black text-2xl tracking-tight text-white leading-none">
              PROSPERUS
            </span>
            <span className="text-[10px] font-extrabold tracking-[0.25em] text-[#C5A059] uppercase mt-1 leading-none">
              INTELIGÊNCIA FINANCEIRA
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <span className="text-xs uppercase font-extrabold tracking-wider text-[#C5A059]">
            Contato de WhatsApp
          </span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-[#C5A059] font-bold text-base transition-colors bg-white/5 px-4 py-2 rounded-xl border border-white/10"
          >
            <Phone className="w-4 h-4 text-[#25D366]" />
            <span>(62) 9456-0265</span>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-slate-800/80 text-center text-xs text-slate-400">
        <p>© Prosperus Inteligência Financeira. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
