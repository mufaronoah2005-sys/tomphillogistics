import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  FileCheck, 
  Car, 
  Truck, 
  Layers, 
  CheckCircle, 
  Plane, 
  Ship, 
  HelpCircle 
} from 'lucide-react';

interface CustomsClearingProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const CustomsClearing: React.FC<CustomsClearingProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'vehicles' | 'goods' | 'checklist'>('vehicles');

  return (
    <section id="customs-clearing" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow & subtle styling */}
      <div className="absolute inset-0 bg-[radial-gradient(#163A6E_1px,transparent_1px)] [background-size:28px_28px] opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-brandBlue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800 text-gold-400 text-xs font-bold uppercase tracking-widest mb-3 border border-navy-700">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span>Zimbabwe Customs Authority &amp; Border Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight font-display">
            Zimbabwe Customs <span className="text-gold-500">Clearing Specialists</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Making vehicle and goods clearance simpler, faster, and fully compliant with ZIMRA regulations.
          </p>
        </div>

        {/* 3-Column Visual Layout directly inspired by reference screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-16">
          
          {/* Left Column: Angled Navy Banner with Zimbabwe Emblem & Text */}
          <div className="lg:col-span-4 bg-navy-950 rounded-3xl p-8 border border-navy-800 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-xl pointer-events-none"></div>

            <div>
              {/* Zimbabwe Map Emblem */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-navy-900 border-2 border-gold-500/60 p-2 flex items-center justify-center shadow-md">
                  {/* Zimbabwe stylized map flag SVG */}
                  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow">
                    <polygon points="10,20 85,15 95,50 80,90 25,85 10,50" fill="#006400" />
                    <polygon points="15,25 80,20 90,50 75,85 28,80 15,50" fill="#FFD700" />
                    <polygon points="20,30 75,25 85,50 70,80 32,75 20,50" fill="#D40000" />
                    <polygon points="25,35 70,30 80,50 65,75 35,70 25,50" fill="#000000" />
                    <polygon points="10,20 50,50 10,80" fill="#FFFFFF" />
                    <polygon points="16,35 40,50 16,65" fill="#D40000" />
                    <circle cx="28" cy="50" r="4" fill="#FFD700" />
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-gold-400 block">
                    Specialists In
                  </span>
                  <span className="text-xl font-black uppercase text-white font-display leading-tight">
                    Zimbabwe Customs Clearing
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                We handle all documentation, duties, taxes and compliance requirements for smooth clearance of your cars and goods in and out of Zimbabwe.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-gold-400" />
                  <span>Beitbridge, Chirundu, Forbes &amp; Plumtree Ports</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-gold-400" />
                  <span>Accurate Tariff Classification &amp; Valuation</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-gold-400" />
                  <span>Zero-delay Pre-clearance Filing</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenQuoteModal('Car Clearing')}
              className="w-full bg-gold-500 hover:bg-gold-600 text-navy-950 font-black py-3 px-5 rounded-xl text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
            >
              <span>Enquire About Clearing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Middle Column: Cleared Cars & Cargo Fleet Photo Strip */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl border border-navy-800 flex flex-col justify-end min-h-[320px]">
            <img
              src="/images/customs-fleet.jpg"
              alt="Cleared Vehicles and Industrial Cargo at Border Port"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Gradient Overlay for bottom caption text */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>

            <div className="relative z-10 p-6 sm:p-8 text-center bg-navy-950/90 backdrop-blur-md border-t border-navy-700/60">
              <p className="text-xs sm:text-sm font-black text-white uppercase tracking-widest font-display">
                Cars • Machinery • Consumer Goods • Industrial Equipment
              </p>
              <p className="text-[11px] text-gold-400 font-bold uppercase tracking-wider mt-1">
                And More In &amp; Out of Zimbabwe
              </p>
            </div>
          </div>

          {/* Right Column: Global Reach Card matching reference */}
          <div className="lg:col-span-3 bg-navy-950 rounded-3xl p-6 sm:p-8 border border-navy-800 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brandBlue-600/20 text-brandBlue-400 flex items-center justify-center mb-4 border border-brandBlue-500/30">
                <Layers className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-black uppercase text-white font-display tracking-tight">
                Global Reach
              </h3>
              <p className="text-xs font-bold uppercase text-gold-400 tracking-wider mb-3">
                No Borders. Just Opportunity.
              </p>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                We transport goods to and from any country in the world — by air, sea or road. Your cargo, our commitment.
              </p>

              {/* 3 icons from reference */}
              <div className="grid grid-cols-3 gap-2 text-center py-4 border-y border-navy-800 mb-6">
                <div className="flex flex-col items-center">
                  <Plane className="w-5 h-5 text-gold-400 mb-1" />
                  <span className="text-[10px] font-bold text-slate-300 uppercase">Air Freight</span>
                </div>
                <div className="flex flex-col items-center">
                  <Ship className="w-5 h-5 text-brandBlue-400 mb-1" />
                  <span className="text-[10px] font-bold text-slate-300 uppercase">Sea Freight</span>
                </div>
                <div className="flex flex-col items-center">
                  <Truck className="w-5 h-5 text-gold-400 mb-1" />
                  <span className="text-[10px] font-bold text-slate-300 uppercase">Road Freight</span>
                </div>
              </div>
            </div>

            <a
              href="#global-transport"
              className="text-xs font-bold text-brandBlue-400 hover:text-white uppercase tracking-wider flex items-center justify-center gap-2 py-2 border border-navy-700 rounded-xl hover:bg-navy-800 transition-colors"
            >
              <span>Explore Global Routes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Interactive Guide: Vehicle Clearing Process & Document Checklist */}
        <div className="bg-navy-950/80 rounded-3xl border border-navy-800 p-6 sm:p-10 backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-navy-800 pb-6 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-display">
                Zimbabwe Customs Clearing Guide
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Everything you need to know about clearing your vehicle or commercial consignment.
              </p>
            </div>

            <div className="inline-flex p-1 rounded-xl bg-navy-900 border border-navy-800">
              <button
                onClick={() => setActiveTab('vehicles')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeTab === 'vehicles'
                    ? 'bg-gold-500 text-navy-950'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Car Clearing
              </button>
              <button
                onClick={() => setActiveTab('goods')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeTab === 'goods'
                    ? 'bg-gold-500 text-navy-950'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Goods Clearing
              </button>
              <button
                onClick={() => setActiveTab('checklist')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeTab === 'checklist'
                    ? 'bg-gold-500 text-navy-950'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Required Docs
              </button>
            </div>
          </div>

          {/* Tab 1: Vehicles */}
          {activeTab === 'vehicles' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
              <div className="p-5 rounded-2xl bg-navy-900/90 border border-navy-800">
                <div className="text-gold-400 font-extrabold text-sm mb-2 flex items-center gap-2">
                  <Car className="w-4 h-4" />
                  <span>1. Port Receipt &amp; Transit</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We receive your car at Durban, Dar es Salaam, or Walvis Bay, inspect condition, arrange cross-border carrier or bonded driving, and manage transit documents to Beitbridge or Forbes.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-navy-900/90 border border-navy-800">
                <div className="text-gold-400 font-extrabold text-sm mb-2 flex items-center gap-2">
                  <FileCheck className="w-4 h-4" />
                  <span>2. ZIMRA Valuation &amp; Duties</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We prepare the Bill of Entry (Form 49), calculate Customs Duty, Surtax, and VAT based on engine capacity and vehicle age, and submit for official ZIMRA clearance.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-navy-900/90 border border-navy-800">
                <div className="text-gold-400 font-extrabold text-sm mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>3. Release &amp; Delivery</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Once duties are settled, we collect the final customs release order, assist with police vetting and temporary plates, and transport or drive the car directly to your hands in Harare or Bulawayo.
                </p>
              </div>
            </div>
          )}

          {/* Tab 2: Goods */}
          {activeTab === 'goods' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
              <div className="p-5 rounded-2xl bg-navy-900/90 border border-navy-800">
                <div className="text-brandBlue-400 font-extrabold text-sm mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  <span>Commercial Cargo Processing</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Full tariff HS code classification for industrial equipment, spare parts, building materials, FMCG, and agricultural implements for fast ZIMRA assessment.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-navy-900/90 border border-navy-800">
                <div className="text-brandBlue-400 font-extrabold text-sm mb-2 flex items-center gap-2">
                  <FileCheck className="w-4 h-4" />
                  <span>Rebate &amp; Exemption Guidance</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Assistance with eligible government manufacturing rebates, agricultural duty exemptions, and statutory instruments to optimize lawful import costs.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-navy-900/90 border border-navy-800">
                <div className="text-brandBlue-400 font-extrabold text-sm mb-2 flex items-center gap-2">
                  <Truck className="w-4 h-4" />
                  <span>Bonded Trucking &amp; Discharge</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Licensed bonded trucking from port of entry straight to internal inland container depots (ICD) or your bonded warehouse under customs security.
                </p>
              </div>
            </div>
          )}

          {/* Tab 3: Checklist */}
          {activeTab === 'checklist' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 animate-in fade-in duration-300">
              <div className="p-4 rounded-xl bg-navy-900 border border-navy-800">
                <span className="text-xs font-bold text-gold-400 uppercase block mb-1">Document 1</span>
                <h5 className="text-sm font-bold text-white mb-1">Commercial Invoice</h5>
                <p className="text-[11px] text-slate-400">Proof of purchase showing vehicle or goods price, chassis/VIN, and seller information.</p>
              </div>

              <div className="p-4 rounded-xl bg-navy-900 border border-navy-800">
                <span className="text-xs font-bold text-gold-400 uppercase block mb-1">Document 2</span>
                <h5 className="text-sm font-bold text-white mb-1">Bill of Lading / Waybill</h5>
                <p className="text-[11px] text-slate-400">Original ocean bill of lading, air waybill, or road consignment note showing transport details.</p>
              </div>

              <div className="p-4 rounded-xl bg-navy-900 border border-navy-800">
                <span className="text-xs font-bold text-gold-400 uppercase block mb-1">Document 3</span>
                <h5 className="text-sm font-bold text-white mb-1">Export Certificate / Logbook</h5>
                <p className="text-[11px] text-slate-400">Original registration cancellation certificate or deregistration papers from country of origin.</p>
              </div>

              <div className="p-4 rounded-xl bg-navy-900 border border-navy-800">
                <span className="text-xs font-bold text-gold-400 uppercase block mb-1">Document 4</span>
                <h5 className="text-sm font-bold text-white mb-1">Consignee Identification</h5>
                <p className="text-[11px] text-slate-400">National ID or Passport, Business Partner Number (BPN) and ZIMRA tax clearance if company.</p>
              </div>
            </div>
          )}

          {/* Help contact row */}
          <div className="mt-8 pt-6 border-t border-navy-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <HelpCircle className="w-4 h-4 text-gold-400" />
              <span>Unsure which documents apply to your cargo? Our customs agents review your papers free of charge.</span>
            </div>
            <button
              onClick={() => onOpenQuoteModal('Customs Clearing')}
              className="text-xs font-bold uppercase tracking-wider text-gold-400 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <span>Speak to a Customs Agent</span>
              <span>→</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
