import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { QuoteModal } from './components/QuoteModal';

// Dedicated Multi-Page Views
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { CarClearingPage } from './pages/CarClearingPage';
import { GoodsClearingPage } from './pages/GoodsClearingPage';
import { GlobalTransportPage } from './pages/GlobalTransportPage';
import { WhyChooseUsPage } from './pages/WhyChooseUsPage';
import { TrackTracePage } from './pages/TrackTracePage';
import { QuotePage } from './pages/QuotePage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedQuoteService, setSelectedQuoteService] = useState<string>('Car Clearing');

  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedQuoteService(serviceName);
    }
    setIsQuoteModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-gold-500 selection:text-white">
        {/* Sticky Corporate Navbar */}
        <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Multi-Page Route Switcher */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/about" element={<AboutPage onOpenQuoteModal={() => handleOpenQuoteModal()} />} />
            <Route path="/services" element={<ServicesPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/car-clearing" element={<CarClearingPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/goods-clearing" element={<GoodsClearingPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/global-transport" element={<GlobalTransportPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/why-choose-us" element={<WhyChooseUsPage onOpenQuoteModal={() => handleOpenQuoteModal()} />} />
            <Route path="/track-trace" element={<TrackTracePage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback route */}
            <Route path="*" element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />} />
          </Routes>
        </main>

        {/* Corporate Dark Footer */}
        <Footer />

        {/* Floating WhatsApp Action Button */}
        <WhatsAppFloatingButton />

        {/* Global Quick Quote Modal */}
        <QuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
          selectedService={selectedQuoteService}
        />
      </div>
    </Router>
  );
}

export default App;
