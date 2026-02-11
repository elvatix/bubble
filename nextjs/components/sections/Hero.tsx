import React from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-32 px-6 overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] blur-[120px] pointer-events-none" />
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute top-[10%] -right-[10%] w-[30%] h-[30%] bg-purple-500/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      
      <div className="container mx-auto relative z-10 text-center">
        <div className="max-w-5xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nieuw: GPT-4o Integratie Nu Beschikbaar</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
            Schrijf persoonlijke <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">InMails</span> in seconden
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            De <span className="text-white font-medium">AI-recruitment copilot</span> die uren handmatig werk bespaart. 
            Personaliseer je outreach direct in LinkedIn met één klik.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-5 bg-white text-slate-900 hover:bg-slate-100 rounded-2xl font-bold transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] flex items-center gap-3 group">
              Start Gratis Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-slate-900/50 backdrop-blur-xl hover:bg-slate-800/80 text-white rounded-2xl font-bold transition-all border border-slate-700/50 flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                <Zap className="w-4 h-4 text-yellow-400" />
              </div>
              Bekijk Demo
            </button>
          </div>
        </div>

        {/* Premium Interface Preview Card */}
        <div className="max-w-6xl mx-auto transition-all duration-1000 transform hover:scale-[1.02] text-left">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-slate-900/80 backdrop-blur-2xl rounded-[2rem] border border-white/10 p-3 shadow-2xl">
              <div className="bg-[#0f172a] rounded-[1.5rem] overflow-hidden border border-slate-800/50">
                {/* Tool Bar Mockup */}
                <div className="h-12 bg-slate-800/50 border-b border-slate-700/50 flex items-center px-6 justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-700" />
                    <div className="w-3 h-3 rounded-full bg-slate-700" />
                    <div className="w-3 h-3 rounded-full bg-slate-700" />
                  </div>
                  <div className="text-xs text-slate-500 font-medium whitespace-nowrap overflow-hidden text-ellipsis px-4">linkedin.com/messaging</div>
                  <div className="w-3 h-3" />
                </div>

                <div className="p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex-shrink-0 shadow-inner flex items-center justify-center">
                    <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-xs">in</div>
                  </div>
                  <div className="flex-1 space-y-6 w-full">
                    <div className="flex justify-between items-center">
                      <div className="h-5 bg-slate-800 rounded-full w-32 md:w-48" />
                      <div className="h-4 bg-slate-800 rounded-full w-20 md:w-24 opacity-50" />
                    </div>
                    <div className="relative">
                      <div className="absolute -left-4 top-0 bottom-0 w-1 bg-blue-500 rounded-full" />
                      <div className="p-6 md:p-8 bg-blue-500/5 rounded-2xl border border-blue-500/10 text-slate-200 font-sans text-base md:text-lg leading-relaxed shadow-inner">
                        <span className="text-blue-400 font-medium">Hoi Mark</span>, ik zag je recente post over <span className="bg-blue-400/10 text-blue-300 px-1 rounded">AI-implementaties</span> bij Vibe Group. Gezien je achtergrond in Software Engineering en je ervaring bij TechCorp, denk ik dat onze <span className="text-blue-400 italic">Senior AI rol</span> perfect bij je past...
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="h-10 bg-blue-600/20 border border-blue-500/20 rounded-xl w-28 md:w-32" />
                      <div className="h-10 bg-slate-800 rounded-xl w-28 md:w-32" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
