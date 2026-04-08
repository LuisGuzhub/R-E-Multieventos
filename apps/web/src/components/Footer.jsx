
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/services', label: 'Servicios' },
    { path: '/cotizador', label: 'Cotizador' },
    { path: '/galeria', label: 'Galería' },
    { path: '/contacto', label: 'Contacto' },
  ];

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="inline-block mb-6 group">
              <img
                src="https://horizons-cdn.hostinger.com/e6d4d1ad-901e-4893-9c34-5f8868905d77/c1cf77019c5507d76d4530561deb6176.jpg"
                alt="R&E Multieventos logo"
                className="h-16 lg:h-20 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>
            <p className="text-accent-foreground/80 leading-relaxed">
              Creando momentos inolvidables desde 2011. Servicio llave en mano para tus eventos especiales.
            </p>
          </div>

          <div>
            <h3 className="heading-font text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="heading-font text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a
                  href="https://wa.me/5491112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  +54 9 11 1234-5678
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@remultieventos.com"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  info@remultieventos.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-accent-foreground/80"> Guayaquill, Ecuador</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="heading-font text-lg font-semibold mb-4">Horario</h3>
            <p className="text-accent-foreground/80 leading-relaxed mb-4">
              Lunes a Viernes: 9:00 - 18:00<br />
              Sábados: 10:00 - 14:00
            </p>
            <a
              href="https://wa.me/5491112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-accent-foreground/70 text-sm">
              © {currentYear} R&E Multieventos. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-accent-foreground/70 hover:text-accent-foreground transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/terms" className="text-accent-foreground/70 hover:text-accent-foreground transition-colors">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
