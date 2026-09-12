import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ContactSection } from '../components/ContactSection';
import { MapPin, Phone, MessageSquare } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const borderDesks = [
    {
      post: 'Harare Head Office',
      role: 'Operations & General Clearing Administration',
      address: '[ADD BUSINESS ADDRESS], Harare, Zimbabwe',
      phone: '[ADD PHONE NUMBER]',
      whatsapp: '[ADD WHATSAPP NUMBER]',
    },
    {
      post: 'Beitbridge Border Post',
      role: 'South Africa – Zimbabwe Road & Vehicle Port Desk',
      address: '[ADD BEITBRIDGE CLEARING OFFICE ADDRESS]',
      phone: '[ADD PHONE NUMBER]',
      whatsapp: '[ADD WHATSAPP NUMBER]',
    },
    {
      post: 'Forbes / Mutare Border Post',
      role: 'Mozambique – Zimbabwe Beira Corridor Desk',
      address: '[ADD FORBES MUTARE OFFICE ADDRESS]',
      phone: '[ADD PHONE NUMBER]',
      whatsapp: '[ADD WHATSAPP NUMBER]',
    },
    {
      post: 'Chirundu Border Post',
      role: 'Zambia – Zimbabwe Northbound Freight Desk',
      address: '[ADD CHIRUNDU OFFICE ADDRESS]',
      phone: '[ADD PHONE NUMBER]',
      whatsapp: '[ADD WHATSAPP NUMBER]',
    },
    {
      post: 'RGM International Airport (HRE)',
      role: 'Air Cargo Terminal Customs Clearance',
      address: 'Air Cargo Freight Sheds, Harare Airport, Zimbabwe',
      phone: '[ADD PHONE NUMBER]',
      whatsapp: '[ADD WHATSAPP NUMBER]',
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <PageHeader
        title="Contact Us"
        highlightText="Let's Move Your Cargo"
        subtitle="Connect with our logistics specialists across Harare and major border gateways for fast vehicle clearance, container freight, and general cargo inquiries."
        badge="Official Operations Directory"
        breadcrumbs={[{ label: 'Contact Us' }]}
        ctaText="WhatsApp Operations Desk"
        onCtaClick={() => window.open('https://wa.me/?text=Hello%20Tomphil%20Logistics', '_blank')}
      />

      {/* Main Contact Section */}
      <ContactSection />

      {/* Operational Border & Port Clearance Desks */}
      <section className="py-16 lg:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block mb-2">
              Strategic Presence
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-navy-950 uppercase font-display tracking-tight">
              Our Zimbabwe Clearance Desks
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              On-the-ground customs personnel stationed at every major commercial entry and exit point.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {borderDesks.map((desk, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-navy-950 uppercase font-display mb-1">
                    {desk.post}
                  </h4>
                  <p className="text-xs font-semibold text-brandBlue-600 mb-4">{desk.role}</p>
                  
                  <div className="space-y-2 text-xs text-slate-600 mb-6">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span>{desk.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span className="font-mono">{desk.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <span className="font-mono">{desk.whatsapp}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <a
                    href="https://wa.me/?text=Hello%20Tomphil%20Logistics%20enquiring%20about%20border%20clearance"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-emerald-600 hover:text-emerald-700 uppercase tracking-wider flex items-center gap-1"
                  >
                    <span>Connect Live</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};
