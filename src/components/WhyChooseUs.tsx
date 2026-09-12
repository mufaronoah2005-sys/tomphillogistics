import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Globe2, 
  FileText, 
  Shuffle, 
  HeartHandshake, 
  Clock, 
  ArrowRight 
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenQuoteModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuoteModal }) => {
  const benefits = [
    {
      icon: Clock,
      title: 'Reliable Service',
      description:
        'Punctual collections, monitored transit, and committed turnaround times so your cargo arrives without unpredicted delays.',
      accent: 'text-amber-500',
      badge: 'Dependable',
    },
    {
      icon: ShieldCheck,
      title: 'Zimbabwe Customs Expertise',
      description:
        'Deep mastery of ZIMRA customs regulations, tariff classifications, duty valuations, and compliance requirements for both private and corporate importers.',
      accent: 'text-emerald-500',
      badge: 'ZIMRA Specialists',
    },
    {
      icon: Globe2,
      title: 'Global Freight Solutions',
      description:
        'Comprehensive multimodal logistics connecting Zimbabwe by air, sea, and road to international manufacturing hubs across Africa, Europe, Asia, and the Americas.',
      accent: 'text-sky-500',
      badge: 'Worldwide',
    },
    {
      icon: FileText,
      title: 'Professional Documentation Support',
      description:
        'Meticulous handling of Bills of Entry, commercial invoices, transit bonds, police clearances, and import/export permits with zero paperwork errors.',
      accent: 'text-indigo-500',
      badge: 'Flawless Paperwork',
    },
    {
      icon: Shuffle,
      title: 'End-to-End Logistics',
      description:
        'From overseas supplier pickup, international freight forwarding, and border clearing to final-mile doorstep delivery across Zimbabwe.',
      accent: 'text-cyan-500',
      badge: 'Turnkey Solution',
    },
    {
      icon: HeartHandshake,
      title: 'Customer-Focused Service',
      description:
        'Direct, transparent communication through WhatsApp, phone, and email with dedicated logistics agents who prioritize your specific shipment needs.',
      accent: 'text-rose-500',
      badge: 'Personalized Care',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-gold-600 font-extrabold text-xs tracking-widest uppercase mb-3">
            <span className="w-6 h-0.5 bg-gold-500"></span>
            <span>The Tomphil Advantage</span>
            <span className="w-6 h-0.5 bg-gold-500"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 uppercase tracking-tight font-display">
            Why Choose <span className="text-brandBlue-600">Tomphil Logistics?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            We eliminate the complexity and stress of customs clearing and freight forwarding with professional precision, transparent communication, and trusted border execution.
          </p>
        </div>

        {/* 6 Core Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="group rounded-3xl bg-white p-8 border border-slate-200/90 hover:border-navy-600 shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors duration-300 shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {b.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy-950 uppercase tracking-tight font-display mb-3">
                    {b.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {b.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Tomphil Service Commitment</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-navy-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-navy-800">
          <div>
            <h4 className="text-xl font-bold font-display uppercase text-white">
              Experience Seamless Freight &amp; Customs Clearing Today
            </h4>
            <p className="text-sm text-slate-300 mt-1">
              Have questions regarding duties, documentation, or international transport?
            </p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="flex-shrink-0 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold px-7 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-2 shadow-md"
          >
            <span>Talk To Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
