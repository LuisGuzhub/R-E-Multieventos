
import React from 'react';
import { motion } from 'framer-motion';

const ItemPreviewCard = ({ item }) => {
  if (!item) return null;

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(item.price);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm flex flex-col sm:flex-row"
    >
      <div className="sm:w-1/3 h-48 sm:h-auto relative bg-muted">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            Sin imagen
          </div>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col justify-center">
        <h3 className="heading-font text-xl font-semibold text-foreground mb-2">
          {item.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {item.description || 'Servicio premium para tu evento.'}
        </p>
        <div className="mt-auto">
          <span className="text-sm text-muted-foreground">Precio unitario:</span>
          <p className="heading-font text-2xl font-bold text-primary">
            {formattedPrice}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ItemPreviewCard;
