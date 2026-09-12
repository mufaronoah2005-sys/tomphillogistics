import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { TrackTrace } from '../components/TrackTrace';

export const TrackTracePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <PageHeader
        title="Track &amp; Trace"
        highlightText="Shipment Portal"
        subtitle="Check the real-time status of your vehicle clearing, air cargo touchdown, container shipping, or cross-border truck consignment."
        badge="Real-Time Visibility Desk"
        breadcrumbs={[{ label: 'Track & Trace' }]}
        ctaText="Need Urgent Help?"
        onCtaClick={() => window.open('https://wa.me/?text=Hello%20Tomphil%20Logistics%20tracking%20support', '_blank')}
      />

      {/* Main Track & Trace Interface */}
      <TrackTrace />

      {/* Milestone Stages Glossary */}
      <section className="py-16 lg:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block mb-2">
              Status Understanding
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-navy-950 uppercase font-display tracking-tight">
              What Does Your Shipment Status Mean?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Clear definitions of the operational milestones from booking to final delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
              <span className="text-xs font-bold uppercase text-brandBlue-600 block mb-1">Stage 1</span>
              <h4 className="text-base font-bold text-navy-950 uppercase mb-2">Port Receipt / Origin Dispatch</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Your vehicle or cargo has arrived at the maritime port (Durban, Beira, Walvis Bay) or airport terminal, and shipping documents are being verified.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
              <span className="text-xs font-bold uppercase text-gold-600 block mb-1">Stage 2</span>
              <h4 className="text-base font-bold text-navy-950 uppercase mb-2">Bonded In-Transit</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                The consignment is on a bonded carrier moving overland towards the designated Zimbabwean border post (Beitbridge, Chirundu, Forbes, or Plumtree).
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
              <span className="text-xs font-bold uppercase text-amber-600 block mb-1">Stage 3</span>
              <h4 className="text-base font-bold text-navy-950 uppercase mb-2">ZIMRA Customs Assessment</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                The Bill of Entry (Form 49) has been lodged with ZIMRA. Duties and taxes are being assessed and validated for payment and compliance clearance.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
              <span className="text-xs font-bold uppercase text-emerald-600 block mb-1">Stage 4</span>
              <h4 className="text-base font-bold text-navy-950 uppercase mb-2">Released &amp; Delivered</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Customs release order issued, vehicle vetting completed, and the cargo is dispatched for final collection or doorstep delivery in Harare or Bulawayo.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
