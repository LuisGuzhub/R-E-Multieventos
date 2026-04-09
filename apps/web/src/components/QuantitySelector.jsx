
import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const QuantitySelector = ({ quantity, onChange, min = 1, max = 999 }) => {
  const handleDecrement = () => {
    if (quantity > min) onChange(quantity - 1);
  };

  const handleIncrement = () => {
    if (quantity < max) onChange(quantity + 1);
  };

  const handleInputChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val)) {
      if (val < min) onChange(min);
      else if (val > max) onChange(max);
      else onChange(val);
    } else {
      onChange(min);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={handleDecrement}
        disabled={quantity <= min}
        className="h-10 w-10 rounded-full border-border text-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-secondary"
      >
        <Minus className="h-4 w-4" />
      </Button>
      
      <Input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        min={min}
        max={max}
        className="w-20 h-10 text-center font-medium text-foreground bg-background border-border focus-visible:ring-primary"
      />
      
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={handleIncrement}
        disabled={quantity >= max}
        className="h-10 w-10 rounded-full border-border text-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-secondary"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default QuantitySelector;
