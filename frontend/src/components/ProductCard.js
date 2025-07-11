import React from 'react';
import { Plus } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, destaque = false }) {
  return (
    <div
  className={`bg-white border-2 border-orange-500 rounded-xl shadow-md overflow-hidden
        ${destaque ? 'w-90 h-60' : 'w-60 h-40'} 
        hover:scale-105 transition-transform`}
    >
      <img
        src={product.imagem || product.image_url}
        alt={product.nome || product.name}
        className="w-full h-full object-contain p-2"
      />
      <button
        onClick={() => onAddToCart(product)}
        className="absolute bottom-1 right-1 bg-orange-500 text-white p-1 rounded-full hover:bg-orange-600"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
