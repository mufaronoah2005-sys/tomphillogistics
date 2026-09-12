import React from 'react';
import { FileText, Route, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenQuoteModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenQuoteModal }) => {
  const steps = [
    {
      number: '01',
      title: 'REQUEST A QUOTE',
      subtitle: 'Fast Cargo Assessment',
      icon: FileText,
      description:
        'Fill out our simple online quote form or message us directly on WhatsApp with your vehicle specs or cargo details.',
    },
    {
      number: '02',
      title: 'PLAN YOUR SHIPMENT',
      subtitle: 'Clearance & Route Strategy',
      icon: Route,
      description:
        'Our customs brokers review paperwork, verify tariff codes, evaluate duty assessments, and select the optimal air, sea, or road transit.',
    },
    {
      number: '03',
      title: 'CLEAR & TRANSPORT',
      subtitle: 'Border & Freight Execution',
      icon: ShieldCheck,
      description:
        'We execute ZIMRA clearance at Beitbridge, Forbes, Chirundu, or airport terminals, and oversee secure line-haul transportation.',
    },
    {
      number: '04',
      title: 'DELIVERED SAFELY',
      subtitle: 'Final Handover',
      icon: CheckCircle2,
      description:
        'Your cleared motor vehicle, machinery, or commercial merchandise is handed over safely at your preferred address or depot.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-gold-600 font-extrabold text-xs tracking-widest uppercase mb-3">
            <span className="w-6 h-0.5 bg-gold-500"></span>
            <span>Simple 4-Step Process</span>
            <span className="w-6 h-0.5 bg-gold-500"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 uppercase tracking-tight font-display">
            How It <span className="text-brandBlue-600">Works</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From initial enquiry to safe handover, our structured workflow ensures prompt clearance and hassle-free transit.
          </p>
        </div>

        {/* Steps Flow Grid */}
        <div className="relative">
          {/* Connecting Line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-navy-900 via-brandBlue-500 to-gold-500 -translate-y-12 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="rounded-3xl bg-slate-50 border border-slate-200/90 p-8 hover:shadow-premium hover:border-navy-600 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-navy-900 text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 flex items-center justify-center transition-colors duration-300 shadow-md">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-3xl font-black text-slate-300 group-hover:text-gold-500 transition-colors font-display">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-navy-950 uppercase tracking-tight font-display mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs font-bold text-gold-600 tracking-wider uppercase mb-4">
                      {step.subtitle}
                    </p>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-navy-800">
                    <span>Phase {step.number}</span>
                    <span className="text-brandBlue-600 font-extrabold">Complete Control</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-3 bg-navy-900 hover:bg-navy-800 text-white font-bold px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all"
          >
            <span>Start Step 01: Request a Quote</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
