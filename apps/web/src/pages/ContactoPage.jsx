
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const ContactoPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, eventType: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.eventType) {
      toast.error('Por favor completa todos los campos requeridos');
      return;
    }

    setIsSubmitting(true);

    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push({
      ...formData,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Mensaje enviado correctamente. Te contactaremos pronto');
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: ''
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+593 98 118 6064',
      link: 'https://wa.me/593981186064'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'rye_multieventos@hotmail.com',
      link: 'mailto:rye_multieventos@hotmail.com'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      content: 'Guayaquil, Ecuador',
      link: null
    },
    {
      icon: Clock,
      title: 'Horario',
      content: 'Lun-Vie: 9:00-18:00, Sáb: 10:00-14:00',
      link: null
    }
  ];

  const eventTypes = [
    'Boda',
    'Quinceañera',
    'Cumpleaños',
    'Graduación',
    'Fiesta Infantil',
    'Evento Corporativo',
    'Otro'
  ];

  return (
    <>
      <Helmet>
        <title>Contacto - R&E Multieventos</title>
        <meta name="description" content="Contáctanos para planificar tu evento. Estamos en Buenos Aires y ofrecemos atención personalizada. Teléfono, email y formulario de contacto disponibles." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <section className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="heading-font text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
                Contáctanos
              </h1>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Estamos aquí para hacer realidad el evento de tus sueños. Escríbenos y te responderemos a la brevedad
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-card rounded-2xl p-8 shadow-lg">
                  <h2 className="heading-font text-2xl font-semibold text-card-foreground mb-6">
                    Envíanos un mensaje
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                        Nombre completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="text-foreground"
                        placeholder="Tu nombre"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="text-foreground"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                        Teléfono *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="text-foreground"
                        placeholder="+593 98 118 6064"
                      />
                    </div>

                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium text-card-foreground mb-2">
                        Tipo de evento *
                      </label>
                      <Select value={formData.eventType} onValueChange={handleSelectChange}>
                        <SelectTrigger className="text-foreground">
                          <SelectValue placeholder="Selecciona un tipo de evento" />
                        </SelectTrigger>
                        <SelectContent>
                          {eventTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-medium text-card-foreground mb-2">
                        Fecha del evento
                      </label>
                      <Input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="text-foreground"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                        Mensaje
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="text-foreground"
                        placeholder="Cuéntanos sobre tu evento..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                      size="lg"
                    >
                      {isSubmitting ? (
                        'Enviando...'
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Enviar mensaje
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="bg-accent text-accent-foreground rounded-2xl p-8 shadow-lg">
                  <h2 className="heading-font text-2xl font-semibold mb-6">
                    Información de contacto
                  </h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              target={info.link.startsWith('http') ? '_blank' : undefined}
                              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-accent-foreground/80">{info.content}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-secondary text-secondary-foreground rounded-2xl p-8 shadow-lg">
                  <h3 className="heading-font text-xl font-semibold mb-4">
                    ¿Prefieres WhatsApp?
                  </h3>
                  <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
                    Chatea con nosotros directamente y recibe respuestas inmediatas a tus consultas
                  </p>
                  <Button
                    asChild
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    size="lg"
                  >
                    <a
                      href="https://wa.me/593981186064"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Abrir WhatsApp
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactoPage;
