import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Small notification bubble on load */}
      {showTooltip && (
        <div className="mb-2 p-3 bg-white text-navy-950 rounded-2xl shadow-xl border border-slate-200 text-xs font-semibold max-w-[220px] relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -left-1.5 w-5 h-5 bg-slate-200 hover:bg-slate-300 rounded-full text-slate-700 flex items-center justify-center text-[10px]"
            aria-label="Close message"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-1.5 text-emerald-600 font-bold mb-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Zimbabwe Customs Desk</span>
          </div>
          <p className="text-[11px] text-slate-600">
            Need fast duty calculation or shipment advice? Chat with us live!
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href="https://wa.me/?text=Hello%20Tomphil%20Logistics%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-glow-gold hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 group relative"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold">
          1
        </span>
        <MessageSquare className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};
