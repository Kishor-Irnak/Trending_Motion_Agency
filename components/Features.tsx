import React from 'react';
import { Palette, Megaphone, Code2, ArrowUpRight, BarChart3, Layers } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Think less about the tool. <br />
            <span className="text-slate-400">Focus on the growth.</span>
          </h2>
          <p className="text-slate-400 text-lg">
            The all-in-one agency toolkit to keep your brand organized, efficient, and connected to your audience.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Branding (Wide on mobile, tall on desktop left) */}
          <div className="group md:col-span-1 row-span-2 relative overflow-hidden rounded-3xl bg-[#0F101E] border border-white/10 p-8 transition-all hover:border-indigo-500/30">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Palette size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Brand Identity</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  We craft memorable visual identities that resonate with your audience. From logos to full style guides.
                </p>
              </div>

              {/* Visual Abstract */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                   <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-500" />
                   <div className="h-2 w-20 bg-white/10 rounded-full" />
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 translate-x-4">
                   <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-500" />
                   <div className="h-2 w-20 bg-white/10 rounded-full" />
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                   <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500" />
                   <div className="h-2 w-20 bg-white/10 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Web Development (Wide top right) */}
          <div className="group md:col-span-2 relative overflow-hidden rounded-3xl bg-[#0F101E] border border-white/10 p-8 transition-all hover:border-indigo-500/30">
             <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-600/20 blur-[80px] rounded-full group-hover:bg-indigo-600/30 transition-all" />
             
             <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/20 text-blue-300 text-xs font-medium mb-4">
                        <Code2 size={12} /> Development
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2">Web Development</h3>
                    <p className="text-slate-400 text-sm">
                        High-performance websites built with React, Next.js, and modern tech stacks. SEO optimized and fully responsive.
                    </p>
                    <button className="mt-6 flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                        View Tech Stack <ArrowUpRight size={14} />
                    </button>
                </div>

                {/* Code Snippet Visual */}
                <div className="flex-1 w-full">
                    <div className="rounded-xl bg-[#0B0C15] border border-white/10 p-4 font-mono text-xs text-slate-400 shadow-lg transform group-hover:translate-y-1 transition-transform">
                        <div className="flex gap-1.5 mb-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                        </div>
                        <div className="space-y-1">
                            <p><span className="text-purple-400">const</span> <span className="text-blue-400">Agency</span> = <span className="text-yellow-400">()</span> <span className="text-purple-400">=&gt;</span> {'{'}</p>
                            <p className="pl-4"><span className="text-purple-400">return</span> (</p>
                            <p className="pl-8 text-green-400">&lt;TrendingMotion /&gt;</p>
                            <p className="pl-4">);</p>
                            <p>{'}'}</p>
                        </div>
                    </div>
                </div>
             </div>
          </div>

          {/* Card 3: Marketing (Bottom Center) */}
          <div className="group md:col-span-1 relative overflow-hidden rounded-3xl bg-[#0F101E] border border-white/10 p-8 transition-all hover:border-indigo-500/30">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 mb-6">
                  <Megaphone size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Digital Marketing</h3>
                <p className="text-slate-400 text-sm">Paid ads, social media management, and content strategy.</p>
            </div>
          </div>

           {/* Card 4: Analytics (Bottom Right) */}
           <div className="group md:col-span-1 relative overflow-hidden rounded-3xl bg-[#0F101E] border border-white/10 p-8 transition-all hover:border-indigo-500/30">
            <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 mb-6">
                  <BarChart3 size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">SEO & Analytics</h3>
                <p className="text-slate-400 text-sm">Data-driven decisions to maximize your ROI and organic reach.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;