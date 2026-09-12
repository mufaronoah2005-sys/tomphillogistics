import React, { useState } from 'react';
import { Search, PackageCheck, Truck, CheckCircle2, Clock, AlertCircle, MessageSquare, ArrowRight } from 'lucide-react';

interface ShipmentStep {
  title: string;
  location: string;
  date: string;
  status: 'completed' | 'current' | 'upcoming';
}

interface ShipmentData {
  trackingId: string;
  service: string;
  origin: string;
  destination: string;
  cargoDescription: string;
  currentStatus: string;
  eta: string;
  steps: ShipmentStep[];
}

const SAMPLE_SHIPMENTS: Record<string, ShipmentData> = {
  'TP-ZW-8492': {
    trackingId: 'TP-ZW-8492',
    service: 'Car Clearing & Port Transit',
    origin: 'Durban Port, South Africa',
    destination: 'Harare, Zimbabwe',
    cargoDescription: '2021 Toyota Fortuner 2.8 GD-6',
    currentStatus: 'Customs Assessment at Beitbridge Border Post',
    eta: 'Estimated 2 Days',
    steps: [
      { title: 'Port Receipt & Bonded Driving Transit', location: 'Durban Port, SA', date: '08 Sept 2026', status: 'completed' },
      { title: 'En Route to Border', location: 'N1 Highway Corridor', date: '10 Sept 2026', status: 'completed' },
      { title: 'ZIMRA Document Valuation & Duty Assessment', location: 'Beitbridge Border Post', date: '12 Sept 2026 (Active)', status: 'current' },
      { title: 'Final Release Order & Handover to Harare Depot', location: 'Harare, Zimbabwe', date: 'Pending Clearance', status: 'upcoming' },
    ],
  },
  'TP-AIR-1044': {
    trackingId: 'TP-AIR-1044',
    service: 'Express Air Freight',
    origin: 'Dubai (DXB), UAE',
    destination: 'Harare Airport (HRE), Zimbabwe',
    cargoDescription: 'Industrial Automation Sensors & Parts (480 kg)',
    currentStatus: 'Landed at RGM International Airport - Customs Inspection',
    eta: 'Available for Collection Today',
    steps: [
      { title: 'Air Cargo Departure', location: 'Dubai International (DXB)', date: '10 Sept 2026', status: 'completed' },
      { title: 'Aircraft Touchdown', location: 'Harare RGM Airport (HRE)', date: '11 Sept 2026', status: 'completed' },
      { title: 'Customs Physical Inspection & Duty Clearance', location: 'Air Cargo Terminal, Harare', date: '12 Sept 2026 (Active)', status: 'current' },
      { title: 'Door Delivery to Industrial Site', location: 'Msasa, Harare', date: '13 Sept 2026', status: 'upcoming' },
    ],
  },
};

export const TrackTrace: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<ShipmentData | null>(null);
  const [searched, setSearched] = useState(false);
  const [isUnknown, setIsUnknown] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = query.trim().toUpperCase();
    if (!clean) return;

    setSearched(true);
    if (SAMPLE_SHIPMENTS[clean]) {
      setResult(SAMPLE_SHIPMENTS[clean]);
      setIsUnknown(false);
    } else {
      setResult(null);
      setIsUnknown(true);
    }
  };

  const loadSample = (id: string) => {
    setQuery(id);
    setResult(SAMPLE_SHIPMENTS[id]);
    setSearched(true);
    setIsUnknown(false);
  };

  return (
    <section id="track-trace" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800 text-gold-400 text-xs font-bold uppercase tracking-widest mb-3 border border-navy-700">
            <PackageCheck className="w-4 h-4 text-gold-400" />
            <span>Real-Time Shipment Visibility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight font-display">
            Track Your <span className="text-gold-500">Shipment</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Stay informed about the progress of your shipment, vehicle clearing, or freight consignment.
          </p>
        </div>

        {/* Tracking Input Card */}
        <div className="bg-navy-950 rounded-3xl p-6 sm:p-10 border border-navy-800 shadow-2xl mb-10">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter Tracking Number (e.g. TP-ZW-8492 or TP-AIR-1044)"
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-navy-900 text-white placeholder-slate-400 border border-navy-700 focus:outline-none focus:border-gold-500 text-sm sm:text-base font-mono transition-colors"
              />
            </div>
            <button
              type="submit"
              className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-black px-8 py-4 rounded-2xl text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 flex-shrink-0"
            >
              <span>Track Shipment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo Buttons for Test Verification */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <span className="font-semibold text-slate-300">Try sample consignment:</span>
            <button
              type="button"
              onClick={() => loadSample('TP-ZW-8492')}
              className="px-2.5 py-1 rounded-md bg-navy-900 hover:bg-navy-800 text-gold-400 border border-navy-700 font-mono text-[11px] transition-colors"
            >
              TP-ZW-8492 (Vehicle Clear)
            </button>
            <button
              type="button"
              onClick={() => loadSample('TP-AIR-1044')}
              className="px-2.5 py-1 rounded-md bg-navy-900 hover:bg-navy-800 text-brandBlue-400 border border-navy-700 font-mono text-[11px] transition-colors"
            >
              TP-AIR-1044 (Air Cargo)
            </button>
          </div>
        </div>

        {/* Display Active Search Result */}
        {searched && result && (
          <div className="bg-navy-950 rounded-3xl p-6 sm:p-10 border border-navy-800 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-navy-800 pb-6 mb-8">
              <div>
                <span className="text-[11px] font-mono text-gold-400 font-bold uppercase tracking-wider block">
                  Waybill / Tracking No: {result.trackingId}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white font-display mt-0.5">
                  {result.service}
                </h3>
                <p className="text-xs text-slate-400 mt-1">Cargo: {result.cargoDescription}</p>
              </div>

              <div className="text-right">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
                  {result.eta}
                </span>
                <div className="text-xs text-slate-400 mt-1">
                  {result.origin} → {result.destination}
                </div>
              </div>
            </div>

            {/* Current status callout */}
            <div className="p-4 rounded-2xl bg-navy-900 border border-navy-800 mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase">Live Milestone Status</div>
                <div className="text-sm font-bold text-white">{result.currentStatus}</div>
              </div>
            </div>

            {/* Timeline Stepper */}
            <div className="space-y-6">
              {result.steps.map((step, idx) => {
                const isDone = step.status === 'completed';
                const isCurrent = step.status === 'current';
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                          isDone
                            ? 'bg-emerald-500 text-navy-950'
                            : isCurrent
                            ? 'bg-gold-500 text-navy-950 ring-4 ring-gold-500/30 animate-pulse'
                            : 'bg-navy-800 text-slate-500 border border-navy-700'
                        }`}
                      >
                        {isDone ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                      </div>
                      {idx !== result.steps.length - 1 && (
                        <div className={`w-0.5 h-10 ${isDone ? 'bg-emerald-500' : 'bg-navy-800'}`}></div>
                      )}
                    </div>

                    <div className="pt-0.5">
                      <h5 className={`text-sm font-bold ${isCurrent ? 'text-gold-400' : 'text-white'}`}>
                        {step.title}
                      </h5>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {step.location} • <span className="text-slate-300 font-mono">{step.date}</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* WhatsApp live update notice */}
            <div className="mt-8 pt-6 border-t border-navy-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-gold-400" />
                <span>Need urgent updates on this clearance? Message our border liaison directly.</span>
              </div>
              <a
                href="https://wa.me/?text=Hello%20Tomphil%20Logistics%2C%20inquiring%20about%20tracking%20number"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Border Agent</span>
              </a>
            </div>
          </div>
        )}

        {/* Display for Non-Demo Tracking Query */}
        {searched && isUnknown && (
          <div className="bg-navy-950 rounded-3xl p-6 sm:p-8 border border-navy-800 text-center animate-in fade-in duration-300">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto mb-4 border border-amber-500/20">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white uppercase font-display">
              Tracking Number "{query}" Received
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Our central cargo tracking database is currently undergoing API synchronization. Please contact our 24/7 Operations Desk directly on WhatsApp or phone with your reference number for an immediate manual milestone update.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={`https://wa.me/?text=Hello%20Tomphil%20Logistics%2C%20please%20check%20status%20for%20tracking%20number%20${encodeURIComponent(
                  query
                )}`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Operations Desk</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
