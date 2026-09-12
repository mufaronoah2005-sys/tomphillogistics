import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Link } from 'react-router-dom';
import { 
  Car, 
  PackageCheck, 
  Plane, 
  Ship, 
  Truck, 
  DoorClosed, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

interface ServicesPageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuoteModal }) => {
  const [filter, setFilter] = useState<'all' | 'customs' | 'freight'>('all');

  const services = [
    {
      id: 'car-clearing',
      link: '/car-clearing',
      title: 'Car Clearing',
      category: 'customs',
      badge: 'Zimbabwe Specialist',
      icon: Car,
      desc: 'Vehicle import & export clearance into and out of Zimbabwe, ZIMRA Form 49 preparation, duty calculation assistance, port receipt (Durban / Dar es Salaam / Walvis Bay), and border clearance coordination.',
      features: [
        'ZIMRA duty & surtax calculation',
        'Bonded vehicle transit to Beitbridge & Forbes',
        'Private cars, commercial trucks & passenger buses',
        'Immigrant duty rebates & police clearance support',
      ],
    },
    {
      id: 'goods-clearing',
      link: '/goods-clearing',
      title: 'Goods Clearing',
      category: 'customs',
      badge: 'Commercial Cargo',
      icon: PackageCheck,
      desc: 'Comprehensive customs clearance for commercial cargo, manufacturing raw materials, mining machinery, agricultural inputs, and retail merchandise entering or exiting Zimbabwe.',
      features: [
        'Harmonized System (HS) tariff classification',
        'Pre-clearance border fast-tracking',
        'Bonded trucking to Harare Inland Container Depots',
        'Statutory Instrument (SI) rebate applications',
      ],
    },
    {
      id: 'air-freight',
      link: '/global-transport',
      title: 'Air Freight',
      category: 'freight',
      badge: 'Express Global',
      icon: Plane,
      desc: 'High-speed international air cargo forwarding connecting Zimbabwe directly with Asia, Europe, the UAE, and the Americas for time-critical and high-value merchandise.',
      features: [
        'Direct flights into RGM International Airport (Harare)',
        'Consolidated air freight & express charters',
        'Customs clearance upon airport arrival',
        'Secure high-value electronics & medical consignments',
      ],
    },
    {
      id: 'sea-freight',
      link: '/global-transport',
      title: 'Sea Freight (FCL & LCL)',
      category: 'freight',
      badge: 'Worldwide Ocean',
      icon: Ship,
      desc: 'Cost-efficient international ocean container shipping for heavy industrial machinery, bulk commodities, and consolidated merchandise through Durban, Beira, and Walvis Bay.',
      features: [
        'Full Container Load (FCL) 20ft & 40ft',
        'Less than Container Load (LCL) consolidation',
        'Intermodal road & rail on-carriage to Zimbabwe',
        'Bill of lading & port authority documentation',
      ],
    },
    {
      id: 'road-freight',
      link: '/global-transport',
      title: 'Road Freight',
      category: 'freight',
      badge: 'SADC Regional',
      icon: Truck,
      desc: 'Reliable cross-border overland trucking connecting South Africa, Mozambique, Zambia, Botswana, and Zimbabwe with dedicated full truckloads and regular groupage.',
      features: [
        'South Africa to Zimbabwe line-haul corridor',
        'Tautliners, flatbeds, and vehicle car carriers',
        'Continuous GPS route tracking & border liaison',
        'Consolidated break-bulk & heavy project cargo',
      ],
    },
    {
      id: 'door-to-door',
      link: '/quote',
      title: 'Door-to-Door Delivery',
      category: 'freight',
      badge: 'Full Turnkey',
      icon: DoorClosed,
      desc: 'Worry-free single-source logistics where we manage origin supplier collection, ocean/air carriage, border customs clearance, and final delivery directly to your door.',
      features: [
        'Overseas supplier pickup & warehousing',
        'All international shipping & border duties managed',
        'Single all-inclusive transparent invoice',
        'Final-mile handover across all Zimbabwe cities',
      ],
    },
  ];

  const filteredServices = services.filter((s) => {
    if (filter === 'all') return true;
    return s.category === filter;
  });

  return (
    <div className="bg-white">
      {/* Page Header */}
      <PageHeader
        title="Our Services"
        highlightText="Portfolio"
        subtitle="Explore our comprehensive logistics capabilities, from Zimbabwe vehicle and goods customs clearance to worldwide air, ocean, and overland freight forwarding."
        badge="From Zimbabwe to the World"
        breadcrumbs={[{ label: 'Services' }]}
        ctaText="Request A Quote"
        onCtaClick={() => onOpenQuoteModal()}
      />

      {/* Services Grid Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filters */}
          <div className="flex justify-center mb-14">
            <div className="inline-flex p-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  filter === 'all'
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-navy-900'
                }`}
              >
                All Capabilities
              </button>
              <button
                onClick={() => setFilter('customs')}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  filter === 'customs'
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-navy-900'
                }`}
              >
                Customs Clearing
              </button>
              <button
                onClick={() => setFilter('freight')}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  filter === 'freight'
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-navy-900'
                }`}
              >
                Freight Forwarding
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  className="bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-navy-500 shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-navy-50 text-navy-900 group-hover:bg-navy-900 group-hover:text-gold-400 flex items-center justify-center transition-colors shadow-sm">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-navy-800 border border-slate-200">
                        {svc.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-navy-950 uppercase tracking-tight font-display mb-3">
                      {svc.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {svc.desc}
                    </p>

                    <div className="space-y-2 mb-8">
                      {svc.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                    <Link
                      to={svc.link}
                      className="text-xs font-bold uppercase tracking-wider text-navy-900 hover:text-gold-600 transition-colors flex items-center gap-1.5"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={() => onOpenQuoteModal(svc.title)}
                      className="bg-navy-900 hover:bg-gold-500 text-white hover:text-navy-950 font-bold px-4 py-2 rounded-xl text-[11px] uppercase tracking-wider transition-colors shadow-xs"
                    >
                      Quote
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Mode Comparison Matrix Table */}
      <section className="py-16 lg:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h3 className="text-2xl sm:text-3xl font-black text-navy-950 uppercase font-display tracking-tight">
              Freight Mode Comparison Guide
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Select the optimal transportation method for your timeframe and cargo specifications.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
              <thead className="bg-navy-950 text-white uppercase tracking-wider font-display">
                <tr>
                  <th className="p-4">Freight Mode</th>
                  <th className="p-4">Typical Transit Time</th>
                  <th className="p-4">Best Suited For</th>
                  <th className="p-4">Cost Efficiency</th>
                  <th className="p-4">Key Gateways</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-navy-900 flex items-center gap-2">
                    <Plane className="w-4 h-4 text-gold-500" />
                    <span>Air Freight</span>
                  </td>
                  <td className="p-4 font-semibold text-slate-900">1 - 3 Days</td>
                  <td className="p-4">Urgent parts, pharmaceuticals, high-value tech</td>
                  <td className="p-4 text-amber-600 font-bold">Premium</td>
                  <td className="p-4">Harare RGM Airport (HRE)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-navy-900 flex items-center gap-2">
                    <Ship className="w-4 h-4 text-brandBlue-500" />
                    <span>Sea Freight (FCL/LCL)</span>
                  </td>
                  <td className="p-4 font-semibold text-slate-900">20 - 35 Days</td>
                  <td className="p-4">Heavy machinery, containerized retail, bulk commodities</td>
                  <td className="p-4 text-emerald-600 font-bold">Most Economical</td>
                  <td className="p-4">Durban, Beira, Walvis Bay</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-navy-900 flex items-center gap-2">
                    <Truck className="w-4 h-4 text-gold-500" />
                    <span>Road Freight (Cross-Border)</span>
                  </td>
                  <td className="p-4 font-semibold text-slate-900">2 - 5 Days</td>
                  <td className="p-4">Regional Southern African trade, consolidated freight</td>
                  <td className="p-4 text-emerald-600 font-bold">Moderate</td>
                  <td className="p-4">Beitbridge, Chirundu, Forbes</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-navy-900 flex items-center gap-2">
                    <Car className="w-4 h-4 text-navy-700" />
                    <span>Car Clearing &amp; Transit</span>
                  </td>
                  <td className="p-4 font-semibold text-slate-900">2 - 4 Days from Port</td>
                  <td className="p-4">Passenger vehicles, trucks, SUVs, returning residents</td>
                  <td className="p-4 text-slate-800 font-bold">Customs Dependent</td>
                  <td className="p-4">Durban / Walvis Bay to Beitbridge</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>
    </div>
  );
};
