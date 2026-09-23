import React, { useState, useEffect } from 'react';
import { Award, Laptop, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  checkoutUrl: string;
}

export default function HeroSection({ checkoutUrl }: HeroSectionProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const slideTitles = [
    'Pág 1: Score & Rating',
    'Pág 2: Bureaus & Alertas',
    'Pág 3: Histórico Anual',
    'Pág 4: Carteira Bacen SCR'
  ];

  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 px-4 sm:px-6 lg:px-12 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          <div className="lg:col-span-5 text-left z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Entenda o seu cenário<br className="hidden sm:inline" /> e destrave o{' '}
              <span className="text-[#C5A059]">seu crédito.</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-xl">
              O Check-up do Rating Bancário mostra o que o sistema financeiro registrou sobre o seu documento, o que está travando a sua aprovação e o que resolver primeiro. Um especialista da Prosperus apresenta o resultado para você em uma conversa estratégica agendada.
            </p>

            <div className="mb-8 max-w-md">
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[#0B3C2D] hover:bg-[#072B20] text-white font-extrabold text-lg sm:text-xl px-9 py-4 sm:py-4.5 rounded-2xl transition-all duration-300 shadow-xl shadow-[#0B3C2D]/20 hover:shadow-2xl hover:shadow-[#0B3C2D]/30 transform active:scale-95 border border-[#0B3C2D]"
              >
                <span>Quero meu Checkup</span>
                <ArrowRight className="w-5 h-5 stroke-[3] text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm font-medium text-slate-500">
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#C5A059]" />
                <span>Atendimento Individualizado</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <Laptop className="w-4 h-4 text-[#C5A059]" />
                <span>100% Online</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C5A059]" />
                <span>Resultado Rápido</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative mt-8 lg:mt-0 flex flex-col items-center justify-center">
            <div className="relative z-10 w-full max-w-xl">
              <div className="relative shadow-2xl rounded-[2.2rem] p-2.5 sm:p-3 bg-slate-900 border-4 border-slate-800 transform lg:-rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="w-12 h-2 bg-slate-800 mx-auto rounded-full mb-2 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                </div>
                <div className="bg-[#FAF9F6] rounded-2xl overflow-hidden border border-slate-200 text-slate-800 min-h-[360px] sm:min-h-[410px] p-3.5 sm:p-4 transition-all duration-300 flex flex-col justify-between shadow-inner relative">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-[#0B3C2D] text-[#C5A059] flex items-center justify-center font-bold text-xs">
                        P
                      </div>
                      <div>
                        <p className="text-[11px] font-black text-[#0B3C2D] leading-tight">DIAGNÓSTICO DE CRÉDITO</p>
                        <p className="text-[9px] text-slate-400 font-bold">Rating PF • Bureau + SCR Bacen</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-emerald-100 text-emerald-800 text-[9px] font-extrabold px-2 py-0.5 rounded-full">
                        CPF: REGULAR
                      </span>
                      <span className="text-[9px] font-bold text-slate-400">Pág {activeSlide + 1}/4</span>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    {activeSlide === 0 && (
                      <div className="space-y-3 animate-fade-in">
                        <div className="bg-white p-2.5 rounded-xl border border-slate-200 text-xs space-y-1">
                          <div className="flex justify-between items-center border-b border-slate-100 pb-1">
                            <span className="font-bold text-slate-700">Cliente: <strong className="text-slate-900">CLIENTE EXEMPLO PROSPERUS</strong></span>
                            <span className="text-[9px] text-slate-400">LGPD Protegido</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-600">
                            <p>CPF: <strong className="text-slate-800">000.***.***-00</strong></p>
                            <p>Nascimento: <strong className="text-slate-800">01/01/1990</strong></p>
                            <p>Situação CPF: <strong className="text-emerald-700 font-bold">REGULAR</strong></p>
                            <p>Fontes: <strong className="text-slate-800">Bureau + Bacen SCR</strong></p>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-2">
                          <span className="text-[10px] font-extrabold text-[#0B3C2D] uppercase tracking-wider block">
                            Classificação Score Rating (PF)
                          </span>
                          <div className="flex items-center gap-3">
                            <div className="bg-[#C5A059] text-white font-black text-2xl w-14 h-14 rounded-xl flex items-center justify-center shadow-sm shrink-0">
                              BBB
                            </div>
                            <div className="text-[11px] text-slate-600">
                              <p className="font-bold text-slate-800">Comprometimento de renda 7%, sugerindo <span className="text-[#C5A059] font-extrabold">risco moderado</span>.</p>
                              <p className="text-[9px] text-slate-400 mt-0.5">Calculado a partir do SCR do Banco Central e histórico de pagamentos.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[0, 1, 2, 3].map((idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveSlide(idx)}
                          className={`h-2 rounded-full transition-all ${
                            activeSlide === idx ? 'w-6 bg-[#0B3C2D]' : 'w-2 bg-slate-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 left-4 sm:-bottom-5 sm:left-6 z-30 bg-white border border-slate-200 py-2 px-4 rounded-full shadow-xl flex items-center gap-2 text-slate-800 text-xs sm:text-sm font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Até 48h úteis</span>
              </div>
              <div className="absolute -top-4 right-4 sm:-top-5 sm:right-6 z-30 bg-[#072B20] text-white border border-[#C5A059]/40 py-1.5 px-3.5 rounded-full shadow-xl flex items-center gap-1.5 text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span>Documento Oficial Bacen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
