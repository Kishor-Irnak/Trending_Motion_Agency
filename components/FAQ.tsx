import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does it take to onboard my team?",
      answer: "Typically, our onboarding process takes 1-2 weeks depending on the complexity of your project. We ensure all stakeholders are aligned before we begin execution."
    },
    {
      question: "Is TrendingMotion really free to use?",
      answer: "We offer a free initial consultation to assess your needs. Our service packages are paid, but we provide transparent pricing with no hidden fees."
    },
    {
      question: "Is my data secure in TrendingMotion?",
      answer: "Absolutely. We use enterprise-grade encryption and adhere to strict data privacy protocols to ensure your business intelligence remains confidential."
    },
    {
      question: "Can I cancel or change my plan at any time?",
      answer: "Yes, our monthly retainers are flexible. We require a 30-day notice for cancellations to wrap up pending deliverables."
    }
  ];

  return (
    <section className="py-24 max-w-3xl mx-auto px-6">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">
             <span className="w-2 h-2 rounded-full bg-blue-500"></span> Frequently Asked Questions
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Everything You Need to Know <br/> Before Getting Started</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border-b border-white/10 pb-4"
          >
            <button 
              className="w-full flex items-center justify-between py-4 text-left focus:outline-none group"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className={`text-sm font-medium transition-colors ${openIndex === index ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                {faq.question}
              </span>
              <span className="text-slate-500 group-hover:text-white transition-colors">
                {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-slate-400 text-sm pb-4 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;