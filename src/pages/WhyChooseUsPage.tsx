import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { HelpCircle } from 'lucide-react';

interface WhyChooseUsPageProps {
  onOpenQuoteModal: () => void;
}

export const WhyChooseUsPage: React.FC<WhyChooseUsPageProps> = ({ onOpenQuoteModal }) => {
  const faqs = [
    {
      q: 'How does Tomphil Logistics calculate vehicle customs duties into Zimbabwe?',
      a: 'Customs duty is calculated using official ZIMRA tariff schedules based on the CIF value (Cost of vehicle, Insurance, and Freight to border). We determine the exact engine capacity, vehicle classification, applicable surtax (for vehicles 5+ years old), and 15% VAT, ensuring you know your exact liability before border lodgment.',
    },
    {
      q: 'Can you collect my vehicle from Durban or Dar es Salaam port?',
      a: 'Yes. We provide complete port receipt and bonded transit. We clear terminal release at the port, perform a thorough physical condition report, and arrange secure carrier haulage directly to Beitbridge, Forbes, or Plumtree for customs clearance.',
    },
    {
      q: 'What is required for commercial cargo customs clearance?',
      a: 'You will need an original Commercial Invoice, Packing List, Transport document (Bill of Lading, Air Waybill, or Consignment Note), your company’s valid ZIMRA Business Partner Number (BPN), and any statutory import permits if the goods are regulated.',
    },
    {
      q: 'How do you prevent border clearance delays and demurrage?',
      a: 'We utilize ZIMRA’s ASYCUDA World electronic pre-clearance system. By submitting and validating entries while the cargo is still in transit, duties are verified in advance so that when the truck or container arrives at the border post, it is cleared and released rapidly.',
    },
    {
      q: 'Do you assist with returning resident vehicle duty rebates (immigrant rebate)?',
      a: 'Yes. We assist qualifying returning Zimbabwean citizens with the necessary documentation to apply for duty rebates on personal motor vehicles and household effects in full compliance with ZIMRA regulations.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <PageHeader
        title="Why Choose"
        highlightText="Tomphil Logistics?"
        subtitle="Uncompromising border compliance, transparent communication, and dependable freight forwarding solutions tailored to your cargo."
        badge="The Tomphil Standard"
        breadcrumbs={[{ label: 'Why Choose Us' }]}
        ctaText="Consult Our Specialists"
        onCtaClick={onOpenQuoteModal}
      />

      {/* Main 6 Pillars Component */}
      <WhyChooseUs onOpenQuoteModal={onOpenQuoteModal} />

      {/* Client Assurance Framework */}
      <section className="py-16 lg:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block mb-2">
              Our Assurance Framework
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-navy-950 uppercase font-display tracking-tight">
              Our 4-Point Service Guarantee
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Clear commitments that define how we handle every vehicle, container, and airway bill.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs">
              <span className="text-xs font-bold uppercase text-gold-600 tracking-wider block mb-1">Guarantee 1</span>
              <h4 className="text-base font-bold text-navy-950 uppercase mb-2">Duty Transparency</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Itemized breakdown of all official ZIMRA taxes, port handling fees, and clearing charges without surprise add-ons.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs">
              <span className="text-xs font-bold uppercase text-brandBlue-600 tracking-wider block mb-1">Guarantee 2</span>
              <h4 className="text-base font-bold text-navy-950 uppercase mb-2">Paperwork Accuracy</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Thorough audit of commercial invoices, bills of entry, and chassis numbers before border lodgment to avoid penalties.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs">
              <span className="text-xs font-bold uppercase text-emerald-600 tracking-wider block mb-1">Guarantee 3</span>
              <h4 className="text-base font-bold text-navy-950 uppercase mb-2">Active Communication</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct milestone notifications via WhatsApp and email as your cargo passes port, transit, border, and final delivery.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs">
              <span className="text-xs font-bold uppercase text-navy-700 tracking-wider block mb-1">Guarantee 4</span>
              <h4 className="text-base font-bold text-navy-950 uppercase mb-2">Cargo Security</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Vetted transport operators, sealed container security, and licensed bonded driving escorts for private vehicles.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 lg:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block mb-2">
              Common Questions
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-navy-950 uppercase font-display tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Clear answers to the most common customs clearing and logistics questions.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs">
                <h4 className="text-sm sm:text-base font-bold text-navy-950 flex items-start gap-2 mb-2">
                  <HelpCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};
