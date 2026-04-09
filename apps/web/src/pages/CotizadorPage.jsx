
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ShoppingCart, ArrowRight, ImportIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import QuoteItem from '@/components/QuoteItem.jsx';
import ItemPreviewCard from '@/components/ItemPreviewCard.jsx';
import QuantitySelector from '@/components/QuantitySelector.jsx';
import { id } from 'date-fns/locale';
<<<<<<< HEAD
=======
import sillaPlas from '../assets/cotizador/silla-plastica.png';
>>>>>>> e5fb1771c485d4198f5be2c67d935080d3f0cce0
const CotizadorPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedItemId, setSelectedItemId] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [quote, setQuote] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedQuote = localStorage.getItem('re_multieventos_quote');
    if (savedQuote) {
      try {
        setQuote(JSON.parse(savedQuote));
      } catch (e) {
        console.error('Error loading quote', e);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('re_multieventos_quote', JSON.stringify(quote));
    }
  }, [quote, isLoaded]);

  const serviceCategories = {
    mobiliario: {
      name: 'Mobiliario',
      items: [
<<<<<<< HEAD
        { id: 'mob1', name: 'Sillas de Plástico', price: 0.30, description: 'Sillas prácticas y resistentes, ideales para eventos casuales y de alto flujo.', image: new URL('../assets/cotizador/mobiliario/silla_plastica.png', import.meta.url).href },
        { id: 'mob2', name: 'Sillas Tiffany Dorada', price: 2.00, description: 'Sillas elegantes estilo Tiffany en acabado dorado, perfectas para eventos sofisticados.', image: new URL('../assets/cotizador/mobiliario/silla_tiffanny.png', import.meta.url).href },
        { id: 'mob3', name: 'Sillas Vestidas', price: 1.00, description: 'Sillas decoradas con forros y detalles elegantes para una presentación impecable.', image: new URL('../assets/cotizador/mobiliario/silla_vestida.png', import.meta.url).href },
        { id: 'mob4', name: 'Mesas de Plástico', price: 3.00, description: 'Mesas funcionales y versátiles, ideales para todo tipo de eventos y montajes.', image: new URL('../assets/cotizador/mobiliario/mesa_plástica.png', import.meta.url).href },
        { id: 'mob5', name: 'Mesas de Plástico Vestidas', price: 8.00, description: 'Mesas de estilo elegante que aportan distinción y armonía al ambiente del evento.', image: new URL('../assets/cotizador/mobiliario/mesa_plástica_vestida.png', import.meta.url).href },
        { id: 'mob6', name: 'Mantel', price: 2.00, description: 'Manteles de alta calidad que realzan la presentación de cada mesa.', image: new URL('../assets/cotizador/mobiliario/mantel_base.png', import.meta.url).href },
        { id: 'mob7', name: 'Sobre Mantel', price: 2.00, description: 'Sobremanteles decorativos que añaden contraste y elegancia a la mesa.', image: new URL('../assets/cotizador/mobiliario/sobre_mantel.png', import.meta.url).href },
=======
        { id: 'mob1', name: 'Sillas de Plástico', price: 0.30, description: 'Sillas prácticas y resistentes, ideales para eventos casuales y de alto flujo.', img: { src: sillaPlas } },
        { id: 'mob2', name: 'Sillas Tiffany Dorada', price: 2.00, description: 'Sillas elegantes estilo Tiffany en acabado dorado, perfectas para eventos sofisticados.', image: 'https://images.unsplash.com/photo-1496493012244-37fea64e1fe3' },
        { id: 'mob3', name: 'Sillas Vestidas', price: 1.00, description: 'Sillas decoradas con forros y detalles elegantes para una presentación impecable.', image: 'https://images.unsplash.com/photo-1574913746706-39f69232f7f5' },
        { id: 'mob4', name: 'Mesas de Plástico', price: 3.00, description: 'Mesas funcionales y versátiles, ideales para todo tipo de eventos y montajes.', image: 'https://images.unsplash.com/photo-1683918023703-b9e537e818f6' },
        { id: 'mob5', name: 'Mesas de Plástico Vestidas', price: 8.00, description: 'Mesas de estilo elegante que aportan distinción y armonía al ambiente del evento.', image: 'https://images.unsplash.com/photo-1690332538891-8ee943e8b5c5' },
        { id: 'mob6', name: 'Mantel', price: 2.00, description: 'Manteles de alta calidad que realzan la presentación de cada mesa.', image: 'https://images.unsplash.com/photo-1683918023703-b9e537e818f6' },
        { id: 'mob7', name: 'Sobre Mantel', price: 2.00, description: 'Sobremanteles decorativos que añaden contraste y elegancia a la mesa.', image: 'https://images.unsplash.com/photo-1496493012244-37fea64e1fe3' },
>>>>>>> e5fb1771c485d4198f5be2c67d935080d3f0cce0
      ]
    },
    decoracion: {
      name: 'Decoración',
      items: [
<<<<<<< HEAD
        { id: 'dec1', name: 'Carpa Vestida con Flores', price: 450.00, description: 'Carpa decorada con telas y arreglos florales que crean un ambiente elegante y sofisticado.', image: new URL('../assets/cotizador/decoracion/carpa_flores.png', import.meta.url).href },
        { id: 'dec2', name: 'Carpa vestida con Forros', price: 300.00, description: 'Carpa cubierta con telas decorativas que aportan estilo y armonía al espacio del evento.', image: new URL('../assets/cotizador/decoracion/carpa_forro.png', import.meta.url).href },
        { id: 'dec3', name: 'Tules', price: 40.00, description: 'Tela decorativa ligera ideal para ambientar espacios y crear efectos visuales delicados.', image: new URL('../assets/cotizador/decoracion/tules.png', import.meta.url).href },
        { id: 'dec4', name: 'Letras "LOVE"', price: 40.00, description: 'Letras iluminadas que aportan un toque romántico y especial al evento.', image: new URL('../assets/cotizador/decoracion/letras_love.png', import.meta.url).href },
        { id: 'dec5', name: 'Letras Personalizadas', price: 40.00, description: 'Letras decorativas personalizadas con nombres o frases para destacar momentos únicos.', image: new URL('../assets/cotizador/decoracion/letras_personalizadas.png', import.meta.url).href },
        { id: 'dec6', name: 'Número "15"', price: 40.00, description: 'Número decorativo ideal para resaltar celebraciones de quinceañera con estilo.', image: new URL('../assets/cotizador/decoracion/quince.png', import.meta.url).href },
        { id: 'dec7', name: 'Sillón para Quinceañera', price: 30.00, description: 'Sillón elegante diseñado para realzar el protagonismo de la quinceañera.', image: new URL('../assets/cotizador/decoracion/sillon_quinceanera.png', import.meta.url).href },
        { id: 'dec8', name: 'Decoración con mesas Tifanny', price: 500.00, description: 'Montaje completo con mesas Tiffany que brinda un ambiente exclusivo y sofisticado.', image: new URL('../assets/cotizador/decoracion/decoracion_mesas_tifanny.png', import.meta.url).href },
        { id: 'dec9', name: 'Centro de mesa', price: 15.00, description: 'Decoración central que aporta elegancia y armonía a cada mesa del evento.', image: new URL('../assets/cotizador/decoracion/centro_mesa.png', import.meta.url).href },
        { id: 'dec11', name: 'Base para el centro de mesa', price: 3.00, description: 'Base decorativa que complementa y eleva la presentación del centro de mesa.', image: new URL('../assets/cotizador/decoracion/base_centro.png', import.meta.url).href },
        { id: 'dec12', name: 'Estructura de la pista de baile', price: 300.00, description: 'Estructura firme y segura que define el espacio ideal para disfrutar la pista de baile.', image: new URL('../assets/cotizador/decoracion/pista_baile.png', import.meta.url).href },
        { id: 'dec13', name: 'Pared revestida con Flores', price: 200.00, description: 'Pared decorativa revestida con arreglos florales que crean un ambiente elegante y sofisticado.', image: new URL('../assets/cotizador/decoracion/pared_flores.png', import.meta.url).href },
=======
        { id: 'dec1', name: 'Carpa Vestida con Flores', price: 450.00, description: 'Carpa decorada con telas y arreglos florales que crean un ambiente elegante y sofisticado.', image: 'https://images.unsplash.com/photo-1528435616957-dd0479cba90b' },
        { id: 'dec2', name: 'Carpa vestida con Forros', price: 300.00, description: 'Carpa cubierta con telas decorativas que aportan estilo y armonía al espacio del evento.', image: 'https://images.unsplash.com/photo-1694158142493-ffa63547e0b2' },
        { id: 'dec3', name: 'Tules', price: 40.00, description: 'Tela decorativa ligera ideal para ambientar espacios y crear efectos visuales delicados.', image: 'https://images.unsplash.com/photo-1528435616957-dd0479cba90b' },
        { id: 'dec4', name: 'Letras "LOVE"', price: 40.00, description: 'Letras iluminadas que aportan un toque romántico y especial al evento.', image: 'https://images.unsplash.com/photo-1694158142493-ffa63547e0b2' },
        { id: 'dec5', name: 'Letras Personalizadas', price: 40.00, description: 'Letras decorativas personalizadas con nombres o frases para destacar momentos únicos.', image: 'https://images.unsplash.com/photo-1528435616957-dd0479cba90b' },
        { id: 'dec6', name: 'Número "15"', price: 40.00, description: 'Número decorativo ideal para resaltar celebraciones de quinceañera con estilo.', image: 'https://images.unsplash.com/photo-1528435616957-dd0479cba90b' },
        { id: 'dec7', name: 'Sillón para Quinceañera', price: 30.00, description: 'Sillón elegante diseñado para realzar el protagonismo de la quinceañera.', image: 'https://images.unsplash.com/photo-1498885145901-683e0e55d721' },
        { id: 'dec8', name: 'Decoración con mesas Tifanny', price: 500.00, description: 'Montaje completo con mesas Tiffany que brinda un ambiente exclusivo y sofisticado.', image: 'https://images.unsplash.com/photo-1528435616957-dd0479cba90b' },
        { id: 'dec9', name: 'Centro de mesa', price: 15.00, description: 'Decoración central que aporta elegancia y armonía a cada mesa del evento.', image: 'https://images.unsplash.com/photo-1528435616957-dd0479cba90b' },
        { id: 'dec11', name: 'Base para el centro de mesa', price: 3.00, description: 'Base decorativa que complementa y eleva la presentación del centro de mesa.', image: 'https://images.unsplash.com/photo-1528435616957-dd0479cba90b' },
        { id: 'dec12', name: 'Estructura de la pista de baile', price: 300.00, description: 'Estructura firme y segura que define el espacio ideal para disfrutar la pista de baile.', image: 'https://images.unsplash.com/photo-1528435616957-dd0479cba90b' },
>>>>>>> e5fb1771c485d4198f5be2c67d935080d3f0cce0
      ]
    },
    catering: {
      name: 'Catering',
      items: [
        { id: 'cat1', name: 'Buffet básico (por persona)', price: 12.00, description: 'Opciones clásicas de recepción y plato principal.', image: 'https://images.unsplash.com/photo-1653449195776-ffb5c38bc539' },
        { id: 'cat2', name: 'Buffet premium (por persona)', price: 18.00, description: 'Experiencia culinaria superior con ingredientes selectos.', image: 'https://images.unsplash.com/photo-1694158142493-ffa63547e0b2' },
        { id: 'cat3', name: 'Soft(No alcohol)', price: 3.00, description: 'Gaseosas, aguas y jugos libres durante el evento.', image: 'https://images.unsplash.com/photo-1653449195776-ffb5c38bc539' },
        { id: 'cat4', name: 'Bocaditos', price: 15.00, description: 'Mesa dulce variada para compartir.', image: 'https://images.unsplash.com/photo-1694158142493-ffa63547e0b2' },
        { id: 'cat5', name: 'Postres', price: 2.00, description: 'Servicio de cafetería para el cierre del evento.', image: 'https://images.unsplash.com/photo-1653449195776-ffb5c38bc539' },
        { id: 'cat6', name: 'Cocteles', price: 8.00, description: 'Bebidas alcohólicas y cócteles clásicos para animar tu evento.', image: 'https://images.unsplash.com/photo-1694158142493-ffa63547e0b2' },
      ]
    },
    sonido: {
      name: 'Sonido & Animación',
      items: [
        { id: 'son1', name: 'DJ (por hora)', price: 50.00, description: 'Musicalización profesional adaptada a tu estilo.', image: 'https://images.unsplash.com/photo-1528435616957-dd0479cba90b' },
        { id: 'son2', name: 'Luces de pista', price: 30.00, description: 'Efectos de iluminación rítmica para la pista de baile.', image: 'https://images.unsplash.com/photo-1528435616957-dd0479cba90b' },
        { id: 'son3', name: 'Animador/Maestro de ceremonias', price: 40.00, description: 'Conducción profesional para guiar los momentos del evento.', image: 'https://images.unsplash.com/photo-1498885145901-683e0e55d721' },
        { id: 'son4', name: 'Proyector', price: 60.00, description: 'Parlantes, consola y amplificación para todo el salón.', image: 'https://images.unsplash.com/photo-1528435616957-dd0479cba90b' },
      ]
    },
    salon: {
      name: 'Salón',
      items: [
        { id: 'sal1', name: 'Hotel Presidente (hasta 300 personas)', price: 150.00, description: 'Espacio íntimo ideal para cumpleaños y reuniones familiares.', image: 'https://images.unsplash.com/photo-1683918023703-b9e537e818f6' },
        { id: 'sal2', name: 'Local Ambar (hasta 100 personas)', price: 250.00, description: 'Salón versátil con pista de baile y sector de mesas.', image: 'https://images.unsplash.com/photo-1690332538891-8ee943e8b5c5' },
        { id: 'sal3', name: 'Local Rivaldel (hasta 200 personas)', price: 400.00, description: 'Amplio espacio para bodas y eventos corporativos.', image: 'https://images.unsplash.com/photo-1683918023703-b9e537e818f6' },
        { id: 'sal4', name: 'Club Social Aerotécnicos FAE (hasta 300 personas)', price: 600.00, description: 'Instalaciones premium con áreas exclusivas y jardines.', image: 'https://images.unsplash.com/photo-1690332538891-8ee943e8b5c5' },
      ]
    }
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setSelectedItemId('');
    setQuantity(1);
  };

  const handleItemChange = (value) => {
    setSelectedItemId(value);
    setQuantity(1);
  };

  const handleAddToQuote = () => {
    if (!selectedCategory || !selectedItemId) return;

    const categoryData = serviceCategories[selectedCategory];
    const itemData = categoryData.items.find(i => i.id === selectedItemId);

    if (!itemData) return;

    const newItem = {
      ...itemData,
      category: categoryData.name,
      quantity,
      quoteId: `${itemData.id}-${Date.now()}`
    };

    setQuote(prev => [...prev, newItem]);
    toast.success(`${quantity}x ${itemData.name} agregado a la cotización`);

    // Reset selection
    setSelectedItemId('');
    setQuantity(1);
  };

  const handleRemoveFromQuote = (quoteId) => {
    setQuote(prev => prev.filter(item => item.quoteId !== quoteId));
    toast.success('Item eliminado de la cotización');
  };

  const selectedItemData = selectedCategory && selectedItemId
    ? serviceCategories[selectedCategory].items.find(i => i.id === selectedItemId)
    : null;

  const totalPrice = quote.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const formatUSD = (value) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

  return (
    <>
      <Helmet>
        <title>Cotizador Interactivo - R&E Multieventos</title>
        <meta name="description" content="Arma tu presupuesto a medida. Selecciona mobiliario, catering, decoración y más para tu evento." />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="flex-grow pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance" style={{ letterSpacing: '-0.02em' }}>
                Arma tu evento a medida
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Selecciona los servicios, ajusta las cantidades y obtén un presupuesto estimado al instante.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Left Column: Selection Form */}
              <div className="lg:col-span-7 space-y-8">
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
                  <h2 className="heading-font text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">1</span>
                    Selección de Servicios
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Categoría de Servicio
                      </label>
                      <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                        <SelectTrigger className="w-full h-12 text-foreground bg-background">
                          <SelectValue placeholder="Elige una categoría..." />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(serviceCategories).map(([key, category]) => (
                            <SelectItem key={key} value={key}>
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <AnimatePresence mode="wait">
                      {selectedCategory && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Item Específico
                          </label>
                          <Select value={selectedItemId} onValueChange={handleItemChange}>
                            <SelectTrigger className="w-full h-12 text-foreground bg-background">
                              <SelectValue placeholder="Selecciona un item..." />
                            </SelectTrigger>
                            <SelectContent>
                              {serviceCategories[selectedCategory].items.map((item) => (
                                <SelectItem key={item.id} value={item.id}>
                                  {item.name} - {formatUSD(item.price)}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {selectedItemData && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-6"
                    >
                      <ItemPreviewCard item={selectedItemData} />

                      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Cantidad requerida
                          </label>
                          <QuantitySelector
                            quantity={quantity}
                            onChange={setQuantity}
                          />
                        </div>

                        <Button
                          onClick={handleAddToQuote}
                          size="lg"
                          className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
                        >
                          <Plus className="mr-2 h-5 w-5" />
                          Agregar a Cotización
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right Column: Quote Summary */}
              <div className="lg:col-span-5">
                <div className="bg-accent text-accent-foreground rounded-2xl p-6 md:p-8 shadow-lg sticky top-28">
                  <div className="flex items-center gap-3 mb-6 pb-6 border-b border-accent-foreground/20">
                    <div className="w-12 h-12 rounded-full bg-accent-foreground/10 flex items-center justify-center">
                      <ShoppingCart className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h2 className="heading-font text-2xl font-semibold">Tu Presupuesto</h2>
                      <p className="text-accent-foreground/70 text-sm">{quote.length} items seleccionados</p>
                    </div>
                  </div>

                  {quote.length === 0 ? (
                    <div className="text-center py-12 px-4 bg-accent-foreground/5 rounded-xl border border-accent-foreground/10 dashed">
                      <ShoppingCart className="w-12 h-12 mx-auto text-accent-foreground/30 mb-4" />
                      <p className="text-accent-foreground/80 font-medium">Tu cotización está vacía</p>
                      <p className="text-sm text-accent-foreground/60 mt-2">Selecciona servicios en el panel izquierdo para comenzar a armar tu evento.</p>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-3 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                        {quote.map((item) => (
                          <QuoteItem
                            key={item.quoteId}
                            item={item}
                            onRemove={handleRemoveFromQuote}
                          />
                        ))}
                      </div>

                      <div className="bg-background text-foreground rounded-xl p-6 shadow-inner">
                        <div className="flex justify-between items-end mb-6">
                          <div>
                            <p className="text-sm text-muted-foreground font-medium mb-1">Total Estimado</p>
                            <p className="text-xs text-muted-foreground">IVA incluido</p>
                          </div>
                          <span className="heading-font text-4xl font-bold text-primary">
                            {formatUSD(totalPrice)}
                          </span>
                        </div>

                        <Button
                          asChild
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-lg"
                        >
                          <a href="/contacto">
                            Solicitar Reserva
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </a>
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CotizadorPage;
