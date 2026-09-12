import React, { useState, useEffect } from 'react';
import { MessageSquare, CheckCircle, Car, ArrowRight } from 'lucide-react';

interface QuoteFormProps {
  initialService?: string;
  onSuccessSubmit?: () => void;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ initialService = '', onSuccessSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: 'Car Clearing',
    origin: '',
    destination: 'Harare, Zimbabwe',
    cargoType: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    vehicleValue: '',
    estimatedWeight: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const services = [
    'Car Clearing',
    'Goods Clearing',
    'Air Freight',
    'Sea Freight',
    'Road Freight',
    'Door-to-Door Delivery',
    'Other',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isCarService = formData.service === 'Car Clearing';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate reliable form processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onSuccessSubmit) onSuccessSubmit();
    }, 800);
  };

  // Generate WhatsApp Direct Pre-filled Quote Link
  const buildWhatsAppLink = () => {
    const phonePlaceholder = '263770000000'; // Target placeholder WhatsApp number
    let text = `*NEW QUOTE REQUEST - TOMPHIL LOGISTICS*%0A%0A`;
    text += `*Full Name:* ${encodeURIComponent(formData.fullName || '[Not specified]')}%0A`;
    if (formData.companyName) text += `*Company:* ${encodeURIComponent(formData.companyName)}%0A`;
    text += `*Phone / WhatsApp:* ${encodeURIComponent(formData.phone || '[Not specified]')}%0A`;
    text += `*Service:* ${encodeURIComponent(formData.service)}%0A`;
    text += `*Origin:* ${encodeURIComponent(formData.origin || '[Not specified]')}%0A`;
    text += `*Destination:* ${encodeURIComponent(formData.destination || 'Zimbabwe')}%0A`;
    if (isCarService) {
      text += `*Vehicle Details:* ${encodeURIComponent(
        `${formData.vehicleMake} ${formData.vehicleModel} (${formData.vehicleYear || 'Year'}), Value: ${formData.vehicleValue || 'N/A'}`
      )}%0A`;
    } else {
      text += `*Cargo Type:* ${encodeURIComponent(formData.cargoType || 'General')}%0A`;
      text += `*Weight:* ${encodeURIComponent(formData.estimatedWeight || 'N/A')}%0A`;
    }
    if (formData.message) text += `*Message:* ${encodeURIComponent(formData.message)}%0A`;
    return `https://wa.me/${phonePlaceholder}?text=${text}`;
  };

  return (
    <section id="quote" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Why Request A Quote with Tomphil */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-gold-600 font-extrabold text-xs tracking-widest uppercase mb-3">
              <span className="w-6 h-0.5 bg-gold-500"></span>
              <span>Fast &amp; Accurate Pricing</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 uppercase tracking-tight font-display mb-6 leading-tight">
              Get A <span className="text-gold-500">Free Quote</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Whether you need vehicle clearing through Beitbridge, ocean containers from China via Beira, or urgent air cargo into Harare, our team provides transparent, competitive pricing with zero hidden clearance fees.
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-2xl bg-navy-50 border border-navy-100 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase text-navy-950">Accurate Duty &amp; Tariff Assessments</h4>
                  <p className="text-xs text-slate-600 mt-0.5">We calculate precise ZIMRA duties, VAT, and surtaxes before your vehicle or goods arrive.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-navy-50 border border-navy-100 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brandBlue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase text-navy-950">Multimodal Route Optimization</h4>
                  <p className="text-xs text-slate-600 mt-0.5">We compare sea, air, road and port options (Durban vs Beira) to minimize overall freight spend.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-navy-50 border border-navy-100 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase text-navy-950">Direct WhatsApp Dispatch</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Prefer messaging? Complete the form and send your specs straight to our WhatsApp desk.</p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Alternative Callout */}
            <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs font-extrabold uppercase text-emerald-800 tracking-wider">Fast-Track Via WhatsApp</div>
                <div className="text-xs text-emerald-700 mt-0.5">Chat directly with a clearing specialist now</div>
              </div>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-full text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm flex-shrink-0 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Quote Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-premium">
            {submitted ? (
              <div className="text-center py-12 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-navy-950 uppercase font-display mb-2">
                  Quote Request Submitted!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mb-8 leading-relaxed">
                  Thank you, <span className="font-semibold text-navy-900">{formData.fullName}</span>. Our Zimbabwe customs &amp; freight team is reviewing your specifications and will respond shortly via Email / WhatsApp.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider flex items-center gap-2 shadow-md transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Follow Up on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-navy-100 hover:bg-navy-200 text-navy-900 font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-colors"
                  >
                    Submit Another Quote
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-slate-100 pb-4 mb-4">
                  <h3 className="text-xl font-black text-navy-950 uppercase font-display">
                    Cargo &amp; Clearance Details
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out the fields below for an official quotation.
                  </p>
                </div>

                {/* Row 1: Full Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-navy-900 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Tendai Moyo"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none text-sm text-slate-800 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-navy-900 mb-1.5">
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Moyo Enterprises Ltd"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none text-sm text-slate-800 transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone / WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-navy-900 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. client@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none text-sm text-slate-800 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-navy-900 mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +263 77 000 0000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none text-sm text-slate-800 transition-colors"
                    />
                  </div>
                </div>

                {/* Row 3: Service Required */}
                <div>
                  <label className="block text-xs font-bold uppercase text-navy-900 mb-1.5">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none text-sm text-slate-800 bg-white transition-colors"
                  >
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Row 4: Origin & Destination */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-navy-900 mb-1.5">
                      Origin (City / Port / Country) *
                    </label>
                    <input
                      type="text"
                      name="origin"
                      required
                      value={formData.origin}
                      onChange={handleChange}
                      placeholder="e.g. Durban, SA or Tokyo, Japan"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none text-sm text-slate-800 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-navy-900 mb-1.5">
                      Destination (Zimbabwe / Regional) *
                    </label>
                    <input
                      type="text"
                      name="destination"
                      required
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="e.g. Harare, Zimbabwe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 focus:outline-none text-sm text-slate-800 transition-colors"
                    />
                  </div>
                </div>

                {/* Dynamic Section: Vehicle Details if Car Clearing is selected */}
                {isCarService ? (
                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase text-amber-900 tracking-wider">
                      <Car className="w-4 h-4 text-amber-700" />
                      <span>Vehicle Clearing Specifications</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                          Vehicle Make
                        </label>
                        <input
                          type="text"
                          name="vehicleMake"
                          value={formData.vehicleMake}
                          onChange={handleChange}
                          placeholder="e.g. Toyota, Mercedes-Benz, Nissan"
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs text-slate-800"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                          Model &amp; Engine Capacity
                        </label>
                        <input
                          type="text"
                          name="vehicleModel"
                          value={formData.vehicleModel}
                          onChange={handleChange}
                          placeholder="e.g. Hilux 2.8 GD-6 / 2800cc"
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs text-slate-800"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                          Year of Manufacture
                        </label>
                        <input
                          type="text"
                          name="vehicleYear"
                          value={formData.vehicleYear}
                          onChange={handleChange}
                          placeholder="e.g. 2021"
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs text-slate-800"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase text-slate-700 mb-1">
                          Estimated Invoice Value (USD)
                        </label>
                        <input
                          type="text"
                          name="vehicleValue"
                          value={formData.vehicleValue}
                          onChange={handleChange}
                          placeholder="e.g. $18,500"
                          className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white text-xs text-slate-800"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* General Goods Details */
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-navy-900 mb-1.5">
                        Cargo Type / Description *
                      </label>
                      <input
                        type="text"
                        name="cargoType"
                        value={formData.cargoType}
                        onChange={handleChange}
                        placeholder="e.g. Mining Spare Parts / Commercial FMCG"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-gold-500 focus:outline-none text-sm text-slate-800 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-navy-900 mb-1.5">
                        Estimated Weight / Volume
                      </label>
                      <input
                        type="text"
                        name="estimatedWeight"
                        value={formData.estimatedWeight}
                        onChange={handleChange}
                        placeholder="e.g. 1,500 kg or 1x 20ft FCL"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-gold-500 focus:outline-none text-sm text-slate-800 transition-colors"
                      />
                    </div>
                  </div>
                )}

                {/* Row 5: Message */}
                <div>
                  <label className="block text-xs font-bold uppercase text-navy-900 mb-1.5">
                    Additional Shipment Notes / Message
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide any additional specifics, preferred border post (e.g. Beitbridge), delivery timeframe or special instructions..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-gold-500 focus:outline-none text-sm text-slate-800 transition-colors"
                  ></textarea>
                </div>

                {/* Form Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto flex-1 bg-gold-500 hover:bg-gold-600 text-navy-950 font-black py-4 px-8 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Calculating Assessment...</span>
                    ) : (
                      <>
                        <span>Request a Quote</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 flex-shrink-0"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Via WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
