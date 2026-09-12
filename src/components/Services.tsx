import React, { useState } from 'react';
import { 
  Car, 
  PackageCheck, 
  Plane, 
  Ship, 
  Truck, 
  DoorClosed, 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

interface ServicesProps {
  onSelectServiceForQuote: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForQuote }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'customs' | 'freight'>('all');

  const servicesData = [
    {
      id: 'car-clearing',
      title: 'Car Clearing',
      category: 'customs',
      tag: 'Specialist In & Out of Zimbabwe',
      icon: Car,
      description:
        'Complete end-to-end vehicle import and export clearance for passenger cars, SUVs, bakkies, commercial trucks, and buses entering or exiting Zimbabwe.',
      features: [
        'Vehicle customs clearance & ZIMRA documentation',
        'Duty and tax calculation & valuation assistance',
        'Port-to-destination transport (Durban/Walvis Bay/Dar es Salaam to Zimbabwe)',
        'Border clearance coordination at Beitbridge, Forbes & Chirundu',
        'Temporary Import Permits (TIP) & transit bonds',
        'Police clearance & vehicle registration guidance',
      ],
      highlight: 'Turnkey Vehicle Clearance',
    },
    {
      id: 'goods-clearing',
      title: 'Goods Clearing',
      category: 'customs',
      tag: 'Commercial & General Cargo',
      icon: PackageCheck,
      description:
        'Professional customs clearance for commercial consignments, raw materials, industrial machinery, and consumer goods crossing Zimbabwean borders.',
      features: [
        'Import & export customs clearance & compliance',
        'Commercial cargo & consolidated consignment processing',
        'Heavy industrial equipment & agricultural machinery',
        'Tariff classification & duty optimization',
        'Tariff exemptions & rebate schemes advice',
        'Fast border release with minimal demurrage',
      ],
      highlight: 'Zero Clearance Delays',
    },
    {
      id: 'air-freight',
      title: 'Air Freight',
      category: 'freight',
      tag: 'Fast Global Cargo',
      icon: Plane,
      description:
        'High-speed international air cargo transportation connecting Zimbabwe to global suppliers across China, Europe, UAE, USA, and regional African capitals.',
      features: [
        'Urgent & time-critical freight dispatch',
        'Direct airport handling at RGM International Airport (Harare)',
        'Charter services for heavy or sensitive cargo',
        'Secure high-value goods forwarding',
        'Airport customs clearance upon touchdown',
        'Scheduled global carrier consolidation',
      ],
      highlight: 'Express Global Reach',
    },
    {
      id: 'sea-freight',
      title: 'Sea Freight',
      category: 'freight',
      tag: 'Container Shipping Worldwide',
      icon: Ship,
      description:
        'Economical ocean freight forwarding for large volumes, industrial machinery, and international merchandise connecting all major global seaports.',
      features: [
        'Full Container Load (FCL) 20ft & 40ft containers',
        'Less than Container Load (LCL) cargo consolidation',
        'Strategic port routing via Durban, Beira & Walvis Bay',
        'Port handling, terminal charges & bonded transit',
        'Vessel tracking & container status updates',
        'Complete bill of lading & shipping document control',
      ],
      highlight: 'FCL & LCL Ocean Solutions',
    },
    {
      id: 'road-freight',
      title: 'Road Freight',
      category: 'freight',
      tag: 'Cross-Border & Regional',
      icon: Truck,
      description:
        'Reliable cross-border overland trucking spanning Southern Africa (SADC), connecting South Africa, Mozambique, Zambia, Botswana, and Zimbabwe.',
      features: [
        'Regional cross-border line-haul trucking',
        'Dedicated full truckload (FTL) & consolidated groupage',
        'Flatbeds, step-decks & container chassis',
        'Pre-clearance border fast-tracking at Beitbridge',
        'Cargo in-transit tracking & route security',
        'Bulk commodities & palletized merchandise',
      ],
      highlight: 'Southern Africa Arteries',
    },
    {
      id: 'door-to-door',
      title: 'Door-to-Door Delivery',
      category: 'freight',
      tag: 'Origin to Final Destination',
      icon: DoorClosed,
      description:
        'Worry-free comprehensive logistics where we collect cargo from your overseas supplier, clear customs, and deliver safely to your doorstep in Zimbabwe.',
      features: [
        'End-to-end single point of contact logistics',
        'Overseas factory pickup & local warehouse delivery',
        'Complete customs & border duties handled',
        'Tailgate unloading & final-mile distribution',
        'No surprise charges with transparent quotes',
        'Personal, commercial & project shipments',
      ],
      highlight: 'Complete Hands-Off Shipping',
    },
  ];

  const filteredServices = servicesData.filter((s) => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory;
  });

  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-gold-600 font-extrabold text-xs tracking-widest uppercase mb-3">
            <span className="w-6 h-0.5 bg-gold-500"></span>
            <span>Comprehensive Logistics Portfolio</span>
            <span className="w-6 h-0.5 bg-gold-500"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 uppercase tracking-tight font-display">
            Our Core <span className="text-brandBlue-600">Services</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From vehicle and goods clearance into Zimbabwe to worldwide air, ocean, and overland freight, we deliver precision at every milestone.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-slate-100 border border-slate-200">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-navy-900'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveCategory('customs')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === 'customs'
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-navy-900'
              }`}
            >
              Customs Clearing
            </button>
            <button
              onClick={() => setActiveCategory('freight')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === 'freight'
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-navy-900'
              }`}
            >
              Freight &amp; Transport
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group rounded-3xl bg-white border border-slate-200/90 p-8 shadow-sm hover:shadow-premium hover:border-navy-500 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-navy-900 via-brandBlue-500 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div>
                  {/* Service Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-navy-50 group-hover:bg-navy-900 text-navy-900 group-hover:text-gold-400 flex items-center justify-center transition-all duration-300 border border-navy-100">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-navy-800 border border-slate-200">
                      {service.highlight}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-navy-950 uppercase tracking-tight font-display mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs font-bold text-gold-600 tracking-wider uppercase mb-4">
                    {service.tag}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2.5 mb-8">
                    <div className="text-xs font-bold uppercase text-navy-900 tracking-wider flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-brandBlue-600" />
                      <span>Key Features &amp; Capabilities</span>
                    </div>
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectServiceForQuote(service.title)}
                    className="w-full bg-navy-50 hover:bg-navy-900 text-navy-900 hover:text-gold-400 font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-md"
                  >
                    <span>Request Quote for {service.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Zimbabwe Specialization Banner Box */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-navy-950 via-navy-900 to-navy-800 p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-premium border border-navy-700">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-widest mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Zimbabwe Import &amp; Export Compliance Guarantee</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-white">
              Need Assistance With Vehicle Duty Calculations Or Goods Clearance?
            </h4>
            <p className="mt-2 text-sm text-slate-300">
              Our customs brokers coordinate directly with border posts to evaluate duty tariffs, verify invoices, and secure swift border release.
            </p>
          </div>
          <button
            onClick={() => onSelectServiceForQuote('Car Clearing')}
            className="flex-shrink-0 bg-gold-500 hover:bg-gold-600 text-navy-950 font-black px-7 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all transform hover:scale-105 active:scale-95"
          >
            Enquire With Specialist
          </button>
        </div>

      </div>
    </section>
  );
};
