import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Zimbabwe Customs Clearing Inquiry',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-gold-600 font-extrabold text-xs tracking-widest uppercase mb-3">
            <span className="w-6 h-0.5 bg-gold-500"></span>
            <span>Get in Touch with Tomphil Logistics</span>
            <span className="w-6 h-0.5 bg-gold-500"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 uppercase tracking-tight font-display">
            Let's Move <span className="text-brandBlue-600">Your Cargo</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Reach out directly to our logistics team for vehicle clearance advice, freight rates, or cross-border shipping assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info Cards (with Placeholders) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-4 hover:border-navy-500 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Phone Inquiries</span>
                <span className="text-base font-bold text-navy-950 font-mono block mt-0.5">
                  [ADD PHONE NUMBER]
                </span>
                <a
                  href="tel:[ADD PHONE NUMBER]"
                  className="inline-block text-xs font-bold text-navy-900 hover:text-gold-600 uppercase tracking-wider mt-2 transition-colors"
                >
                  Call Our Desk →
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-4 hover:border-emerald-500 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">WhatsApp 24/7 Desk</span>
                <span className="text-base font-bold text-emerald-950 font-mono block mt-0.5">
                  [ADD WHATSAPP NUMBER]
                </span>
                <a
                  href="https://wa.me/?text=Hello%20Tomphil%20Logistics%2C%20I%20would%20like%20to%20enquire%20about%20cargo%20services"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-xs font-bold text-emerald-600 hover:text-emerald-700 uppercase tracking-wider mt-2 transition-colors"
                >
                  Start WhatsApp Chat →
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-4 hover:border-navy-500 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Official Email</span>
                <span className="text-base font-bold text-navy-950 font-mono block mt-0.5">
                  [ADD EMAIL ADDRESS]
                </span>
                <a
                  href="mailto:[ADD EMAIL ADDRESS]"
                  className="inline-block text-xs font-bold text-navy-900 hover:text-gold-600 uppercase tracking-wider mt-2 transition-colors"
                >
                  Send Official Email →
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-4 hover:border-navy-500 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Head Office &amp; Operations</span>
                <span className="text-sm font-bold text-navy-950 block mt-0.5">
                  [ADD BUSINESS ADDRESS]
                </span>
                <p className="text-xs text-slate-500 mt-1">
                  Harare, Zimbabwe • Serving Beitbridge, Forbes &amp; Chirundu Border Posts
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-6 rounded-3xl bg-navy-950 text-white border border-navy-800 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center flex-shrink-0 border border-navy-700">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-gold-400 uppercase tracking-wider block">Operating Hours</span>
                <span className="text-sm font-bold text-white block mt-0.5">
                  [ADD BUSINESS HOURS]
                </span>
                <p className="text-xs text-slate-400 mt-1">
                  Monday – Friday: 08:00 – 17:00 (CAT) • Emergency WhatsApp support for en-route border transit.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-premium">
            <div className="border-b border-slate-100 pb-4 mb-6">
              <h3 className="text-xl font-black text-navy-950 uppercase font-display">
                Send Us A Message
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Our logistics coordinators typically respond within 1 to 2 business hours.
              </p>
            </div>

            {sent ? (
              <div className="py-12 text-center animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-navy-950 uppercase font-display mb-1">
                  Message Sent Successfully!
                </h4>
                <p className="text-sm text-slate-600 max-w-sm mx-auto mb-6">
                  Thank you, <span className="font-semibold">{form.name}</span>. A Tomphil representative will reach out to you shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="bg-navy-900 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-navy-800 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-navy-900 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. John Sibanda"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-gold-500 focus:outline-none text-sm text-slate-800 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-navy-900 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-gold-500 focus:outline-none text-sm text-slate-800 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-navy-900 mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="e.g. +263 77 000 0000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-gold-500 focus:outline-none text-sm text-slate-800 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-navy-900 mb-1.5">
                      Subject / Topic *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="e.g. Car Clearing Enquiry - Beitbridge"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-gold-500 focus:outline-none text-sm text-slate-800 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-navy-900 mb-1.5">
                    How Can We Assist You? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your cargo, vehicle details, origin/destination, or any specific questions you have..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-gold-500 focus:outline-none text-sm text-slate-800 transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold py-4 px-6 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-gold-400" />
                  <span>Send Direct Message</span>
                </button>
              </form>
            )}

            {/* Security Guarantee Note */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-slate-500 text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Your contact information and cargo details are strictly confidential.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
