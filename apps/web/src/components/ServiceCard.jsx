
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, benefits, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      
      <h3 className="heading-font text-2xl font-semibold text-foreground mb-4">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      
      <ul className="space-y-3 mt-auto">
        {benefits.map((benefit, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="mt-1 bg-secondary/50 rounded-full p-0.5">
              <Check className="w-4 h-4 text-secondary-foreground" />
            </div>
            <span className="text-sm text-foreground/80">{benefit}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;
