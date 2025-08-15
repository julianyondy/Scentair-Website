import React from 'react';
import { Product } from '../../types';
import { Button } from '../ui/Button';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-card rounded-xl shadow-custom overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Product Image Placeholder */}
      <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
        <div className="w-full h-full bg-white/50 rounded-lg backdrop-blur-sm flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-3">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <p className="text-xs text-muted">Product Image</p>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs font-medium text-accent uppercase tracking-wide">
            {product.category}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-primary mb-2">
          {product.name}
        </h3>
        <p className="text-secondary text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            ${product.price}
          </span>
          <Button size="sm">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};