import React from 'react';
import { ShieldCheck, Compass, CheckCircle, MapPin, Award, Building2 } from 'lucide-react';

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Subtle decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0A1931_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual & Value Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-premium bg-navy-950 p-8 text-white border border-navy-800">
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-gold-500/10 rounded-full blur-2xl"></div>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 text-gold-400 text-xs font-bold uppercase tracking-widest mb-6 border border-navy-700">
                <Award className="w-4 h-4" />
                <span>Our Core Identity</span>
              </div>

              <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-white mb-4">
                Your Cargo. <br />
                <span className="text-gold-400">Our Supreme Priority.</span>
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Specialized in cross-border customs clearance, port-to-border forwarding, and door-to-door freight. We bridge Zimbabwe with international trade hubs.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-navy-800 text-left">
                <div className="p-3.5 rounded-xl bg-navy-900 border border-navy-800">
                  <div className="text-gold-400 font-bold text-sm uppercase">Customs Desk</div>
                  <div className="text-slate-400 text-xs mt-1">ZIMRA Documentation &amp; Duty Assistance</div>
                </div>
                <div className="p-3.5 rounded-xl bg-navy-900 border border-navy-800">
                  <div className="text-gold-400 font-bold text-sm uppercase">Global Routes</div>
                  <div className="text-slate-400 text-xs mt-1">Air, Ocean &amp; Cross-Border Road</div>
                </div>
              </div>
            </div>

            {/* Key Corridors Badge Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-navy-900 font-bold text-xs uppercase tracking-wider mb-3">
                <MapPin className="w-4 h-4 text-gold-600" />
                <span>Major Trade Corridors Served</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Beitbridge Border', 'Chirundu Border', 'Forbes / Mutare', 'Durban Port Link', 'Beira Corridor', 'Walvis Bay Transit', 'Harare Airport (RGM)'].map((corridor) => (
                  <span
                    key={corridor}
                    className="px-3 py-1 bg-navy-50 text-navy-900 text-xs font-semibold rounded-full border border-navy-100"
                  >
                    {corridor}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Story & Principles */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-gold-600 font-extrabold text-xs tracking-widest uppercase mb-3">
              <span className="w-6 h-0.5 bg-gold-500"></span>
              <span>About Tomphil Logistics</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 uppercase tracking-tight font-display mb-6 leading-tight">
              Logistics You <span className="text-brandBlue-600">Can Trust</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-6">
              Tomphil Logistics is a professional logistics and customs clearing company helping individuals and businesses move vehicles and goods efficiently into and out of Zimbabwe. We combine customs expertise, transportation coordination and international freight solutions to simplify the movement of cargo across borders.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              Whether you are importing a private motor vehicle via Durban or Dar es Salaam, shipping commercial containerized cargo through Beira, or flying critical machinery into Harare, Tomphil Logistics manages the entire journey with total transparency, regulatory compliance, and speed.
            </p>

            {/* Core Emphasis Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                <div className="p-2 rounded-lg bg-navy-100 text-navy-900 flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-navy-800" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-950 uppercase">Zimbabwe Customs Expertise</h4>
                  <p className="text-xs text-slate-600 mt-1">In-depth tariff codes, duty valuation, and compliant document processing.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                <div className="p-2 rounded-lg bg-brandBlue-100 text-brandBlue-800 flex-shrink-0">
                  <Compass className="w-5 h-5 text-brandBlue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-950 uppercase">International Logistics</h4>
                  <p className="text-xs text-slate-600 mt-1">Seamless freight partnerships across Africa, Asia, Europe, and UAE.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                <div className="p-2 rounded-lg bg-gold-100 text-gold-900 flex-shrink-0">
                  <Building2 className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-950 uppercase">Reliable Transportation</h4>
                  <p className="text-xs text-slate-600 mt-1">Carrier vetting, safe vehicle transit, and secure cargo handling.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                <div className="p-2 rounded-lg bg-emerald-100 text-emerald-900 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-950 uppercase">Customer-Focused Solutions</h4>
                  <p className="text-xs text-slate-600 mt-1">Direct communication via WhatsApp and phone with personalized updates.</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="bg-navy-900 hover:bg-navy-800 text-white font-bold px-7 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md"
              >
                Explore Full Services
              </a>
              <button
                onClick={onOpenQuoteModal}
                className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold px-7 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md"
              >
                Request Consultation
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
