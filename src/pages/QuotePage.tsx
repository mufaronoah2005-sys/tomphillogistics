import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { QuoteForm } from '../components/QuoteForm';
import { ShieldCheck, Clock, MessageSquare } from 'lucide-react';

export const QuotePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <PageHeader
        title="Get A Quote"
        highlightText="Fast &amp; Accurate"
        subtitle="Request a transparent, no-obligation quotation for vehicle clearing, commercial customs clearance, or global air, sea &amp; road freight."
        badge="Zero Hidden Clearance Fees"
        breadcrumbs={[{ label: 'Get a Quote' }]}
        ctaText="Chat on WhatsApp"
        onCtaClick={() => window.open('https://wa.me/?text=Hello%20Tomphil%20Logistics%20I%20need%20a%20quote', '_blank')}
      />

      {/* Quote Form Component */}
      <QuoteForm />

      {/* Reassurance Banner */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white rounded-2xl border border-slate-200">
              <Clock className="w-6 h-6 text-gold-500 mx-auto mb-2" />
              <h4 className="text-sm font-bold text-navy-950 uppercase">Fast Turnaround</h4>
              <p className="text-xs text-slate-600 mt-1">Quotations prepared within 1 - 2 business hours.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200">
              <ShieldCheck className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
              <h4 className="text-sm font-bold text-navy-950 uppercase">Exact ZIMRA Tariffs</h4>
              <p className="text-xs text-slate-600 mt-1">No surprise duty valuations or hidden port charges.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200">
              <MessageSquare className="w-6 h-6 text-brandBlue-500 mx-auto mb-2" />
              <h4 className="text-sm font-bold text-navy-950 uppercase">Direct WhatsApp Support</h4>
              <p className="text-xs text-slate-600 mt-1">Receive quotes directly to your phone via WhatsApp.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
