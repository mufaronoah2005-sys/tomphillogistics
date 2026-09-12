import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageSquare, Clock, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/images/tomphil-logo.png"
                alt="Tomphil Logistics Logo"
                className="w-14 h-14 object-contain drop-shadow-md"
              />
              <div>
                <span className="text-white font-extrabold text-lg uppercase tracking-tight font-display block">
                  Tomphil <span className="text-gold-400">Logistics</span>
                </span>
                <span className="text-xs text-gold-500 font-bold uppercase tracking-widest block">
                  “Your Logistics. Our Priority.”
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Professional logistics, customs clearing, freight forwarding, and international transportation services. Specializing in vehicle and cargo movements into and out of Zimbabwe and across the globe.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/?text=Hello%20Tomphil%20Logistics"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-navy-900 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center border border-navy-800 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <Link
                to="/contact"
                className="w-9 h-9 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white flex items-center justify-center border border-navy-800 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="w-9 h-9 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white flex items-center justify-center border border-navy-800 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase text-white tracking-widest font-display">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-gold-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors">Services Hub</Link>
              </li>
              <li>
                <Link to="/car-clearing" className="hover:text-gold-400 transition-colors">Car Clearing</Link>
              </li>
              <li>
                <Link to="/goods-clearing" className="hover:text-gold-400 transition-colors">Goods Clearing</Link>
              </li>
              <li>
                <Link to="/global-transport" className="hover:text-gold-400 transition-colors">Global Transport</Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="hover:text-gold-400 transition-colors">Why Choose Us</Link>
              </li>
              <li>
                <Link to="/track-trace" className="hover:text-gold-400 transition-colors">Track &amp; Trace</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services Directory */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase text-white tracking-widest font-display">
              Services Directory
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/car-clearing" className="hover:text-gold-400 transition-colors">Car Clearing (Zimbabwe)</Link>
              </li>
              <li>
                <Link to="/goods-clearing" className="hover:text-gold-400 transition-colors">Commercial Goods Clearing</Link>
              </li>
              <li>
                <Link to="/global-transport" className="hover:text-gold-400 transition-colors">Air Freight (Express)</Link>
              </li>
              <li>
                <Link to="/global-transport" className="hover:text-gold-400 transition-colors">Sea Freight (FCL &amp; LCL)</Link>
              </li>
              <li>
                <Link to="/global-transport" className="hover:text-gold-400 transition-colors">Road Freight (Cross-Border)</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors">Door-to-Door Logistics</Link>
              </li>
              <li>
                <Link to="/car-clearing" className="hover:text-gold-400 transition-colors">ZIMRA Duty Estimator</Link>
              </li>
            </ul>
          </div>

          {/* Official Contact Info (Placeholders) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase text-white tracking-widest font-display">
              Contact Desk
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Phone: <span className="font-mono text-white">[ADD PHONE NUMBER]</span></span>
              </li>
              <li className="flex items-start gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>WhatsApp: <span className="font-mono text-white">[ADD WHATSAPP NUMBER]</span></span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Email: <span className="font-mono text-white">[ADD EMAIL ADDRESS]</span></span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Address: <span className="text-white">[ADD BUSINESS ADDRESS]</span>, Harare, Zimbabwe</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Hours: <span className="text-white">[ADD BUSINESS HOURS]</span></span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Tomphil Logistics. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>“From Zimbabwe to the World”</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-slate-400 transition-colors flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
