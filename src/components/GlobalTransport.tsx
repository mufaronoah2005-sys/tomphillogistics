import React from 'react';
import { Plane, Ship, Truck, Globe2, ArrowRight, Navigation, Check } from 'lucide-react';

interface GlobalTransportProps {
  onSelectFreight: (mode: string) => void;
}

export const GlobalTransport: React.FC<GlobalTransportProps> = ({ onSelectFreight }) => {
  const routes = [
    { from: 'Harare, Zimbabwe', to: 'Durban Port, South Africa', type: 'Road & Rail Corridor', days: '2-4 Days' },
    { from: 'Harare, Zimbabwe', to: 'Beira Port, Mozambique', type: 'Shortest Ocean Gateway', days: '2-3 Days' },
    { from: 'Dubai (DXB), UAE', to: 'Harare (HRE)', type: 'Air Cargo Express', days: '1-3 Days' },
    { from: 'Guangzhou / Shenzhen, China', to: 'Harare via Beira/Durban', type: 'Ocean FCL/LCL', days: '25-35 Days' },
    { from: 'London / Frankfurt, Europe', to: 'Harare (HRE)', type: 'Priority Air Freight', days: '2-4 Days' },
    { from: 'Walvis Bay, Namibia', to: 'Zimbabwe via Trans-Kalahari', type: 'Alternative Ocean Transit', days: '4-6 Days' },
  ];

  return (
    <section id="global-transport" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-gold-600 font-extrabold text-xs tracking-widest uppercase mb-3">
            <span className="w-6 h-0.5 bg-gold-500"></span>
            <span>Worldwide Logistics Solutions</span>
            <span className="w-6 h-0.5 bg-gold-500"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 uppercase tracking-tight font-display">
            From Zimbabwe <span className="text-brandBlue-600">To The World</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Wherever your cargo needs to go, Tomphil Logistics coordinates reliable transportation solutions by air, sea and road.
          </p>
        </div>

        {/* Global Map & Route Network Visualization */}
        <div className="mb-16 rounded-3xl bg-navy-950 p-6 sm:p-10 border border-navy-800 text-white shadow-premium relative overflow-hidden">
          {/* World map stylized background vector */}
          <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
            <svg viewBox="0 0 1000 500" className="w-full h-full object-cover">
              <path
                d="M150,150 Q180,100 250,120 T350,140 T400,100 T550,120 T700,80 T850,120 T950,180 T850,300 T750,380 T600,420 T450,350 T300,400 T180,300 Z"
                fill="none"
                stroke="#0284C7"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d="M520,320 L580,220 M520,320 L780,180 M520,320 L480,160 M520,320 L500,420 M520,320 L300,200"
                stroke="#F59E0B"
                strokeWidth="2"
                strokeDasharray="6 4"
              />
              {/* Nodes */}
              <circle cx="520" cy="320" r="8" fill="#F59E0B" className="animate-ping" />
              <circle cx="520" cy="320" r="6" fill="#F59E0B" />
              <circle cx="580" cy="220" r="5" fill="#38BDF8" />
              <circle cx="780" cy="180" r="5" fill="#38BDF8" />
              <circle cx="480" cy="160" r="5" fill="#38BDF8" />
              <circle cx="500" cy="420" r="5" fill="#38BDF8" />
              <circle cx="300" cy="200" r="5" fill="#38BDF8" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-gold-400 uppercase tracking-widest mb-3">
                <Globe2 className="w-4 h-4" />
                <span>Intermodal Freight Hub</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-display leading-tight mb-4">
                Seamless Cargo Movement Across 4 Continents
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Our established global carrier partnerships allow effortless cargo consolidation, whether importing containerized merchandise from Asia, machinery from Europe, or personal vehicles via Southern African ports.
              </p>
              <div className="p-4 rounded-2xl bg-navy-900/90 border border-navy-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase text-white">Central African Gateway</h5>
                  <p className="text-[11px] text-slate-400 mt-0.5">Connecting landlocked Zimbabwe with world-class maritime ports.</p>
                </div>
              </div>
            </div>

            {/* Popular Trade Corridors Table */}
            <div className="lg:col-span-7">
              <h4 className="text-xs font-extrabold uppercase text-gold-400 tracking-widest mb-3">
                Key Cross-Border &amp; Global Trade Lanes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {routes.map((rt, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-navy-900/80 border border-navy-800 hover:border-gold-500/40 transition-colors"
                  >
                    <div className="flex justify-between items-start text-xs font-bold mb-1">
                      <span className="text-white">{rt.from}</span>
                      <span className="text-gold-400 text-[11px]">{rt.days}</span>
                    </div>
                    <div className="text-slate-400 text-[11px] flex items-center gap-1.5">
                      <span>↓ to {rt.to}</span>
                    </div>
                    <div className="text-[10px] text-brandBlue-300 font-semibold mt-1">
                      {rt.type}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Large Transport Cards matching prompt specifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Air Freight */}
          <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-8 flex flex-col justify-between hover:shadow-premium hover:border-navy-400 transition-all duration-300 group">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                <Plane className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-navy-950 uppercase tracking-tight font-display mb-2">
                Air Freight
              </h3>
              <p className="text-xs font-bold uppercase text-brandBlue-600 tracking-wider mb-4">
                Fast International Cargo
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                When transit time is paramount. Ideal for perishable items, urgently required industrial components, electronics, pharmaceuticals, and high-value consignments.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Direct flights into Harare (HRE) &amp; Bulawayo</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Scheduled airline &amp; cargo freighter space</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Customs airport ground-handling and swift clearance</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onSelectFreight('Air Freight')}
              className="w-full bg-white hover:bg-navy-900 text-navy-900 hover:text-gold-400 border border-slate-300 hover:border-navy-900 font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <span>Get Air Freight Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: Sea Freight */}
          <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-8 flex flex-col justify-between hover:shadow-premium hover:border-navy-400 transition-all duration-300 group">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                <Ship className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-navy-950 uppercase tracking-tight font-display mb-2">
                Sea Freight
              </h3>
              <p className="text-xs font-bold uppercase text-brandBlue-600 tracking-wider mb-4">
                Reliable Container Shipping Worldwide
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                The most cost-effective solution for heavy machinery, bulk commodities, containerized commercial goods, and Roll-on/Roll-off (RoRo) vehicle shipments.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>FCL (20ft / 40ft) and LCL groupage consolidations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Ports: Durban, Beira, Walvis Bay, Dar es Salaam</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>RoRo vehicle shipping direct from Japan, UK &amp; UAE</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onSelectFreight('Sea Freight')}
              className="w-full bg-white hover:bg-navy-900 text-navy-900 hover:text-gold-400 border border-slate-300 hover:border-navy-900 font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <span>Get Ocean Freight Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3: Road Freight */}
          <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-8 flex flex-col justify-between hover:shadow-premium hover:border-navy-400 transition-all duration-300 group">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-navy-950 uppercase tracking-tight font-display mb-2">
                Road Freight
              </h3>
              <p className="text-xs font-bold uppercase text-brandBlue-600 tracking-wider mb-4">
                Regional &amp; Cross-Border Transport
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Direct overland arterial transport spanning Southern Africa. Bonded and insured line-haul trucks with continuous border fast-tracking.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>South Africa to Zimbabwe cross-border express</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Vehicle car carriers &amp; flatbed heavy haulage</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Dedicated FTL &amp; regular consolidated cargo</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onSelectFreight('Road Freight')}
              className="w-full bg-white hover:bg-navy-900 text-navy-900 hover:text-gold-400 border border-slate-300 hover:border-navy-900 font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <span>Get Road Freight Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
