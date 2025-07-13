import React from 'react';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../services/api';

export default function ProductCard({ product, destaque = false }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${product.id || product.nome || product.name}`);
  };

  const handleAddToCart = (e) => {
  e.stopPropagation();

  const token = localStorage.getItem('token');
  if (!token) {
    toast.info('Você precisa estar logado para adicionar ao carrinho.');
    setTimeout(() => {
      navigate('/login');
    }, 1500); 
    return;
  }

  api.post('/cart', {
    product_name: product.nome || product.name,
    price: product.preco || product.price,
    qty: 1
  })
    .then(() => {
      toast.success('Produto adicionado ao carrinho!');
    })
    .catch(() => {
      toast.error('Para adicionar o produto ao carrinho faça login');
    });
};


  return (
    <div
      onClick={handleViewDetails}
      className={`relative cursor-pointer bg-white dark:bg-gray-800 border-2 border-orange-custom rounded-xl shadow-md overflow-hidden
        ${destaque ? 'w-90 h-60' : 'w-60 h-40'} 
        hover:scale-105 transition-transform`}
    >
      <img
        src={product.imagem || product.image_url}
        alt={product.nome || product.name}
        className="w-full h-full object-contain p-2"
      />
      <button
        onClick={handleAddToCart}
        className="absolute bottom-1 right-1 bg-orange-custom text-white p-1 rounded-full hover:brightness-90 transition"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
