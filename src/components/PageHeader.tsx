import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, ArrowRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  highlightText?: string;
  subtitle: string;
  badge?: string;
  breadcrumbs: BreadcrumbItem[];
  ctaText?: string;
  onCtaClick?: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  highlightText,
  subtitle,
  badge,
  breadcrumbs,
  ctaText = 'Get a Quote Today',
  onCtaClick,
}) => {
  return (
    <div className="relative bg-navy-950 text-white pt-24 sm:pt-28 pb-8 sm:pb-10 overflow-hidden border-b border-navy-800">
      {/* Background Subtle Motifs */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-brandBlue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400 mb-3 flex-wrap">
          <Link to="/" className="flex items-center gap-1 hover:text-gold-400 transition-colors">
            <Home className="w-3 h-3" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((item, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3 h-3 text-slate-600" />
              {item.href ? (
                <Link to={item.href} className="hover:text-gold-400 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gold-400 font-semibold">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Header Content */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-2xl">
            {badge && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-navy-900 border border-brandBlue-500/40 text-brandBlue-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
                <span>{badge}</span>
              </div>
            )}

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase text-white font-display tracking-tight leading-tight">
              {title} {highlightText && <span className="text-gold-500">{highlightText}</span>}
            </h1>

            <p className="mt-1.5 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-xl">
              {subtitle}
            </p>
          </div>

          {/* Quick CTA */}
          <div className="flex-shrink-0 flex items-center">
            {onCtaClick ? (
              <button
                onClick={onCtaClick}
                className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 flex items-center gap-1.5"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <Link
                to="/quote"
                className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all shadow-sm active:scale-95 flex items-center gap-1.5"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
