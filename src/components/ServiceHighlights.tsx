import React from 'react';
import { Car, Package, Ship, Globe, Check } from 'lucide-react';

interface ServiceHighlightsProps {
  onSelectService: (serviceName: string) => void;
}

export const ServiceHighlights: React.FC<ServiceHighlightsProps> = ({ onSelectService }) => {
  const highlights = [
    {
      id: 'car-clearing',
      title: 'CAR CLEARING',
      subtitle: 'IN & OUT OF ZIMBABWE',
      icon: Car,
      points: [
        'Vehicle import & export clearance',
        'Duty, tax and compliance support',
        'Fast and hassle-free process',
      ],
      linkText: 'Learn More About Cars',
    },
    {
      id: 'goods-clearing',
      title: 'GOODS CLEARING',
      subtitle: 'IN & OUT OF ZIMBABWE',
      icon: Package,
      points: [
        'General cargo clearance',
        'Documentation & customs support',
        'Safe and timely release',
      ],
      linkText: 'Learn More About Goods',
    },
    {
      id: 'global-transport',
      title: 'GLOBAL TRANSPORT',
      subtitle: 'AIR | SEA | ROAD',
      icon: Ship,
      points: [
        'Worldwide shipping solutions',
        'Full container load (FCL) & Less than container load (LCL)',
        'Door-to-door delivery',
      ],
      linkText: 'View Freight Options',
    },
    {
      id: 'logistics-solutions',
      title: 'LOGISTICS SOLUTIONS',
      subtitle: 'FOR EVERY NEED',
      icon: Globe,
      points: [
        'Import & export handling',
        'Supply chain support',
        'Tracking & real-time updates',
      ],
      linkText: 'Explore Logistics',
    },
  ];

  return (
    <section id="service-highlights" className="relative z-20 bg-white py-12 lg:py-16 border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-navy-600 transition-all duration-300 shadow-sm hover:shadow-premium flex flex-col justify-between"
              >
                <div>
                  {/* Circular Badge Icon matching reference */}
                  <div className="w-14 h-14 rounded-full bg-navy-900 text-white flex items-center justify-center mb-5 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300 shadow-md">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-navy-950 font-black text-lg tracking-tight uppercase font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold text-navy-600 tracking-wider uppercase mb-4">
                    {item.subtitle}
                  </p>

                  <ul className="space-y-2.5 text-sm text-slate-600 mb-6">
                    {item.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-brandBlue-600 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(item.title)}
                    className="text-xs font-bold uppercase tracking-wider text-navy-900 group-hover:text-gold-600 transition-colors flex items-center gap-1.5"
                  >
                    <span>{item.linkText}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
