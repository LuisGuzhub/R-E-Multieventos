
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import GalleryImage from '@/components/GalleryImage.jsx';

const GaleriaPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'bodas', label: 'Bodas' },
    { id: 'quinceaneras', label: 'Quinceañeras' },
    { id: 'cumpleanos', label: 'Cumpleaños' },
    { id: 'graduaciones', label: 'Graduaciones' },
    { id: 'infantiles', label: 'Fiestas Infantiles' },
  ];

  const galleryItems = [
    { src: 'https://images.unsplash.com/photo-1632610992723-82d7c212f6d7', alt: 'Elegant wedding reception with floral centerpieces and ambient lighting', category: 'bodas' },
    { src: 'https://images.unsplash.com/photo-1525441273400-056e9c7517b3', alt: 'Beautifully decorated wedding venue with romantic atmosphere', category: 'bodas' },
    { src: 'https://images.unsplash.com/photo-1561940329-7382e6704231', alt: 'Outdoor wedding ceremony setup with elegant decorations', category: 'bodas' },
    { src: 'https://images.unsplash.com/photo-1678274797624-792240d433dd', alt: 'Stunning floral decoration arrangement for special events', category: 'bodas' },
    { src: 'https://images.unsplash.com/photo-1586245021641-a6ef44a4a1ff', alt: 'Elegant table decoration with flowers and candles', category: 'bodas' },
    { src: 'https://images.unsplash.com/photo-1637829332993-6758e19ad3d0', alt: 'Premium event decoration with sophisticated design', category: 'bodas' },
    { src: 'https://images.unsplash.com/photo-1653449195776-ffb5c38bc539', alt: 'Gourmet catering display with elegant presentation', category: 'cumpleanos' },
    { src: 'https://images.unsplash.com/photo-1658893643744-ec43ac342315', alt: 'Professional catering service for special events', category: 'cumpleanos' },
    { src: 'https://images.unsplash.com/photo-1639542318757-0bb0c1c4720e', alt: 'Quinceañera celebration with elegant pink decorations', category: 'quinceaneras' },
    { src: 'https://images.unsplash.com/photo-1572337056846-fc805e11bc51', alt: 'Beautiful quinceañera party setup with premium details', category: 'quinceaneras' },
    { src: 'https://images.unsplash.com/photo-1698934641149-93431f3bd4f7', alt: 'Elegant event venue with sophisticated interior design', category: 'graduaciones' },
    { src: 'https://images.unsplash.com/photo-1588087803910-1574c4436162', alt: 'Premium event space with modern amenities', category: 'graduaciones' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Galería - R&E Multieventos</title>
        <meta name="description" content="Explora nuestra galería de eventos realizados: bodas, quinceañeras, cumpleaños, graduaciones y fiestas infantiles. Inspiración para tu próximo evento." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <section className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="heading-font text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
                Galería de eventos
              </h1>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Descubre la magia de nuestros eventos realizados con dedicación y profesionalismo
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                    activeFilter === category.id
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item, index) => (
                <GalleryImage
                  key={`${item.category}-${index}`}
                  src={item.src}
                  alt={item.alt}
                  category={categories.find(c => c.id === item.category)?.label || ''}
                  index={index}
                />
              ))}
            </motion.div>

            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No hay imágenes en esta categoría
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-font text-3xl md:text-4xl font-bold mb-6 text-balance">
                ¿Listo para crear tu evento soñado?
              </h2>
              <p className="text-lg text-secondary-foreground/90 mb-8 leading-relaxed">
                Contáctanos y hagamos realidad la celebración que siempre imaginaste
              </p>
              <a
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-all duration-200"
              >
                Contáctanos
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default GaleriaPage;
