'use client';

import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  ArrowRight,
  Lock,
  Award,
  Laptop,
  Clock,
  Sparkles,
  AlertTriangle,
  FileSearch,
  TrendingUp,
  MessageSquare,
  Phone,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Check,
  FileText,
  UserCheck,
  CreditCard,
  Building2,
  PieChart,
  BarChart2,
  Info
} from 'lucide-react';

interface CheckupLandingPageProps {
  checkoutUrl?: string;
}

export default function CheckupLandingPage({
  checkoutUrl = 'https://payfast.greenn.com.br/27s9n8q?b_id_1=9ujy5kr&src=251fe2fa6aca41a0a33fd893ea936f29&sck=251fe2fa6aca41a0a33fd893ea936f29&vid=251fe2fa6aca41a0a33fd893ea936f29',
}: CheckupLandingPageProps) {
  const whatsappUrl = "https://wa.me/5562994560265?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Checkup%20Financeiro%20da%20Prosperus.";

  // Estado do Carrossel do Tablet (4 Páginas Reais do Relatório)
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
    <div className="bg-white text-slate-900 font-sans antialiased selection:bg-[#C5A059] selection:text-white min-h-screen">
      
      {/* 1. CABEÇALHO (HEADER) - LIMPO E ELEGANTE */}
      <header className="py-4 px-4 sm:px-6 lg:px-12 border-b border-slate-100 bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo Oficial Prosperus */}
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

          {/* Badge de Destaque no Topo */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium shadow-2xs">
            <Lock className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
            <span>🔒 Análise Segura e Confidencial</span>
          </div>

        </div>
      </header>

      {/* 2. SEÇÃO PRINCIPAL (HERO SECTION - COM TABLET CARROSSEL FIEL AO PDF OFICIAL) */}
      <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 px-4 sm:px-6 lg:px-12 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* COLUNA ESQUERDA: Headline, Subtítulo, Botão CTA e Selos */}
            <div className="lg:col-span-5 text-left z-10">
              
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                Entenda o seu cenário<br className="hidden sm:inline" /> e destrave o{' '}
                <span className="text-[#C5A059]">seu crédito.</span>
              </h1>

              {/* Subtítulo Exacto */}
              <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-xl">
                O Check-up do Rating Bancário mostra o que o sistema financeiro registrou sobre o seu documento, o que está travando a sua aprovação e o que resolver primeiro. Um especialista da Prosperus apresenta o resultado para você em uma conversa estratégica agendada.
              </p>

              {/* Botão de Chamada (CTA) */}
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

              {/* Selos de Confiança Abaixo do Botão */}
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

            {/* COLUNA DIREITA: TABLET MOCKUP COM CARROSSEL 100% FIEL AO PDF OFICIAL */}
            <div className="lg:col-span-7 relative mt-8 lg:mt-0 flex flex-col items-center justify-center">
              
              {/* Imagem de Fundo Suave de Escritório */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none -z-0">
                <img
                  src="/images/office_bg.jpg"
                  alt="Ambiente Prosperus"
                  className="w-full h-full object-cover opacity-40 filter blur-[2px]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>

              {/* MOLDURA DO TABLET COM O CARROSSEL INTERATIVO */}
              <div className="relative z-10 w-full max-w-xl">
                
                {/* MOLDURA DO TABLET */}
                <div className="relative shadow-2xl rounded-[2.2rem] p-2.5 sm:p-3 bg-slate-900 border-4 border-slate-800 transform lg:-rotate-1 hover:rotate-0 transition-transform duration-500">
                  
                  {/* Câmera / Sensor Superior do Tablet */}
                  <div className="w-12 h-2 bg-slate-800 mx-auto rounded-full mb-2 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                  </div>

                  {/* TELA INTERNA DO TABLET (ONDE O CARROSSEL ALTERNA) */}
                  <div className="bg-[#FAF9F6] rounded-2xl overflow-hidden border border-slate-200 text-slate-800 min-h-[360px] sm:min-h-[410px] p-3.5 sm:p-4 transition-all duration-300 flex flex-col justify-between shadow-inner relative">
                    
                    {/* TOPBAR TIPO PDF DOCUMENTO */}
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

                    {/* CONTEÚDO DINÂMICO DO SLIDE (PÁGINAS DO DOCUMENTO OFICIAL) */}
                    <div className="flex-1 overflow-hidden">
                      
                      {/* SLIDE 0 (PÁGINA 1: Diagnóstico de Crédito & Score Rating PF) */}
                      {activeSlide === 0 && (
                        <div className="space-y-3 animate-fade-in">
                          
                          {/* Card Dados Anonimizados LGPD */}
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

                          {/* Seção A: Classificação Score Rating */}
                          <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-2">
                            <span className="text-[10px] font-extrabold text-[#0B3C2D] uppercase tracking-wider block">
                              Classificação Score Rating (PF)
                            </span>
                            
                            <div className="flex items-center gap-3">
                              {/* Badge BBB Amber / Dourado */}
                              <div className="bg-[#C5A059] text-white font-black text-2xl w-14 h-14 rounded-xl flex items-center justify-center shadow-sm shrink-0">
                                BBB
                              </div>
                              <div className="text-[11px] text-slate-600">
                                <p className="font-bold text-slate-800">Comprometimento de renda 7%, sugerindo <span className="text-[#C5A059] font-extrabold">risco moderado</span>.</p>
                                <p className="text-[9px] text-slate-400 mt-0.5">Calculado a partir do SCR do Banco Central e histórico de pagamentos.</p>
                              </div>
                            </div>

                            {/* Régua de Ratings Pills */}
                            <div className="flex items-center justify-between gap-1 pt-1">
                              {['AAA', 'AA', 'A', 'BBB', 'BB', 'B', 'C', 'C-'].map((rating) => (
                                <span
                                  key={rating}
                                  className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                                    rating === 'BBB'
                                      ? 'bg-[#0B3C2D] text-white ring-2 ring-[#C5A059]'
                                      : 'bg-slate-100 text-slate-400'
                                  }`}
                                >
                                  {rating}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Highlights Resumo Executivo */}
                          <div className="grid grid-cols-2 gap-2 text-[10px]">
                            <div className="bg-amber-50 p-2 rounded-lg border border-amber-200">
                              <span className="text-amber-800 font-bold block">Comprometimento Renda</span>
                              <span className="text-base font-extrabold text-amber-900">7%</span>
                            </div>
                            <div className="bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                              <span className="text-emerald-800 font-bold block">Renda Presumida</span>
                              <span className="text-base font-extrabold text-emerald-900">R$ 15.931,00</span>
                            </div>
                          </div>

                        </div>
                      )}

                      {/* SLIDE 1 (PÁGINA 2: Ocorrências e Restrições por Bureau) */}
                      {activeSlide === 1 && (
                        <div className="space-y-3 animate-fade-in">
                          
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] font-black text-[#0B3C2D] uppercase tracking-wider">
                              Resumo de Valores por Bureau
                            </span>
                            <span className="text-[10px] font-bold text-slate-500">Total geral: <strong>R$ 0,00</strong></span>
                          </div>

                          {/* Grid dos Bureaus (Serasa, SPC, Boa Vista, Protestos, Cheques) */}
                          <div className="grid grid-cols-3 gap-1.5 text-[9px]">
                            <div className="bg-white p-2 rounded-lg border border-slate-200 text-center">
                              <span className="font-bold text-slate-700 block">SERASA</span>
                              <span className="text-emerald-600 font-extrabold">Nenhum Registro</span>
                            </div>
                            <div className="bg-white p-2 rounded-lg border border-slate-200 text-center">
                              <span className="font-bold text-slate-700 block">SPC</span>
                              <span className="text-emerald-600 font-extrabold">Nada Consta</span>
                            </div>
                            <div className="bg-white p-2 rounded-lg border border-slate-200 text-center">
                              <span className="font-bold text-slate-700 block">BOA VISTA</span>
                              <span className="text-emerald-600 font-extrabold">Nada Consta</span>
                            </div>
                            <div className="bg-white p-2 rounded-lg border border-slate-200 text-center">
                              <span className="font-bold text-slate-700 block">PROTESTOS</span>
                              <span className="text-emerald-600 font-extrabold">Nada Consta</span>
                            </div>
                            <div className="bg-white p-2 rounded-lg border border-slate-200 text-center">
                              <span className="font-bold text-slate-700 block">CHEQUES</span>
                              <span className="text-emerald-600 font-extrabold">Nada Consta</span>
                            </div>
                            <div className="bg-white p-2 rounded-lg border border-slate-200 text-center">
                              <span className="font-bold text-slate-700 block">FALÊNCIAS</span>
                              <span className="text-emerald-600 font-extrabold">Nada Consta</span>
                            </div>
                          </div>

                          {/* Tabela de Detalhamento de Itens */}
                          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden text-[9px]">
                            <div className="bg-slate-50 px-2 py-1 border-b font-bold text-slate-600 grid grid-cols-12">
                              <span className="col-span-6">ITEM</span>
                              <span className="col-span-6">STATUS</span>
                            </div>
                            <div className="p-2 space-y-1.5 divide-y divide-slate-100">
                              <div className="grid grid-cols-12 items-center">
                                <span className="col-span-6 font-medium text-slate-700">Pendências Serasa</span>
                                <span className="col-span-6 text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-[8.5px] inline-block">✓ Nenhum registro</span>
                              </div>
                              <div className="grid grid-cols-12 items-center pt-1">
                                <span className="col-span-6 font-medium text-slate-700">Pendências SPC / Boa Vista</span>
                                <span className="col-span-6 text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-[8.5px] inline-block">✓ Nada consta</span>
                              </div>
                              <div className="grid grid-cols-12 items-center pt-1">
                                <span className="col-span-6 font-medium text-slate-700">Títulos Protestados</span>
                                <span className="col-span-6 text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-[8.5px] inline-block">✓ Nada consta</span>
                              </div>
                            </div>
                          </div>

                          {/* Banner de Síntese de Decisão */}
                          <div className="bg-emerald-600 text-white p-2.5 rounded-xl flex items-center justify-between shadow-xs">
                            <div>
                              <span className="text-[8px] uppercase tracking-wider text-emerald-200 font-extrabold block">SÍNTESE DE DECISÃO (TENDÊNCIA)</span>
                              <span className="text-xs font-black">Aprovação Recomendada</span>
                            </div>
                            <span className="bg-white text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-md">
                              ✓ Operável
                            </span>
                          </div>

                        </div>
                      )}

                      {/* SLIDE 2 (PÁGINA 3: Histórico Anual de Consultas & Leitura de IA) */}
                      {activeSlide === 2 && (
                        <div className="space-y-3 animate-fade-in">
                          
                          <span className="text-[10px] font-black text-[#0B3C2D] uppercase tracking-wider block">
                            Histórico Anual de Consultas
                          </span>

                          {/* Stat Cards de Consultas */}
                          <div className="grid grid-cols-3 gap-1.5 text-[9px]">
                            <div className="bg-sky-50 p-2 rounded-lg border border-sky-200 text-center">
                              <span className="text-sky-700 font-bold block">Total Consultas</span>
                              <span className="text-base font-black text-sky-900">1</span>
                            </div>
                            <div className="bg-emerald-50 p-2 rounded-lg border border-emerald-200 text-center">
                              <span className="text-emerald-700 font-bold block">Ocorrência Recente</span>
                              <span className="text-[10px] font-extrabold text-emerald-900 mt-1 block">17/06/2026</span>
                            </div>
                            <div className="bg-purple-50 p-2 rounded-lg border border-purple-200 text-center">
                              <span className="text-purple-700 font-bold block">Última Ocorrência</span>
                              <span className="text-[10px] font-extrabold text-purple-900 mt-1 block">17/06/2026</span>
                            </div>
                          </div>

                          {/* Tabela Mensal do Ano (2026) */}
                          <div className="bg-white p-2 rounded-xl border border-slate-200 text-[8.5px]">
                            <span className="font-bold text-slate-500 block mb-1">Ano 2026 - Distribuição Mensal</span>
                            <div className="grid grid-cols-12 text-center gap-0.5 font-bold">
                              {['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'].map((m) => (
                                <div key={m} className={`p-1 rounded ${m === 'JUN' ? 'bg-sky-500 text-white font-black' : 'bg-slate-50 text-slate-400'}`}>
                                  {m}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Leitura Técnica de IA */}
                          <div className="bg-purple-50 p-2.5 rounded-xl border border-purple-200 text-[10px]">
                            <span className="text-purple-900 font-extrabold block mb-0.5">Leitura Técnica (IA Prosperus)</span>
                            <p className="text-purple-950 text-[9.5px] leading-snug">
                              Não existem registros que indiquem inadimplência ou qualquer outro fator de risco. O score de crédito é alto, indicando confiabilidade cadastral.
                            </p>
                          </div>

                        </div>
                      )}

                      {/* SLIDE 3 (PÁGINA 4: SCR Bacen - Carteira de Crédito & Saldos) */}
                      {activeSlide === 3 && (
                        <div className="space-y-3 animate-fade-in">
                          
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] font-black text-[#0B3C2D] uppercase tracking-wider">
                              SCR Bacen — Carteira de Crédito
                            </span>
                            <span className="bg-blue-100 text-blue-800 text-[8px] font-bold px-1.5 py-0.5 rounded">
                              Registrato Bacen
                            </span>
                          </div>

                          {/* Grid Relacionamento & Saldos */}
                          <div className="grid grid-cols-2 gap-2 text-[10px]">
                            
                            {/* Card Instituições */}
                            <div className="bg-white p-2.5 rounded-xl border border-slate-200 space-y-1">
                              <span className="font-bold text-[#0B3C2D] block border-b pb-1">Relacionamento</span>
                              <div className="flex justify-between text-slate-600">
                                <span>Instituições:</span>
                                <strong className="text-slate-900">2</strong>
                              </div>
                              <div className="flex justify-between text-slate-600">
                                <span>Operações:</span>
                                <strong className="text-slate-900">3</strong>
                              </div>
                              <div className="flex justify-between text-emerald-700 font-bold text-[9px]">
                                <span>Prejuízo SCR:</span>
                                <span>✓ R$ 0,00</span>
                              </div>
                            </div>

                            {/* Card Resumo Saldos */}
                            <div className="bg-white p-2.5 rounded-xl border border-slate-200 space-y-1">
                              <span className="font-bold text-[#0B3C2D] block border-b pb-1">Resumo Saldos</span>
                              <div className="flex justify-between text-slate-600">
                                <span>Valor a Pagar (A):</span>
                                <strong className="text-slate-900">R$ 19.865,50</strong>
                              </div>
                              <div className="flex justify-between text-slate-600">
                                <span>Dívidas não pagas:</span>
                                <strong className="text-emerald-600">R$ 0,00</strong>
                              </div>
                              <div className="flex justify-between text-slate-600">
                                <span>Limite sugerido:</span>
                                <strong className="text-[#C5A059]">R$ 4.779,30</strong>
                              </div>
                            </div>

                          </div>

                          {/* Síntese Final de Liberação */}
                          <div className="bg-[#072B20] text-white p-2.5 rounded-xl space-y-1.5 shadow-sm">
                            <span className="text-[8px] uppercase tracking-wider text-[#E5C687] font-extrabold block">SÍNTESE FINAL DA CONSULTA</span>
                            <div className="flex items-center justify-between text-[9.5px]">
                              <span>Bureaus: <strong>R$ 0,00</strong></span>
                              <span>BACEN Prejuízo: <strong>R$ 0,00</strong></span>
                              <span className="bg-[#C5A059] text-slate-950 font-black px-2 py-0.5 rounded">
                                ✓ Crédito Liberado
                              </span>
                            </div>
                          </div>

                        </div>
                      )}

                    </div>

                    {/* RODAPÉ E CONTROLES DE NAVEGAÇÃO DO CARROSSEL */}
                    <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                      
                      {/* Botões das Páginas (Tabs 1 a 4) */}
                      <div className="flex items-center gap-1">
                        {[0, 1, 2, 3].map((idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveSlide(idx)}
                            className={`h-2 rounded-full transition-all ${
                              activeSlide === idx
                                ? 'w-6 bg-[#0B3C2D]'
                                : 'w-2 bg-slate-300 hover:bg-slate-400'
                            }`}
                            title={`Ir para ${slideTitles[idx]}`}
                            aria-label={`Slide ${idx + 1}`}
                          />
                        ))}
                      </div>

                      {/* Título da Aba Ativa & Setas de Próximo/Anterior */}
                      <div className="flex items-center gap-2">
                        <span className="text-[9.5px] font-bold text-[#0B3C2D]">
                          {slideTitles[activeSlide]}
                        </span>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => setActiveSlide((prev) => (prev === 0 ? 3 : prev - 1))}
                            className="w-5 h-5 rounded bg-slate-200 hover:bg-slate-300 flex items-center justify-center text-slate-700 transition-colors text-xs font-bold"
                            aria-label="Anterior"
                          >
                            ‹
                          </button>
                          <button
                            onClick={() => setActiveSlide((prev) => (prev + 1) % 4)}
                            className="w-5 h-5 rounded bg-[#0B3C2D] hover:bg-[#072B20] flex items-center justify-center text-white transition-colors text-xs font-bold"
                            aria-label="Próximo"
                          >
                            ›
                          </button>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

                {/* PILL FLUTUANTE DE PRAZO "🟢 Até 48h úteis" */}
                <div className="absolute -bottom-4 left-4 sm:-bottom-5 sm:left-6 z-30 bg-white border border-slate-200 py-2 px-4 rounded-full shadow-xl flex items-center gap-2 text-slate-800 text-xs sm:text-sm font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Até 48h úteis</span>
                </div>

                {/* BADGE FLUTUANTE DE SEGURANÇA */}
                <div className="absolute -top-4 right-4 sm:-top-5 sm:right-6 z-30 bg-[#072B20] text-white border border-[#C5A059]/40 py-1.5 px-3.5 rounded-full shadow-xl flex items-center gap-1.5 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>Documento Oficial Bacen</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. SEÇÃO: POR QUE O SEU CRÉDITO É NEGADO OU LIMITADO? */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-12 bg-slate-50 border-y border-slate-200/80 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* ELEMENTO GRÁFICO 3D DE CRESCIMENTO & RATING (ENCORPADO, PROPORCIONAL E SEM MOLDURAS PESADAS) */}
            <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center items-center py-4">
              
              <div className="relative w-full max-w-lg sm:max-w-xl transform hover:scale-[1.02] transition-transform duration-500 filter drop-shadow-[0_30px_55px_rgba(11,60,45,0.22)]">
                
                {/* GLOW DE FUNDO ORGÂNICO DOURADO & VERDE */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-tr from-[#C5A059]/25 via-[#0B3C2D]/15 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

                {/* PAINEL DE CRESCIMENTO & RATING BANCÁRIO (FLUTUANTE SEM MOLDURA PESADA) */}
                <div className="relative p-2 sm:p-4">
                  
                  {/* COMPOSIÇÃO 3D: DOCUMENTO DE RATING & GRÁFICO DE BARRAS EM ASCENSÃO */}
                  <div className="bg-white/95 backdrop-blur-xl border border-[#C5A059]/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative z-10">
                    
                    {/* Header do Painel */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-[#0B3C2D] text-[#C5A059] flex items-center justify-center shadow-md">
                          <TrendingUp className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[10px] font-black text-[#C5A059] uppercase tracking-widest block">HISTÓRICO BACEN & BIRÔS</span>
                          <h4 className="text-sm sm:text-base font-black text-[#0B3C2D]">Evolução do Rating Bancário</h4>
                        </div>
                      </div>
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        SISTEMA BACEN
                      </span>
                    </div>

                    {/* Medidor Principal de Score */}
                    <div className="bg-gradient-to-br from-[#FAF9F6] to-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-extrabold text-slate-700">Índice do Score de Crédito</span>
                        <span className="text-xs font-black text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-md border border-emerald-300">
                          ↑ 95% Potencial de Crédito
                        </span>
                      </div>

                      <div className="flex items-baseline gap-3">
                        <span className="text-4xl sm:text-5xl font-black text-[#0B3C2D]">Nível A</span>
                        <span className="text-base font-extrabold text-[#C5A059]">(Score 870 / 1000)</span>
                      </div>

                      {/* 5 Barras do Gráfico de Crescimento 3D */}
                      <div className="space-y-2 pt-1">
                        <div className="flex justify-between text-xs font-bold text-slate-500">
                          <span>Trajetória de Regularização</span>
                          <span className="text-[#0B3C2D]">Aprovação Autorizada</span>
                        </div>
                        <div className="grid grid-cols-5 gap-2 h-16 items-end">
                          <div className="bg-slate-200 rounded-t-lg h-[25%]" />
                          <div className="bg-[#C5A059]/40 rounded-t-lg h-[45%]" />
                          <div className="bg-[#C5A059]/75 rounded-t-lg h-[65%]" />
                          <div className="bg-[#0B3C2D]/80 rounded-t-lg h-[85%]" />
                          <div className="bg-[#0B3C2D] rounded-t-lg h-full relative shadow-md">
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] font-black text-[#C5A059] bg-[#072B20] px-1.5 py-0.5 rounded shadow">MAX</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Checkmarks de Diagnóstico do Rating */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between sm:flex-col sm:items-start gap-1">
                        <span className="text-slate-500 font-medium text-[11px]">Gargalos Invisíveis:</span>
                        <span className="font-extrabold text-emerald-700 flex items-center gap-1">
                          <Check className="w-4 h-4 text-emerald-600 stroke-[3]" /> Mapeados
                        </span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between sm:flex-col sm:items-start gap-1">
                        <span className="text-slate-500 font-medium text-[11px]">Apontamentos SCR:</span>
                        <span className="font-extrabold text-[#C5A059] flex items-center gap-1">
                          <Check className="w-4 h-4 text-[#C5A059] stroke-[3]" /> Identificados
                        </span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between sm:flex-col sm:items-start gap-1">
                        <span className="text-slate-500 font-medium text-[11px]">Travas Cadastrais:</span>
                        <span className="font-extrabold text-[#0B3C2D] flex items-center gap-1">
                          <Check className="w-4 h-4 text-[#0B3C2D] stroke-[3]" /> Liberadas
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* EMBLEMA 3D DO ESCUDO DE VERIFICAÇÃO SOBREPOSTO NA BASE */}
                  <div className="absolute -bottom-3 -right-2 sm:-bottom-5 sm:-right-4 z-20 bg-gradient-to-br from-[#0B3C2D] via-[#072B20] to-[#041D15] border-3 border-[#C5A059] text-white p-4 sm:p-5 rounded-2xl shadow-2xl flex items-center gap-3 transform rotate-2 hover:rotate-0 transition-transform">
                    <div className="w-10 h-10 rounded-xl bg-[#C5A059] text-[#072B20] flex items-center justify-center font-black shrink-0 shadow-md">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-[#E5C687] uppercase tracking-wider">SELOS PROSPERUS</p>
                      <p className="text-xs font-black text-white">Crédito Liberado ✓</p>
                    </div>
                  </div>

                </div>

                {/* BADGE FLUTUANTE 3D SUPERIOR: "✨ Aprovação Recomendada" */}
                <div className="absolute -top-3 -left-2 sm:-top-4 sm:-left-4 z-20 bg-white border-2 border-[#C5A059] py-1.5 px-4 rounded-full shadow-xl flex items-center gap-2 text-xs sm:text-sm font-black text-[#0B3C2D]">
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                  <span>Aprovação Recomendada</span>
                </div>

                {/* BADGE FLUTUANTE 3D INFERIOR: "🔒 Análise 100% Segura" */}
                <div className="absolute -bottom-3 left-2 sm:-bottom-4 sm:left-4 z-20 bg-[#072B20] text-white border border-[#C5A059]/50 py-1.5 px-4 rounded-full shadow-xl flex items-center gap-2 text-xs font-bold">
                  <Lock className="w-4 h-4 text-[#C5A059]" />
                  <span>Análise 100% Segura</span>
                </div>

              </div>

            </div>

            {/* Texto Explicativo (lg:col-span-6 para balanço em 50/50) */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase font-extrabold tracking-wider text-[#C5A059] mb-3">
                <AlertTriangle className="w-4 h-4 text-[#C5A059]" />
                <span>ENTENDA OS BASTIDORES DO SISTEMA BANCÁRIO</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                Por que o seu crédito é negado ou limitado?
              </h2>

              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  Muitas pessoas e empresas acreditam que manter as contas em dia ou ter uma boa renda é suficiente para conseguir aprovação de crédito, financiamentos e limites altos nos bancos. <strong>Porém, a realidade do sistema financeiro é outra.</strong>
                </p>
                <p>
                  O problema na maioria das vezes <strong className="text-[#0B3C2D] font-bold">não é a sua renda atual</strong>, mas sim como o mercado financeiro enxerga e interpreta o seu histórico. 
                </p>
                <p className="bg-white p-4 rounded-xl border border-slate-200 text-slate-800 font-medium text-sm sm:text-base shadow-2xs">
                  💡 Instituições bancárias e birôs de crédito utilizam sistemas automáticos que apontam <span className="text-[#0B3C2D] font-extrabold">gargalos invisíveis, restrições históricas e travas cadastrais silenciosas</span>. Sem você saber exatamente o que está registrado sob o seu CPF ou CNPJ, você continuará recebendo recusas automáticas do sistema.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. SEÇÃO: O QUE VOCÊ VAI DESCOBRIR NA ANÁLISE? (4 CARDS VISUAIS) */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3.5 py-1 rounded-full border border-[#C5A059]/30">
              DIAGNÓSTICO COMPLETO E ESTRATÉGICO
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4">
              O que você vai descobrir na Análise?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              Mapeamento minucioso dividido em 4 etapas claras para você retomar o controle do seu crédito.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Card 1 */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-all group relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#0B3C2D]/10 text-[#0B3C2D] flex items-center justify-center mb-5 group-hover:bg-[#0B3C2D] group-hover:text-white transition-colors">
                  <FileSearch className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-[#C5A059] uppercase tracking-wider mb-1">Card 1</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Raio-X do seu Documento
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Descubra exatamente o que os bancos e birôs enxergam no seu CPF/CNPJ nos sistemas internos e no Banco Central.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-all group relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#0B3C2D]/10 text-[#0B3C2D] flex items-center justify-center mb-5 group-hover:bg-[#0B3C2D] group-hover:text-white transition-colors">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-[#C5A059] uppercase tracking-wider mb-1">Card 2</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  O que está travando
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Identificação precisa dos pontos de bloqueio, restrições invisíveis e entraves que barram sua aprovação de crédito.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition-all group relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#0B3C2D]/10 text-[#0B3C2D] flex items-center justify-center mb-5 group-hover:bg-[#0B3C2D] group-hover:text-white transition-colors">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-[#C5A059] uppercase tracking-wider mb-1">Card 3</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Plano de Ação Prático
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Passo a passo objetivo e direcionado para você resolver as inconsistências e destravar a sua vida financeira.
                </p>
              </div>
            </div>

            {/* Card 4 - Sessão de Atendimento Especializado */}
            <div className="bg-[#072B20] text-white p-6 sm:p-8 rounded-2xl border border-[#C5A059]/40 shadow-md transition-all group relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#C5A059]/20 text-[#E5C687] flex items-center justify-center mb-5 border border-[#C5A059]/30">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-[#E5C687] uppercase tracking-wider mb-1">Card 4</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Conversa Estratégica
                </h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-4">
                  Entrega completa e explicativa do resultado em uma sessão direta com um especialista qualificado da Prosperus.
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <div className="w-8 h-8 rounded-full bg-[#C5A059]/20 text-[#E5C687] flex items-center justify-center font-bold text-xs border border-[#C5A059]/30">
                    ✓
                  </div>
                  <div>
                    <p className="text-xs text-white font-bold">Atendimento Especializado Prosperus</p>
                    <p className="text-[11px] text-[#E5C687]">Sessão Individual Agendada</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. SEÇÃO DE PREÇO E OFERTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-3xl mx-auto">
          
          <div className="bg-[#0B3C2D] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl border border-[#C5A059]/40">
            
            <div className="relative z-10">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#E5C687] text-xs font-extrabold uppercase tracking-widest mb-6">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span>ACESSO IMEDIATO AO CHECKUP</span>
              </div>

              {/* Título Exacto */}
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Tenha clareza total da sua saúde financeira agora mesmo
              </h2>

              {/* Valor em Destaque Absoluto (R$ 99,00) */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 mb-8 max-w-md mx-auto border border-white/15 shadow-inner">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#E5C687] block mb-2">
                  Valor Promocional do Diagnóstico
                </span>
                <div className="text-5xl sm:text-6xl font-black text-white tracking-tight flex items-center justify-center gap-1.5 my-2">
                  <span className="text-2xl sm:text-3xl text-[#E5C687] font-bold">R$</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-[#E5C687]">
                    99,00
                  </span>
                </div>
                <span className="text-xs text-slate-300 font-medium">
                  Investimento único para acesso completo ao relatório e conversa estratégica
                </span>
              </div>

              {/* Botão de CTA da Oferta */}
              <div className="max-w-md mx-auto">
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full bg-[#C5A059] hover:bg-[#B89343] text-[#072B20] font-extrabold text-lg sm:text-xl py-4 sm:py-5 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 transform active:scale-95 shadow-lg shadow-[#C5A059]/20"
                >
                  <span>Quero meu Checkup</span>
                  <ArrowRight className="w-6 h-6 stroke-[3] group-hover:translate-x-1 transition-transform text-[#072B20]" />
                </a>
                
                <p className="text-xs text-slate-300 mt-4 flex items-center justify-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Ambiente 100% Criptografado e Seguro (Checkout Greenn)</span>
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* BOTÃO FLUTUANTE DE WHATSAPP */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:p-4 rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:scale-110 flex items-center gap-2 group"
        aria-label="Falar no WhatsApp"
      >
        <Phone className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-sm font-bold pl-0 group-hover:pl-1">
          (62) 9456-0265
        </span>
      </a>

      {/* 6. RODAPÉ (FOOTER) */}
      <footer className="bg-[#072B20] text-slate-300 py-12 px-4 sm:px-6 lg:px-12 border-t border-[#C5A059]/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          {/* Logo da Prosperus no Rodapé */}
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

          {/* Contato de WhatsApp */}
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

        {/* Direitos Autorais */}
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-slate-800/80 text-center text-xs text-slate-400">
          <p>© Prosperus Inteligência Financeira. Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>
  );
}
