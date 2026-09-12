import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { 
  PackageCheck, 
  ShieldCheck, 
  FileCheck, 
  Layers, 
  Truck, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Coins, 
  Factory, 
  Tractor, 
  Cpu 
} from 'lucide-react';

interface GoodsClearingPageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const GoodsClearingPage: React.FC<GoodsClearingPageProps> = ({ onOpenQuoteModal }) => {
  const cargoCategories = [
    {
      icon: Factory,
      title: 'Industrial & Mining Machinery',
      desc: 'Heavy industrial plants, crushers, conveyors, milling equipment, processing units, and high-value mining replacement parts.',
    },
    {
      icon: Tractor,
      title: 'Agricultural Equipment & Inputs',
      desc: 'Tractors, combine harvesters, pivot irrigation systems, fertilizer consignments, seeds, and agro-processing machinery.',
    },
    {
      icon: Cpu,
      title: 'Electronics & Telecommunications',
      desc: 'IT hardware, solar equipment, inverters, telecommunication masts, power batteries, and specialized automation devices.',
    },
    {
      icon: Building2,
      title: 'Building & Construction Materials',
      desc: 'Structural steel, cement, pipes, tiles, aluminum profiles, scaffolding, and commercial architectural supplies.',
    },
    {
      icon: Layers,
      title: 'Raw Materials & Bulk Chemicals',
      desc: 'Industrial chemicals, polymers, textiles, manufacturing feedstocks, packaging materials, and food-grade ingredients.',
    },
    {
      icon: PackageCheck,
      title: 'Consumer Goods & Retail FMCG',
      desc: 'Packaged commercial goods, household merchandise, appliances, garments, footwear, and consumer retail products.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <PageHeader
        title="Goods Clearing"
        highlightText="Customs & Commercial Cargo"
        subtitle="End-to-end import and export customs clearance for general merchandise, industrial machinery, mining gear, and commercial freight entering or exiting Zimbabwe."
        badge="ZIMRA Commercial Brokerage Desk"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'Goods Clearing' }]}
        ctaText="Request Commercial Clearance"
        onCtaClick={() => onOpenQuoteModal('Goods Clearing')}
      />

      {/* Main Scope */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-gold-600 font-extrabold text-xs tracking-widest uppercase mb-3">
                <span className="w-6 h-0.5 bg-gold-500"></span>
                <span>Fast-Track Commercial Compliance</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-navy-950 uppercase tracking-tight font-display mb-6">
                Streamlined Clearance For <span className="text-brandBlue-600">Enterprises &amp; Traders</span>
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Moving commercial cargo into Zimbabwe requires meticulous documentation, accurate HS tariff coding, and adherence to ZIMRA regulations. At Tomphil Logistics, our licensed customs brokers navigate the entire clearance spectrum for commercial importers, manufacturers, retailers, and non-profit organizations.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                We handle pre-clearance filings before trucks or containers arrive at the border, drastically slashing dwell times, demurrage costs, and border hold-ups at Beitbridge, Forbes, Chirundu, and Plumtree.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  'Accurate Harmonized System (HS) Classification',
                  'Duty Exemptions & Rebate Schemes Filing',
                  'Bonded Warehousing & In-Bond Escort',
                  'Temporary Export & Re-importation Clearances',
                  'SADC Trade Certificate Verification',
                  'Container Dwell Time & Demurrage Mitigation',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-navy-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => onOpenQuoteModal('Goods Clearing')}
                  className="bg-navy-900 hover:bg-navy-800 text-white font-bold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
                >
                  <span>Submit Commercial Manifest</span>
                  <ArrowRight className="w-4 h-4 text-gold-400" />
                </button>
              </div>
            </div>

            {/* Right Side: Key Value Highlights */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-navy-950 rounded-3xl p-8 text-white border border-navy-800 shadow-premium">
                <div className="w-12 h-12 rounded-2xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-5">
                  <Coins className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold uppercase font-display mb-2">
                  Duty &amp; Tariff Optimization
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Misclassified cargo results in penalties or overpaid duties. Our tariff specialists analyze your invoices and technical product specifications to apply the lawful, lowest legitimate ZIMRA duty rate.
                </p>
                <div className="p-3 bg-navy-900 rounded-xl border border-navy-800 text-[11px] text-slate-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Assistance with Statutory Instruments (SI) &amp; Manufacturer Rebates.</span>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brandBlue-50 text-brandBlue-600 flex items-center justify-center flex-shrink-0 border border-brandBlue-100">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-950 uppercase">Bonded Trucking to ICDs</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Clear cargo directly at Harare Inland Container Depot (Bak Storage / Manica) under customs bond.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Cargo Types Handled */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h3 className="text-2xl sm:text-3xl font-black text-navy-950 uppercase font-display tracking-tight">
              Commodities &amp; Cargo Handled
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We process diverse cargo classifications into and out of Zimbabwe with dedicated compliance teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cargoCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-navy-500 hover:shadow-premium transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-navy-950 uppercase mb-2 font-display">
                    {cat.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{cat.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 lg:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block mb-2">
              Commercial Documentation
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase font-display text-white">
              What Is Required For Commercial Clearance?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Standard paperwork checklist for swift ZIMRA entry lodgment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-navy-950 border border-navy-800">
              <FileCheck className="w-6 h-6 text-gold-400 mb-3" />
              <h5 className="text-sm font-bold text-white uppercase mb-1">Commercial Invoice &amp; Packing List</h5>
              <p className="text-xs text-slate-400">Itemized description of quantities, unit costs, gross/net weights, and country of origin.</p>
            </div>
            <div className="p-6 rounded-2xl bg-navy-950 border border-navy-800">
              <FileCheck className="w-6 h-6 text-brandBlue-400 mb-3" />
              <h5 className="text-sm font-bold text-white uppercase mb-1">Transport Document</h5>
              <p className="text-xs text-slate-400">Original Ocean Bill of Lading, Air Waybill (AWB), or Road Consignment Note.</p>
            </div>
            <div className="p-6 rounded-2xl bg-navy-950 border border-navy-800">
              <FileCheck className="w-6 h-6 text-gold-400 mb-3" />
              <h5 className="text-sm font-bold text-white uppercase mb-1">Import Permits / Regulatory Licenses</h5>
              <p className="text-xs text-slate-400">Where applicable (e.g. Ministry of Agriculture, EMA, Medicines Control Authority, POTRAZ).</p>
            </div>
            <div className="p-6 rounded-2xl bg-navy-950 border border-navy-800">
              <FileCheck className="w-6 h-6 text-emerald-400 mb-3" />
              <h5 className="text-sm font-bold text-white uppercase mb-1">ZIMRA BPN &amp; Tax Clearance</h5>
              <p className="text-xs text-slate-400">Valid Business Partner Number (BPN) and valid ITF 263 tax clearance certificate.</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => onOpenQuoteModal('Goods Clearing')}
              className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-black px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              Enquire About Commercial Goods Clearance
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
