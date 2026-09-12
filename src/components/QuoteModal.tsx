import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { QuoteForm } from './QuoteForm';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, selectedService }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl z-10 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-navy-950 text-white px-6 py-4 flex items-center justify-between border-b border-navy-800">
          <div className="flex items-center gap-3">
            <img src="/images/tomphil-logo.png" alt="Tomphil Logo" className="w-8 h-8 object-contain" />
            <div>
              <h3 className="text-sm sm:text-base font-bold uppercase font-display">
                Request An Official Quotation
              </h3>
              <p className="text-[11px] text-gold-400">Tomphil Logistics Zimbabwe &amp; International</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1">
          <QuoteForm
            initialService={selectedService}
            onSuccessSubmit={() => {
              // auto close after brief delay or user can close
            }}
          />
        </div>
      </div>
    </div>
  );
};
