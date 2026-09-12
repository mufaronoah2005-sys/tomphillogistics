import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { AboutSection } from '../components/AboutSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Target, Eye, Award, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <PageHeader
        title="About Us"
        highlightText="Tomphil Logistics"
        subtitle="Professional logistics and customs clearing specialists dedicated to seamless vehicle and cargo movement into and out of Zimbabwe and across the globe."
        badge="Your Logistics. Our Priority."
        breadcrumbs={[{ label: 'About Us' }]}
        ctaText="Work With Us"
        onCtaClick={onOpenQuoteModal}
      />

      {/* Main About Story Section */}
      <AboutSection onOpenQuoteModal={onOpenQuoteModal} />

      {/* Corporate Mission, Vision & Core Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block mb-2">
              Our Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-950 uppercase font-display tracking-tight">
              Mission, Vision &amp; <span className="text-brandBlue-600">Integrity</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Built on absolute compliance, relentless communication, and an uncompromising standard of service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center mb-6 shadow-sm">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold uppercase text-navy-950 font-display mb-3">
                  Our Mission
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  To provide seamless, reliable, and compliant customs clearing and freight forwarding services that empower individuals and organizations to move vehicles and commercial goods into and out of Zimbabwe effortlessly.
                </p>
              </div>
              <div className="text-xs font-bold text-gold-600 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Client-First Execution</span>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-navy-900 text-brandBlue-400 flex items-center justify-center mb-6 shadow-sm">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold uppercase text-navy-950 font-display mb-3">
                  Our Vision
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  To be Zimbabwe’s most trusted and recognized international logistics and customs partner, known globally for unyielding professionalism, technological agility, and border efficiency.
                </p>
              </div>
              <div className="text-xs font-bold text-brandBlue-600 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>From Zimbabwe to the World</span>
              </div>
            </div>

            {/* Values */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-navy-900 text-emerald-400 flex items-center justify-center mb-6 shadow-sm">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold uppercase text-navy-950 font-display mb-3">
                  Our Core Values
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Integrity, transparency in duty calculations, punctuality across transit routes, and relentless dedication to ensuring our customers remain fully informed at every border checkpoint.
                </p>
              </div>
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Absolute Accountability</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
};
