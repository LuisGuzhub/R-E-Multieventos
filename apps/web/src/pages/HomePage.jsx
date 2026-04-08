
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Calendar, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const HomePage = () => {
  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1632610992723-82d7c212f6d7', alt: 'Elegant wedding reception with floral centerpieces' },
    { src: 'https://images.unsplash.com/photo-1525441273400-056e9c7517b3', alt: 'Beautifully decorated wedding venue' },
    { src: 'https://images.unsplash.com/photo-1678274797624-792240d433dd', alt: 'Stunning event decoration with flowers' },
    { src: 'https://images.unsplash.com/photo-1653449195776-ffb5c38bc539', alt: 'Gourmet catering display' },
    { src: 'https://images.unsplash.com/photo-1639542318757-0bb0c1c4720e', alt: 'Quinceañera celebration setup' },
    { src: 'https://images.unsplash.com/photo-1698934641149-93431f3bd4f7', alt: 'Elegant event venue' },
  ];

  const stats = [
    { icon: Award, value: '13+', label: 'Años de experiencia' },
    { icon: Users, value: '847', label: 'Eventos realizados' },
    { icon: Calendar, value: '100%', label: 'Satisfacción garantizada' },
  ];

  return (
    <>
      <Helmet>
        <title>R&E Multieventos</title>
        <meta name="description" content="Organizamos eventos inolvidables con servicio llave en mano. 13+ años de experiencia en bodas, quinceañeras, cumpleaños y eventos corporativos en Guayaquil." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1632610992723-82d7c212f6d7"
              alt="Elegant event setup"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/80 to-accent/60"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="heading-font text-5xl md:text-6xl lg:text-7xl font-bold text-accent-foreground mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
                Eventos llave en mano que superan expectativas
              </h1>
              <p className="text-xl md:text-2xl text-accent-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Desde la planificación hasta el último detalle, nos encargamos de todo para que disfrutes tu momento especial
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                  <Link to="/cotizador">
                    Solicitar cotización
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-accent-foreground/10 text-accent-foreground border-accent-foreground/30 hover:bg-accent-foreground/20 text-lg px-8 py-6">
                  <Link to="/services">Ver servicios</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <p className="heading-font text-4xl font-bold text-foreground mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">Sobre nosotros</span>
                </div>
                <h2 className="heading-font text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
                  13 años creando momentos inolvidables
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  En R&E Multieventos nos especializamos en ofrecer un servicio integral llave en mano para todo tipo de eventos. Desde bodas elegantes hasta celebraciones corporativas, nos encargamos de cada detalle para que tu evento sea perfecto.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                  Nuestro equipo de profesionales cuenta con más de una década de experiencia transformando visiones en realidad. Trabajamos con los mejores proveedores y utilizamos materiales de primera calidad para garantizar resultados excepcionales.
                </p>
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/contacto">Contáctanos</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img
                      src="https://images.unsplash.com/photo-1525441273400-056e9c7517b3"
                      alt="Wedding decoration detail"
                      className="w-full h-64 object-cover rounded-2xl shadow-lg"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1678274797624-792240d433dd"
                      alt="Floral centerpiece"
                      className="w-full h-48 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="space-y-4 pt-8">
                    <img
                      src="https://images.unsplash.com/photo-1653449195776-ffb5c38bc539"
                      alt="Catering setup"
                      className="w-full h-48 object-cover rounded-2xl shadow-lg"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1639542318757-0bb0c1c4720e"
                      alt="Event venue"
                      className="w-full h-64 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary text-secondary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="heading-font text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
                Galería de eventos
              </h2>
              <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto leading-relaxed">
                Descubre algunos de los eventos que hemos organizado con dedicación y pasión
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/galeria">
                  Ver galería completa
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
