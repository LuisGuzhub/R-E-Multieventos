
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/services', label: 'Servicios' },
    { path: '/cotizador', label: 'Cotizador' },
    { path: '/galeria', label: 'Galería' },
    { path: '/contacto', label: 'Contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center group">
            <img
              src="https://horizons-cdn.hostinger.com/e6d4d1ad-901e-4893-9c34-5f8868905d77/e0b7f249617ef55c326052ce9cc2f68f.jpg"
              alt="R&E Multieventos logo"
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:opacity-90"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative py-2 heading-font text-base tracking-widest text-foreground transition-colors duration-300 group"
                >
                  {link.label}
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-[1px] bg-accent transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 heading-font tracking-wider rounded-none px-8 py-6 h-auto text-sm uppercase"
            >
              <Link to="/cotizador">
                Cotizar Evento
              </Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground hover:bg-muted"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 heading-font tracking-widest text-lg transition-all duration-200 border-l-2 ${
                      isActive
                        ? 'text-primary border-accent bg-muted/50'
                        : 'text-foreground border-transparent hover:text-primary hover:border-accent/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="px-4 pt-4 mt-2 border-t border-border/50">
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 heading-font tracking-wider rounded-none py-6 h-auto text-sm uppercase"
                >
                  <Link to="/cotizador">
                    Cotizar Evento
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
