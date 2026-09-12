import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { GlobalTransport } from '../components/GlobalTransport';
import { Ship, Truck, Clock, Anchor, MapPin } from 'lucide-react';

interface GlobalTransportPageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const GlobalTransportPage: React.FC<GlobalTransportPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <PageHeader
        title="Global Transport"
        highlightText="Air | Sea | Road"
        subtitle="Worldwide multimodal freight forwarding connecting Zimbabwe with key global suppliers across Asia, Europe, the Middle East, and the Americas."
        badge="Worldwide Logistics Solutions"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'Global Transport' }]}
        ctaText="Get Freight Quote"
        onCtaClick={() => onOpenQuoteModal('Global Transport')}
      />

      {/* Global Transport Core Component with Map */}
      <GlobalTransport onSelectFreight={(mode) => onOpenQuoteModal(mode)} />

      {/* Port Corridors Deep Dive */}
      <section className="py-16 lg:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block mb-2">
              Strategic Gateways
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-navy-950 uppercase font-display tracking-tight">
              Major Maritime &amp; Air Corridors
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              How we connect landlocked Zimbabwe to international shipping lines and airlines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Durban Corridor */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center mb-6">
                  <Anchor className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-navy-950 uppercase font-display mb-1">
                  Durban Port Corridor
                </h4>
                <span className="text-xs font-bold text-brandBlue-600 uppercase tracking-wider block mb-4">
                  Via Beitbridge Border Post
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Africa’s premier container port. The primary artery for imported vehicles, heavy industrial machinery, and Asian/European containerized cargo. We coordinate bonded trucking directly up the N1 corridor into Zimbabwe.
                </p>
                <div className="space-y-2 text-xs text-slate-700 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gold-600" />
                    <span>Transit: 2 - 4 Days from Port to Beitbridge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brandBlue-600" />
                    <span>Handling: FCL, LCL &amp; RoRo Vehicles</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onOpenQuoteModal('Sea Freight')}
                className="text-xs font-bold text-navy-900 hover:text-gold-600 uppercase tracking-wider flex items-center gap-1.5 transition-colors pt-4 border-t border-slate-100"
              >
                <span>Quote Durban Routing</span>
                <span>→</span>
              </button>
            </div>

            {/* Beira Corridor */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center mb-6">
                  <Ship className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-navy-950 uppercase font-display mb-1">
                  Beira Ocean Corridor
                </h4>
                <span className="text-xs font-bold text-brandBlue-600 uppercase tracking-wider block mb-4">
                  Via Forbes / Mutare Border Post
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  The shortest geographical maritime route to Harare (approx. 560 km). Ideal for fast ocean container discharge, bulk commodities, mining supplies, and agricultural inputs with low overland transit cost.
                </p>
                <div className="space-y-2 text-xs text-slate-700 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gold-600" />
                    <span>Transit: 2 - 3 Days from Port to Harare</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brandBlue-600" />
                    <span>Handling: 20ft / 40ft Containers &amp; Break-Bulk</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onOpenQuoteModal('Sea Freight')}
                className="text-xs font-bold text-navy-900 hover:text-gold-600 uppercase tracking-wider flex items-center gap-1.5 transition-colors pt-4 border-t border-slate-100"
              >
                <span>Quote Beira Routing</span>
                <span>→</span>
              </button>
            </div>

            {/* Walvis Bay Corridor */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center mb-6">
                  <Truck className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-navy-950 uppercase font-display mb-1">
                  Walvis Bay Corridor
                </h4>
                <span className="text-xs font-bold text-brandBlue-600 uppercase tracking-wider block mb-4">
                  Via Trans-Kalahari &amp; Plumtree
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  The western Atlantic gateway connecting Europe and the Americas directly to Zimbabwe. Exceptional congestion-free port turnaround and reliable dry port bonded clearance.
                </p>
                <div className="space-y-2 text-xs text-slate-700 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gold-600" />
                    <span>Transit: 4 - 6 Days Overland to Bulawayo/Harare</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brandBlue-600" />
                    <span>Handling: Vehicles, Heavy Mining &amp; Commercial</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onOpenQuoteModal('Sea Freight')}
                className="text-xs font-bold text-navy-900 hover:text-gold-600 uppercase tracking-wider flex items-center gap-1.5 transition-colors pt-4 border-t border-slate-100"
              >
                <span>Quote Walvis Bay Routing</span>
                <span>→</span>
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
