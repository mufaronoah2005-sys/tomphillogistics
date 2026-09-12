import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Car Clearing', href: '/car-clearing' },
    { name: 'Goods Clearing', href: '/goods-clearing' },
    { name: 'Global Transport', href: '/global-transport' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { name: 'Track & Trace', href: '/track-trace' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top corporate utility bar */}
      <div className="bg-navy-950 text-slate-300 text-[11px] py-1.5 px-4 border-b border-navy-800/80 hidden lg:block">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-5">
            <span className="flex items-center gap-1.5 text-gold-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Zimbabwe Customs &amp; Global Freight Specialists</span>
            </span>
            <span className="text-slate-500">|</span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>Tel/WhatsApp: [ADD PHONE NUMBER]</span>
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-gold-400" />
              <span>[ADD EMAIL ADDRESS]</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3 h-3 text-gold-400" />
              <span>Mon - Fri: 08:00 - 17:00 (CAT)</span>
            </span>
            <span className="bg-navy-900 text-slate-300 px-2 py-0.5 rounded text-[10px] font-semibold border border-navy-700">
              Harare • Beitbridge • Forbes • Chirundu
            </span>
          </div>
        </div>
      </div>

      {/* Main sticky navigation bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-2 sm:py-2.5'
            : 'bg-white py-2.5 sm:py-3 shadow-xs'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-2.5 group focus:outline-none">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0">
              <img
                src="/images/tomphil-logo.png"
                alt="Tomphil Logistics Official Logo"
                className="w-full h-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-navy-900 font-extrabold text-base sm:text-lg tracking-tight leading-tight uppercase font-display">
                Tomphil <span className="text-navy-700">Logistics</span>
              </span>
              <span className="text-[9px] sm:text-[10px] text-gold-600 font-bold tracking-widest uppercase">
                Your Logistics • Our Priority
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `px-3 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all duration-150 ${
                    isActive
                      ? 'text-gold-600 font-bold bg-navy-50/80 shadow-xs'
                      : 'text-navy-900 hover:text-gold-600 hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/track-trace"
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-navy-800 hover:text-navy-950 border border-navy-300 hover:border-navy-600 rounded-full transition-all duration-200"
            >
              Track Cargo
            </Link>
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold px-5 py-2.5 rounded-full text-xs sm:text-sm tracking-wide uppercase shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 group transform active:scale-95"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => onOpenQuoteModal()}
              className="sm:hidden bg-gold-500 text-navy-950 font-bold px-3 py-1.5 rounded-full text-xs uppercase tracking-wide"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-navy-900 hover:text-gold-600 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-5 pt-3 pb-6 space-y-2">
            <div className="p-3 bg-navy-50 rounded-xl mb-3 border border-navy-100 flex items-center justify-between">
              <div>
                <p className="text-xs text-navy-700 font-semibold">Ready to move your shipment?</p>
                <p className="text-[11px] text-slate-500">Contact our Zimbabwe clearance desk</p>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="bg-gold-500 text-navy-950 px-3 py-1.5 rounded-full text-xs font-bold uppercase shadow-sm"
              >
                Instant Quote
              </button>
            </div>

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2.5 text-base font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'text-gold-600 font-bold bg-navy-50'
                      : 'text-navy-900 hover:text-gold-600 hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5">
              <Link
                to="/quote"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold py-3 rounded-xl text-center text-sm uppercase tracking-wider shadow-md"
              >
                Get a Free Quote
              </Link>
              <Link
                to="/track-trace"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold py-2.5 rounded-xl text-center text-sm uppercase tracking-wider"
              >
                Track &amp; Trace Shipment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
