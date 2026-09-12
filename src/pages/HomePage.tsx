import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ServiceHighlights } from '../components/ServiceHighlights';
import { CustomsClearing } from '../components/CustomsClearing';
import { GlobalTransport } from '../components/GlobalTransport';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { HowItWorks } from '../components/HowItWorks';
import { TrackTrace } from '../components/TrackTrace';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HomePageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div>
      {/* 1. Hero Section matching reference mockup */}
      <Hero onOpenQuoteModal={onOpenQuoteModal} />

      {/* 2. Service Highlights (4 cards immediately below hero) */}
      <ServiceHighlights onSelectService={(service) => onOpenQuoteModal(service)} />

      {/* 3. Zimbabwe Customs Clearing Specialists (Signature section from reference) */}
      <CustomsClearing onOpenQuoteModal={onOpenQuoteModal} />

      {/* 4. Global Transport (From Zimbabwe to the World) */}
      <GlobalTransport onSelectFreight={(mode) => onOpenQuoteModal(mode)} />

      {/* 5. Why Choose Tomphil Logistics */}
      <WhyChooseUs onOpenQuoteModal={() => onOpenQuoteModal()} />

      {/* 6. How It Works (4-Step process) */}
      <HowItWorks onOpenQuoteModal={() => onOpenQuoteModal()} />

      {/* 7. Track & Trace Section */}
      <TrackTrace />

      {/* 8. Conversion Pre-Footer Banner */}
      <section className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white py-16 border-t border-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-gold-400 uppercase tracking-widest mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Ready to Clear or Ship?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight font-display text-white">
              “Your Logistics. Our Priority.”
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base">
              Get an accurate customs clearance estimate for your vehicle, cargo, or international freight consignment today.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Hidden Fees</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Direct ZIMRA Compliance</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Real-Time Support</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <button
              onClick={() => onOpenQuoteModal()}
              className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 text-navy-950 font-black px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-wider shadow-glow-gold hover:shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-95"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-navy-800 hover:bg-navy-700 text-white font-bold px-7 py-4 rounded-full text-xs sm:text-sm uppercase tracking-wider border border-navy-700 transition-all text-center"
            >
              Contact Operations Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
