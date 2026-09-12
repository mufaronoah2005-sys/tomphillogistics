import React from 'react';
import { ArrowRight, Truck, PackageCheck, Globe2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section
      id="home"
      className="relative min-h-[72vh] lg:min-h-[82vh] flex flex-col justify-center bg-navy-950 overflow-hidden pt-24 sm:pt-28 pb-12 sm:pb-16"
    >
      {/* ========================================================
          CINEMATIC LAYERED LOGISTICS SCENE (Existing Photo)
          ======================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        
        {/* Layer 1: Base Logistics Scene with subtle cinematic pan */}
        <div className="absolute inset-0 animate-cinematic-bg">
          <img
            src="/images/hero-clean-bg.jpg"
            alt="International Logistics: Cargo Aircraft, Freight Truck and Container Ship"
            className="w-full h-full object-cover object-right md:object-center opacity-90 scale-[1.03]"
          />
        </div>

        {/* Layer 2: Real Airplane with Natural Flight Motion */}
        {/* Uses the isolated plane layer positioned directly over the sky */}
        <div 
          className="absolute inset-0 animate-real-plane hidden md:block"
          style={{ clipPath: 'polygon(46% 0%, 78% 0%, 78% 50%, 46% 50%)' }}
        >
          <img
            src="/images/hero-clean-bg.jpg"
            alt="Real Cargo Airplane in Natural Flight"
            className="w-full h-full object-cover object-right md:object-center"
          />
          {/* Subtle soft aerodynamic engine heat wave / contrail blend */}
          <div className="absolute top-[28%] left-[55%] w-24 h-2 bg-gradient-to-r from-white/20 via-sky-300/10 to-transparent blur-sm transform rotate-[3deg] pointer-events-none"></div>
        </div>

        {/* Layer 3: Real Truck with Natural Road Suspension & Travel Motion */}
        {/* Uses the isolated realistic truck on the road with pneumatic suspension */}
        <div 
          className="absolute inset-0 animate-real-truck hidden sm:block"
          style={{ clipPath: 'polygon(43% 30%, 65% 30%, 65% 94%, 43% 94%)' }}
        >
          <img
            src="/images/hero-clean-bg.jpg"
            alt="Real Freight Truck in Road Motion"
            className="w-full h-full object-cover object-right md:object-center"
          />
        </div>

        {/* Layer 4: Subtle Tire Asphalt Grounding Shadow (keeps truck firmly planted on road) */}
        <div 
          className="absolute bottom-[6%] right-[36%] w-72 h-4 bg-navy-950/70 rounded-full blur-md animate-tire-shadow pointer-events-none hidden sm:block"
        ></div>

        {/* Layer 5: Subtle Headlight Road Illumination Pulse */}
        <div 
          className="absolute bottom-[8%] right-[33%] w-28 h-8 bg-gradient-to-r from-amber-100/20 via-yellow-200/5 to-transparent rounded-full blur-sm transform rotate-1 animate-headlight-pulse pointer-events-none hidden sm:block"
        ></div>

        {/* Deep Navy Gradient Overlays to guarantee flawless typography readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-transparent md:w-3/4 lg:w-3/5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40 lg:hidden"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12 w-full">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Tagline pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900/90 border border-brandBlue-500/40 text-brandBlue-300 text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-3 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
            <span>International &amp; Zimbabwe Logistics Solutions</span>
          </div>

          {/* Main Headline matching reference */}
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white uppercase tracking-tight font-display leading-[1.15] drop-shadow-md">
            We Move Your <br className="hidden sm:inline" />
            <span className="text-gold-500 underline decoration-brandBlue-500/50 decoration-4 underline-offset-8">
              World
            </span>
          </h1>

          {/* Supporting Headlines */}
          <p className="mt-3 text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-lg">
            Reliable logistics. Seamless car and goods clearing. Global transport. From anywhere to everywhere.
          </p>

          <p className="mt-1.5 text-xs text-slate-400 font-medium max-w-md hidden sm:block">
            From Zimbabwe to the world, we handle your vehicles, goods and cargo with professionalism, speed, and utmost care.
          </p>

          {/* Hero 3 Feature Badges matching reference screenshot */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-lg">
            {/* Badge 1: Car Clearing */}
            <Link
              to="/car-clearing"
              className="flex items-center gap-2.5 p-2 rounded-xl bg-navy-900/85 border border-navy-700/70 backdrop-blur-md hover:border-gold-500/50 transition-colors group"
            >
              <div className="p-1.5 rounded-lg bg-gold-500/10 text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                <Truck className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-white tracking-wider uppercase">Car Clearing</span>
                <span className="text-[10px] text-slate-300">In &amp; Out of Zimbabwe</span>
              </div>
            </Link>

            {/* Badge 2: Goods Clearing */}
            <Link
              to="/goods-clearing"
              className="flex items-center gap-2.5 p-2 rounded-xl bg-navy-900/85 border border-navy-700/70 backdrop-blur-md hover:border-gold-500/50 transition-colors group"
            >
              <div className="p-1.5 rounded-lg bg-brandBlue-500/10 text-brandBlue-400 group-hover:bg-brandBlue-500 group-hover:text-white transition-colors">
                <PackageCheck className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-white tracking-wider uppercase">Goods Clearing</span>
                <span className="text-[10px] text-slate-300">In &amp; Out of Zimbabwe</span>
              </div>
            </Link>

            {/* Badge 3: Global Transport */}
            <Link
              to="/global-transport"
              className="flex items-center gap-2.5 p-2 rounded-xl bg-navy-900/85 border border-navy-700/70 backdrop-blur-md hover:border-gold-500/50 transition-colors group"
            >
              <div className="p-1.5 rounded-lg bg-gold-500/10 text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                <Globe2 className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-white tracking-wider uppercase">Global Transport</span>
                <span className="text-[10px] text-slate-300">Air | Sea | Road</span>
              </div>
            </Link>
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-black px-6 py-3 rounded-full text-xs sm:text-sm uppercase tracking-wider shadow-glow-gold hover:shadow-lg transition-all duration-200 flex items-center gap-2 transform hover:-translate-y-0.5 active:scale-95"
            >
              <span>Get a Quote Today</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/services"
              className="px-5 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white border border-slate-400/60 hover:border-white hover:bg-white/10 backdrop-blur-sm transition-all duration-200"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Trust reassurance pills */}
          <div className="mt-5 flex items-center gap-4 text-slate-400 text-xs">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
              <span>ZIMRA Compliant Clearing</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
              <span>Direct Port &amp; Border Desks</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
