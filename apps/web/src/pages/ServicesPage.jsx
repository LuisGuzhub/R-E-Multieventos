
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Armchair, Flower2, UtensilsCrossed, Music, Building2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';

const ServicesPage = () => {
  const services = [
    {
      icon: Armchair,
      title: 'Mobiliario',
      description: 'Amplia selección de mesas, sillas, manteles y todo el mobiliario necesario para tu evento. Desde estilos clásicos hasta modernos y minimalistas.',
      benefits: [
        'Sillas y mesas de diversos estilos',
        'Manteles y cubremanteles premium',
        'Mobiliario lounge y cocktail',
        'Entrega e instalación incluida'
      ]
    },
    {
      icon: Flower2,
      title: 'Decoración',
      description: 'Transformamos espacios con decoraciones personalizadas que reflejan tu estilo y visión. Cada detalle cuenta para crear la atmósfera perfecta.',
      benefits: [
        'Centros de mesa personalizados',
        'Arreglos florales frescos',
        'Iluminación ambiental',
        'Decoración temática a medida'
      ]
    },
    {
      icon: UtensilsCrossed,
      title: 'Catering',
      description: 'Menús diseñados por chefs profesionales con ingredientes de primera calidad. Desde cócteles hasta cenas de gala, adaptamos cada propuesta a tus necesidades.',
      benefits: [
        'Menús personalizados',
        'Servicio de mozos profesional',
        'Barra de tragos y bebidas',
        'Opciones vegetarianas y veganas'
      ]
    },
    {
      icon: Music,
      title: 'Sonido & Animación',
      description: 'Equipos de audio profesional y animadores expertos para mantener la energía de tu evento. Música, luces y entretenimiento de primer nivel.',
      benefits: [
        'DJ profesional',
        'Sistema de sonido premium',
        'Iluminación escénica',
        'Animadores y shows en vivo'
      ]
    },
    {
      icon: Building2,
      title: 'Salones',
      description: 'Acceso a los mejores salones y espacios para eventos en Buenos Aires. Desde salones íntimos hasta grandes espacios para celebraciones multitudinarias.',
      benefits: [
        'Variedad de capacidades',
        'Ubicaciones estratégicas',
        'Espacios climatizados',
        'Estacionamiento disponible'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Servicios - R&E Multieventos</title>
        <meta name="description" content="Descubre nuestros servicios integrales para eventos: mobiliario, decoración, catering, sonido, animación y salones. Todo lo que necesitas en un solo lugar." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <section className="pt-32 pb-16 bg-gradient-to-b from-muted to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="heading-font text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
                Nuestros servicios
              </h1>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Ofrecemos soluciones integrales llave en mano para que tu evento sea perfecto en cada detalle
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {services.slice(0, 2).map((service, index) => (
                <ServiceCard key={index} {...service} index={index} />
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(2).map((service, index) => (
                <ServiceCard key={index + 2} {...service} index={index + 2} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-accent text-accent-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-font text-3xl md:text-4xl font-bold mb-6 text-balance">
                ¿Listo para planificar tu evento?
              </h2>
              <p className="text-lg text-accent-foreground/90 mb-8 leading-relaxed">
                Contáctanos hoy y recibe una cotización personalizada sin compromiso
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/cotizador"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-200"
                >
                  Solicitar cotización
                </a>
                <a
                  href="https://wa.me/5491112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-accent-foreground/10 text-accent-foreground border border-accent-foreground/30 rounded-lg font-medium hover:bg-accent-foreground/20 transition-all duration-200"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
