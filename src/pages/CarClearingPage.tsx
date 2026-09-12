import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Calculator, 
  AlertCircle 
} from 'lucide-react';

interface CarClearingPageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const CarClearingPage: React.FC<CarClearingPageProps> = ({ onOpenQuoteModal }) => {
  // Interactive Duty Estimator State
  const [vehicleType, setVehicleType] = useState('sedan');
  const [vehicleAge, setVehicleAge] = useState('over5'); // 'under5' or 'over5'
  const [engineCapacity, setEngineCapacity] = useState('medium'); // 'small', 'medium', 'large'
  const [invoiceValue, setInvoiceValue] = useState(6000);

  // Approximate Duty Calculation based on standard ZIMRA guidelines
  const calculateDutyEstimate = () => {
    let dutyRate = 0.40; // 40% Standard Customs Duty
    let surtaxRate = vehicleAge === 'over5' ? 0.35 : 0.0; // Surtax on older vehicles (5+ years)
    if (vehicleType === 'commercial') {
      dutyRate = 0.25;
      surtaxRate = 0.0;
    } else if (engineCapacity === 'small') {
      dutyRate = 0.30; // Small engine concession
    } else if (engineCapacity === 'large') {
      dutyRate = 0.45; // Higher displacement tier
    }
    const customsDuty = invoiceValue * dutyRate;
    const surtax = invoiceValue * surtaxRate;
    const valueForVat = invoiceValue + customsDuty + surtax;
    const vat = valueForVat * 0.15; // 15% VAT
    const totalTaxes = customsDuty + surtax + vat;

    return {
      customsDuty: Math.round(customsDuty),
      surtax: Math.round(surtax),
      vat: Math.round(vat),
      totalEstimatedTaxes: Math.round(totalTaxes),
      effectiveRate: Math.round((totalTaxes / invoiceValue) * 100),
    };
  };

  const estimate = calculateDutyEstimate();

  return (
    <div className="bg-white">
      {/* Page Header */}
      <PageHeader
        title="Car Clearing"
        highlightText="In & Out of Zimbabwe"
        subtitle="Professional vehicle import & export clearance, ZIMRA duty valuation, port-to-border transit, and hassle-free registration guidance."
        badge="Zimbabwe Vehicle Customs Desk"
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: 'Car Clearing' }]}
        ctaText="Get Car Clearing Quote"
        onCtaClick={() => onOpenQuoteModal('Car Clearing')}
      />

      {/* Overview & Core Scope */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-gold-600 font-extrabold text-xs tracking-widest uppercase mb-3">
                <span className="w-6 h-0.5 bg-gold-500"></span>
                <span>Specialized Automotive Logistics</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-navy-950 uppercase tracking-tight font-display mb-6">
                Clearing Vehicles With <span className="text-brandBlue-600">Zero Delays</span>
              </h2>
              <p className="text-base text-slate-700 leading-relaxed mb-4">
                Tomphil Logistics specializes in clearing motor vehicles into and out of Zimbabwe. Whether you are an individual importing a Japanese or UK vehicle through Durban or Dar es Salaam, or a company moving commercial vehicle fleets across Southern Africa, our registered customs clearing agents handle all ZIMRA formalities swiftly.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                From port receipt, bonded car-carrier transit, and border clearance at Beitbridge, Chirundu, or Forbes, to final licensing and handover, we eliminate the stress, guesswork, and unnecessary demurrage fees.
              </p>

              {/* Scope Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  'Private Passenger Cars & SUVs',
                  'Pickups, Bakkies & Light Deliveries',
                  'Heavy Commercial Trucks & Trailers',
                  'Passenger Buses & Minibuses',
                  'Earthmoving & Construction Vehicles',
                  'Returning Residents Rebates (Immigrant)',
                  'Temporary Import Permits (TIP)',
                  'Police Clearance & Interpol Vetting',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-navy-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => onOpenQuoteModal('Car Clearing')}
                  className="bg-navy-900 hover:bg-navy-800 text-white font-bold px-7 py-3.5 rounded-full text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
                >
                  <span>Request Vehicle Clearance</span>
                  <ArrowRight className="w-4 h-4 text-gold-400" />
                </button>
              </div>
            </div>

            {/* Right Card: Vehicle Photo & Corridors */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-3xl overflow-hidden shadow-premium border border-slate-200 relative">
                <img
                  src="/images/customs-fleet.jpg"
                  alt="Cleared Vehicles Fleet in Zimbabwe"
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6 bg-white">
                  <span className="text-[11px] font-bold text-gold-600 uppercase tracking-widest block">
                    Port to Destination Transit
                  </span>
                  <h4 className="text-lg font-bold text-navy-950 uppercase mt-1">
                    Direct Border Gateways
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    We manage the transit of your car from ocean ports (Durban, Walvis Bay, Dar es Salaam) straight to Beitbridge, Plumtree, or Forbes for ZIMRA release.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-navy-900 text-white border border-navy-800 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase text-white">Full Duty Transparency</h5>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    We calculate exact taxes beforehand so there are no unexpected surprises at the border post.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Zimbabwe Vehicle Duty Estimator Guide */}
      <section className="py-16 lg:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-gold-600 font-extrabold text-xs tracking-widest uppercase mb-3">
              <Calculator className="w-4 h-4" />
              <span>Interactive Duty Estimator Guide</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-950 uppercase tracking-tight font-display">
              Zimbabwe Vehicle <span className="text-gold-500">Duty Calculator</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Get an indicative estimate of ZIMRA Customs Duty, Surtax, and VAT for importing a vehicle into Zimbabwe.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-premium">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              
              {/* Controls */}
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase text-navy-900 mb-2">
                    1. Vehicle Category
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setVehicleType('sedan')}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold uppercase transition-all ${
                        vehicleType === 'sedan'
                          ? 'bg-navy-900 text-white shadow-sm'
                          : 'bg-white text-slate-700 border border-slate-200 hover:border-navy-400'
                      }`}
                    >
                      Sedan / Hatch
                    </button>
                    <button
                      type="button"
                      onClick={() => setVehicleType('suv')}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold uppercase transition-all ${
                        vehicleType === 'suv'
                          ? 'bg-navy-900 text-white shadow-sm'
                          : 'bg-white text-slate-700 border border-slate-200 hover:border-navy-400'
                      }`}
                    >
                      SUV / Bakkie
                    </button>
                    <button
                      type="button"
                      onClick={() => setVehicleType('commercial')}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold uppercase transition-all ${
                        vehicleType === 'commercial'
                          ? 'bg-navy-900 text-white shadow-sm'
                          : 'bg-white text-slate-700 border border-slate-200 hover:border-navy-400'
                      }`}
                    >
                      Commercial
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-navy-900 mb-2">
                    2. Age of Vehicle
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setVehicleAge('under5')}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold uppercase transition-all ${
                        vehicleAge === 'under5'
                          ? 'bg-navy-900 text-white shadow-sm'
                          : 'bg-white text-slate-700 border border-slate-200 hover:border-navy-400'
                      }`}
                    >
                      Under 5 Years (No Surtax)
                    </button>
                    <button
                      type="button"
                      onClick={() => setVehicleAge('over5')}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold uppercase transition-all ${
                        vehicleAge === 'over5'
                          ? 'bg-navy-900 text-white shadow-sm'
                          : 'bg-white text-slate-700 border border-slate-200 hover:border-navy-400'
                      }`}
                    >
                      5+ Years (Subject to Surtax)
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-navy-900 mb-2">
                    3. Engine Capacity Displacement
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setEngineCapacity('small')}
                      className={`py-2 px-2 rounded-xl text-[11px] font-bold uppercase transition-all ${
                        engineCapacity === 'small'
                          ? 'bg-navy-900 text-white shadow-sm'
                          : 'bg-white text-slate-700 border border-slate-200 hover:border-navy-400'
                      }`}
                    >
                      &lt; 1500cc
                    </button>
                    <button
                      type="button"
                      onClick={() => setEngineCapacity('medium')}
                      className={`py-2 px-2 rounded-xl text-[11px] font-bold uppercase transition-all ${
                        engineCapacity === 'medium'
                          ? 'bg-navy-900 text-white shadow-sm'
                          : 'bg-white text-slate-700 border border-slate-200 hover:border-navy-400'
                      }`}
                    >
                      1500 – 2500cc
                    </button>
                    <button
                      type="button"
                      onClick={() => setEngineCapacity('large')}
                      className={`py-2 px-2 rounded-xl text-[11px] font-bold uppercase transition-all ${
                        engineCapacity === 'large'
                          ? 'bg-navy-900 text-white shadow-sm'
                          : 'bg-white text-slate-700 border border-slate-200 hover:border-navy-400'
                      }`}
                    >
                      &gt; 2500cc
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-navy-900 mb-2">
                    4. Vehicle Purchase / Invoice Value (USD)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">$</span>
                    <input
                      type="number"
                      min="1000"
                      max="150000"
                      step="500"
                      value={invoiceValue}
                      onChange={(e) => setInvoiceValue(Number(e.target.value) || 0)}
                      className="w-full pl-8 pr-4 py-3 rounded-xl border border-slate-300 focus:border-gold-500 focus:outline-none text-sm font-bold text-navy-950 bg-white"
                    />
                  </div>
                  <div className="flex gap-2 mt-2">
                    {[4000, 7500, 12000, 25000].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setInvoiceValue(val)}
                        className="text-[11px] font-semibold text-slate-600 hover:text-navy-900 bg-white px-2 py-1 rounded border border-slate-200"
                      >
                        ${val.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Estimate Calculation Results Card */}
              <div className="bg-navy-950 text-white rounded-2xl p-6 border border-navy-800 shadow-xl">
                <span className="text-[11px] font-bold text-gold-400 uppercase tracking-widest block mb-1">
                  Indicative ZIMRA Assessment
                </span>
                <h4 className="text-xl font-bold uppercase font-display mb-4">
                  Estimated Customs Duties
                </h4>

                <div className="space-y-3 pb-4 border-b border-navy-800 text-xs">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Base Invoice Value (CIF):</span>
                    <span className="font-mono font-bold text-white">${invoiceValue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Customs Duty (approx. {vehicleType === 'commercial' ? '25%' : '40%'}):</span>
                    <span className="font-mono font-bold text-white">${estimate.customsDuty.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Surtax ({vehicleAge === 'over5' ? 'approx. 35%' : '0%'}):</span>
                    <span className="font-mono font-bold text-white">${estimate.surtax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Value Added Tax (15% VAT):</span>
                    <span className="font-mono font-bold text-white">${estimate.vat.toLocaleString()}</span>
                  </div>
                </div>

                <div className="pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-extrabold uppercase text-gold-400">
                      Total Estimated Duties &amp; Taxes:
                    </span>
                    <span className="text-2xl font-black font-mono text-gold-400">
                      ${estimate.totalEstimatedTaxes.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Indicative duty load: ~{estimate.effectiveRate}% of CIF value.
                  </p>
                </div>

                <button
                  onClick={() => onOpenQuoteModal('Car Clearing')}
                  className="w-full bg-gold-500 hover:bg-gold-600 text-navy-950 font-black py-3 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Request Exact Broker Valuation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Disclaimer */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex items-start gap-2 text-[11px] text-slate-500">
              <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <span>
                Note: This calculator provides an indicative guidance estimate based on general ZIMRA tariff schedules. Actual payable duties depend on precise engine displacement, vehicle classification codes, port handling, and official ZIMRA valuation catalogs. Our licensed customs brokers determine your exact duty assessment before border arrival.
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 4-Step Vehicle Clearing Roadmap */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h3 className="text-2xl sm:text-3xl font-black text-navy-950 uppercase font-display tracking-tight">
              The 4-Step Vehicle Clearing Roadmap
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              How we guide your vehicle safely from the ocean port to your garage in Zimbabwe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Port Arrival & Receipt',
                desc: 'Your car lands at Durban, Dar es Salaam or Walvis Bay. We collect shipping documents, clear port terminal charges, and inspect vehicle condition.',
              },
              {
                step: '02',
                title: 'Bonded Transit to Border',
                desc: 'We arrange secure carrier transport or licensed bonded driver escort under customs transit security to Beitbridge or Forbes border post.',
              },
              {
                step: '03',
                title: 'ZIMRA Clearance & Duty Settlement',
                desc: 'Our border agents lodge the Bill of Entry (Form 49), obtain official duty assessment, settle customs payments, and secure the release order.',
              },
              {
                step: '04',
                title: 'Police Vetting & Handover',
                desc: 'We assist with CID vehicle theft clearance, temporary registration plates, and hand over the keys at your destination in Harare or Bulawayo.',
              },
            ].map((st, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <span className="text-2xl font-black text-gold-500 font-display block mb-2">{st.step}</span>
                <h4 className="text-base font-bold text-navy-950 uppercase mb-2">{st.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Required Documents Checklist */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-950 rounded-3xl p-8 sm:p-12 text-white border border-navy-800">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block mb-2">
                Documentation Checklist
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase font-display text-white">
                What Papers Do You Need For Car Clearing?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Have these documents ready or send them to our WhatsApp desk for free document verification.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-navy-900 border border-navy-800">
                <FileText className="w-5 h-5 text-gold-400 mb-2" />
                <h5 className="text-sm font-bold text-white mb-1">Commercial Invoice</h5>
                <p className="text-[11px] text-slate-400">Showing vehicle purchase price, chassis/VIN, engine number, and consignee name.</p>
              </div>
              <div className="p-4 rounded-xl bg-navy-900 border border-navy-800">
                <FileText className="w-5 h-5 text-brandBlue-400 mb-2" />
                <h5 className="text-sm font-bold text-white mb-1">Bill of Lading</h5>
                <p className="text-[11px] text-slate-400">Original ocean shipping document confirming dispatch from Japan, UK, UAE, or US.</p>
              </div>
              <div className="p-4 rounded-xl bg-navy-900 border border-navy-800">
                <FileText className="w-5 h-5 text-gold-400 mb-2" />
                <h5 className="text-sm font-bold text-white mb-1">Export Certificate</h5>
                <p className="text-[11px] text-slate-400">Original registration cancellation certificate / deregistration papers from country of origin.</p>
              </div>
              <div className="p-4 rounded-xl bg-navy-900 border border-navy-800">
                <FileText className="w-5 h-5 text-emerald-400 mb-2" />
                <h5 className="text-sm font-bold text-white mb-1">Consignee ID / BPN</h5>
                <p className="text-[11px] text-slate-400">National ID/Passport (individuals) or ZIMRA Business Partner Number (companies).</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-navy-800">
              <p className="text-xs text-slate-400">
                Need help with returning resident duty rebates or temporary import permits (TIP)?
              </p>
              <button
                onClick={() => onOpenQuoteModal('Car Clearing')}
                className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-colors"
              >
                Consult A Vehicle Customs Broker
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
