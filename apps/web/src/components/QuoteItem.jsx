
import React from 'react';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const QuoteItem = ({ item, onRemove }) => {
  const subtotal = item.price * item.quantity;

  const formatUSD = (value) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-card border border-border rounded-xl gap-4 hover:border-primary/30 transition-colors">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="inline-flex items-center justify-center bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded-md">
            {item.quantity}x
          </span>
          <p className="font-semibold text-foreground">{item.name}</p>
        </div>
        <p className="text-sm text-muted-foreground">
          {item.category} • {formatUSD(item.price)} c/u
        </p>
      </div>
      
      <div className="flex items-center justify-between sm:justify-end gap-6">
        <div className="text-right">
          <p className="text-xs text-muted-foreground mb-0.5">Subtotal</p>
          <p className="font-bold text-primary heading-font text-lg">
            {formatUSD(subtotal)}
          </p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onRemove(item.quoteId)}
          className="h-9 w-9 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full"
          aria-label="Eliminar item"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default QuoteItem;
