import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-green-900/30 text-green-400 text-xs font-bold uppercase">Pricing</div>
            <h2 className="text-4xl font-bold text-white mb-4">Plans Made for Teams of All Sizes</h2>
            <p className="text-slate-400">From startups to enterprises, choose the right plan to keep projects on track.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-end">
            
            {/* Basic Plan */}
            <div className="bg-[#0F101E] border border-white/10 rounded-2xl p-8">
                <h3 className="text-white font-medium text-lg mb-2">Starter</h3>
                <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-bold text-white">$999</span>
                    <span className="text-slate-500 text-sm">/project</span>
                </div>
                <p className="text-slate-400 text-sm mb-6">Perfect for small businesses needing a brand refresh.</p>
                <button className="w-full py-2 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-colors text-sm font-medium mb-8">
                    Get Started
                </button>
                <ul className="space-y-3">
                    {['Logo Design', 'Basic Brand Guidelines', 'Social Media Assets', '2 Revisions'].map(feat => (
                        <li key={feat} className="flex items-center gap-3 text-sm text-slate-300">
                            <Check size={14} className="text-indigo-500" /> {feat}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Pro Plan (Highlighted) */}
            <div className="bg-[#0F101E] border border-indigo-500/50 rounded-2xl p-8 relative shadow-[0_0_40px_-10px_rgba(79,70,229,0.3)] scale-105 z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-indigo-600 rounded-full text-[10px] font-bold uppercase text-white tracking-wide">
                    Most Popular
                </div>
                <h3 className="text-white font-medium text-lg mb-2">Growth</h3>
                <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-bold text-white">$2,499</span>
                    <span className="text-slate-500 text-sm">/month</span>
                </div>
                <p className="text-slate-400 text-sm mb-6">For growing teams who need better integration.</p>
                <button className="w-full py-2.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors text-sm font-medium mb-8 shadow-lg shadow-indigo-500/25">
                    Start Free Trial
                </button>
                <ul className="space-y-3">
                    {['Everything in Starter', 'Web Development (5 pages)', 'SEO Optimization', 'Monthly Analytics Report', 'Priority Support'].map(feat => (
                        <li key={feat} className="flex items-center gap-3 text-sm text-slate-300">
                            <Check size={14} className="text-indigo-500" /> {feat}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-[#0F101E] border border-white/10 rounded-2xl p-8">
                <h3 className="text-white font-medium text-lg mb-2">Business</h3>
                <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-bold text-white">$4,999</span>
                    <span className="text-slate-500 text-sm">/month</span>
                </div>
                <p className="text-slate-400 text-sm mb-6">For companies that need robust security and scale.</p>
                <button className="w-full py-2 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-colors text-sm font-medium mb-8">
                    Contact Sales
                </button>
                <ul className="space-y-3">
                    {['Full Custom Web App', 'Advanced Marketing Funnels', 'Dedicated Account Manager', 'Custom Integrations', '24/7 SLA Support'].map(feat => (
                        <li key={feat} className="flex items-center gap-3 text-sm text-slate-300">
                            <Check size={14} className="text-indigo-500" /> {feat}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;