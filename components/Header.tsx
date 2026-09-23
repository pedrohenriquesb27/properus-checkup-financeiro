import React from 'react';
import { Lock } from 'lucide-react';

export default function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-12 border-b border-slate-100 bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 shrink-0">
          <img
            src="/images/logo.png"
            alt="Prosperus Inteligência Financeira"
            className="h-10 sm:h-12 w-auto object-contain"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div className="flex flex-col text-left justify-center py-0.5">
            <span className="font-black text-xl sm:text-2xl tracking-tight text-slate-900 leading-none">
              PROSPERUS
            </span>
            <span className="text-[9px] sm:text-[10px] font-extrabold tracking-[0.25em] text-[#C5A059] uppercase mt-1 leading-none">
              INTELIGÊNCIA FINANCEIRA
            </span>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium shadow-2xs">
          <Lock className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
          <span>🔒 Análise Segura e Confidencial</span>
        </div>
      </div>
    </header>
  );
}
