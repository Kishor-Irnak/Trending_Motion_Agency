import React from 'react';
import { ChevronRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Glow Effects specific to Hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] z-0 pointer-events-none">
        <div className="w-full h-full bg-hero-glow origin-top" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Pill Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-medium text-indigo-300 uppercase tracking-wider">Now Accepting New Clients</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
          Agency That Scales <br />
          <span className="animate-shine bg-[linear-gradient(to_right,#818cf8,#c084fc,#ffffff,#c084fc,#818cf8)] bg-[length:200%_auto] bg-clip-text text-transparent">
             Trending Motion
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          We combine data-driven marketing, cutting-edge branding, and robust web development to build experiences that convert.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button className="group relative px-8 py-3.5 bg-indigo-600 text-white font-medium rounded-full overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)]">
            <span className="relative z-10 flex items-center gap-2">
              Start Project <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          <button className="px-8 py-3.5 bg-white/5 text-white hover:bg-white/10 font-medium rounded-full border border-white/10 backdrop-blur-sm transition-all flex items-center gap-2">
            <Play size={16} className="fill-current" /> View Work
          </button>
        </div>

        {/* Dashboard Visual Mockup */}
        <div className="relative max-w-5xl mx-auto mt-12">
            {/* The glowing arc behind the image */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[120%] h-[500px] border border-indigo-500/20 rounded-[100%] bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none mask-image-gradient" />
            
            <div className="relative rounded-xl bg-[#0F101E] border border-white/10 shadow-2xl overflow-hidden p-2 md:p-4">
                <div className="absolute inset-0 bg-glass pointer-events-none" />
                
                {/* Browser Toolbar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0B0C15]">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                    </div>
                    <div className="mx-auto w-1/2 h-6 bg-white/5 rounded-md flex items-center justify-center text-[10px] text-slate-500 font-mono">
                        trendingmotion.com/analytics
                    </div>
                </div>

                {/* Dashboard Content Content */}
                <div className="grid grid-cols-12 gap-4 p-4 h-[300px] md:h-[500px] bg-[#0B0C15]">
                    {/* Sidebar */}
                    <div className="hidden md:block col-span-2 bg-white/5 rounded-lg border border-white/5 p-3 space-y-2">
                        {[1,2,3,4,5].map(i => (
                            <div key={i} className={`h-8 rounded-md w-full ${i === 1 ? 'bg-indigo-500/20 text-indigo-300' : 'bg-transparent'} flex items-center px-2`}>
                                <div className={`w-4 h-4 rounded ${i === 1 ? 'bg-indigo-500' : 'bg-slate-700'} mr-2`} />
                            </div>
                        ))}
                    </div>
                    
                    {/* Main Area */}
                    <div className="col-span-12 md:col-span-10 grid grid-cols-12 gap-4">
                        {/* Top Stats */}
                        <div className="col-span-12 md:col-span-4 bg-white/5 rounded-lg border border-white/5 p-4 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="h-2 w-12 bg-slate-700 rounded mb-4" />
                            <div className="h-8 w-24 bg-white/20 rounded mb-2" />
                            <div className="h-2 w-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-4 opacity-50" />
                        </div>
                        <div className="col-span-6 md:col-span-4 bg-white/5 rounded-lg border border-white/5 p-4">
                             <div className="h-2 w-12 bg-slate-700 rounded mb-4" />
                             <div className="h-8 w-24 bg-white/20 rounded mb-2" />
                             <div className="flex gap-1 mt-4 items-end h-10">
                                <div className="w-1/5 bg-indigo-500/30 h-[40%]" />
                                <div className="w-1/5 bg-indigo-500/50 h-[70%]" />
                                <div className="w-1/5 bg-indigo-500 h-[50%]" />
                                <div className="w-1/5 bg-indigo-500/60 h-[80%]" />
                                <div className="w-1/5 bg-indigo-500/40 h-[60%]" />
                             </div>
                        </div>
                        <div className="col-span-6 md:col-span-4 bg-white/5 rounded-lg border border-white/5 p-4">
                             <div className="h-2 w-12 bg-slate-700 rounded mb-4" />
                             <div className="h-8 w-24 bg-white/20 rounded mb-2" />
                             <div className="w-16 h-16 rounded-full border-4 border-violet-500 border-t-transparent mx-auto mt-2" />
                        </div>

                        {/* Big Chart */}
                        <div className="col-span-12 bg-white/5 rounded-lg border border-white/5 p-4 h-48 md:h-auto relative overflow-hidden">
                            <div className="flex justify-between mb-4">
                                <div className="h-4 w-32 bg-slate-700 rounded" />
                                <div className="h-4 w-16 bg-slate-700 rounded" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-500/10 to-transparent" />
                            {/* SVG Chart Line */}
                            <svg className="w-full h-full absolute bottom-0 left-0 p-4 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                                <path d="M0 80 C 20 70, 40 90, 60 40 S 80 10, 100 30" fill="none" stroke="url(#gradient)" strokeWidth="2" />
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#6366f1" />
                                        <stop offset="100%" stopColor="#a855f7" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;