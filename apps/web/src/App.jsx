
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import CotizadorPage from './pages/CotizadorPage.jsx';
import GaleriaPage from './pages/GaleriaPage.jsx';
import ContactoPage from './pages/ContactoPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/cotizador" element={<CotizadorPage />} />
        <Route path="/galeria" element={<GaleriaPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
              <h1 className="heading-font text-6xl font-bold text-foreground mb-4">404</h1>
              <p className="text-xl text-muted-foreground mb-8">Página no encontrada</p>
              <a href="/" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-200">
                Volver al inicio
              </a>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
