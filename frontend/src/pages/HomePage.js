// // HomePageAPI.jsx - Versão integrada com API
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ProductCard = ({ nome, preco }) => (
//   <div className="bg-white border-2 border-orange-500 rounded-xl overflow-hidden shadow hover:scale-105 transition-transform w-40">
//     {/* Você pode adicionar imagem se sua API retornar imagem_url */}
//     <div className="h-24 w-full bg-orange-100 flex items-center justify-center text-sm text-orange-600 font-semibold">
//       {nome}
//     </div>
//     <div className="p-2 text-center">
//       <p className="text-gray-800 font-bold text-sm">{`R$ ${Number(preco).toFixed(2)}`}</p>
//     </div>
//   </div>
// );

// export default function HomePageAPI() {
//   const [produtos, setProdutos] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:4000/api/products')
//       .then(res => setProdutos(res.data))
//       .catch(err => console.error('Erro ao carregar produtos:', err));
//   }, []);

//   const porCategoria = (categoria) => produtos.filter(p => p.categoria?.toLowerCase() === categoria);

//   return (
//     <div className="p-4 bg-orange-50 min-h-screen">
//       <h2 className="text-lg font-bold mb-2">Promoções:</h2>
//       <section className="flex flex-wrap gap-4 mb-6">
//         {porCategoria('promoção').map(p => <ProductCard key={p.id} {...p} />)}
//       </section>

//       <h2 className="text-lg font-bold mb-2">Refeições:</h2>
//       <section className="flex flex-wrap gap-4 mb-6">
//         {porCategoria('refeição').map(p => <ProductCard key={p.id} {...p} />)}
//       </section>

//       <h2 className="text-lg font-bold mb-2">Acompanhamentos:</h2>
//       <section className="flex flex-wrap gap-4 mb-6">
//         {porCategoria('acompanhamento').map(p => <ProductCard key={p.id} {...p} />)}
//       </section>

//       <h2 className="text-lg font-bold mb-2">Bebidas:</h2>
//       <section className="flex flex-wrap gap-4">
//         {porCategoria('bebida').map(p => <ProductCard key={p.id} {...p} />)}
//       </section>
//     </div>
//   );
// }
import React from 'react';
import ProductCard from '../components/ProductCard';

const mockProducts = {
  promocoes: [
    { nome: 'Combo 02', preco: 40.0, imagem: '/assets/combo02.svg' },
    { nome: 'Marmita P', preco: 20.0, imagem: '/assets/ppromocao.svg' },
    { nome: 'Combo 01', preco: 35.0, imagem: '/assets/combo01.svg' },
  ],
  refeicoes: [
    { nome: 'Monte Sua Marmita', preco: 20.0, imagem: '/assets/monte.svg' },
    { nome: 'Marmita P', preco: 25.0, imagem: '/assets/p.svg' },
    { nome: 'Marmita M', preco: 30.0, imagem: '/assets/m.svg' },
    { nome: 'Marmita G', preco: 40.0, imagem: '/assets/g.svg' },
  ],
  acompanhamentos: [
    { nome: 'Batata Frita', preco: 11.9, imagem: '/assets/batata.svg' },
    { nome: 'Nuggets', preco: 13.9, imagem: '/assets/nuggets.svg' },
    { nome: 'Farofa', preco: 7.9, imagem: '/assets/farofa.svg' },
    { nome: 'Vinagrete', preco: 4.9, imagem: '/assets/vinagrete.svg' },
  ],
  bebidas: [
    { nome: 'Coca Cola', preco: 7.0, imagem: '/assets/coca.svg' },
    { nome: 'Guaraná', preco: 7.0, imagem: '/assets/guarana.svg' },
    { nome: 'Fanta Laranja', preco: 7.0, imagem: '/assets/laranja.svg' },
    { nome: 'Fanta Uva', preco: 7.0, imagem: '/assets/uva.svg' },
  ],
};

export default function HomePageMocked() {
  const handleAdd = (product) => {
    console.log('Adicionado ao carrinho:', product);
  };

  return (
<div className="p-4 bg-orange-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
     <section className="container mx-auto mb-6">
  <div className="grid gap-x-6 gap-y-4 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
    {mockProducts.promocoes.map((p, i) => (
      <ProductCard key={i} product={p} onAddToCart={handleAdd} destaque />
    ))}
  </div>
</section>

<h2 className="text-lg font-bold mb-2 container mx-auto">Refeições:</h2>
<section className="container mx-auto mb-6">
  <div className="grid gap-x-2 gap-y-3 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-items-center">
    {mockProducts.refeicoes.map((p, i) => (
      <ProductCard key={i} product={p} onAddToCart={handleAdd} />
    ))}
  </div>
</section>

<h2 className="text-lg font-bold mb-2 container mx-auto">Acompanhamentos:</h2>
<section className="container mx-auto mb-6">
  <div className="grid gap-x-2 gap-y-3 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-items-center">
    {mockProducts.acompanhamentos.map((p, i) => (
      <ProductCard key={i} product={p} onAddToCart={handleAdd} />
    ))}
  </div>
</section>

<h2 className="text-lg font-bold mb-2 container mx-auto">Bebidas:</h2>
<section className="container mx-auto mb-10">
  <div className="grid gap-x-2 gap-y-3 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-items-center">
    {mockProducts.bebidas.map((p, i) => (
      <ProductCard key={i} product={p} onAddToCart={handleAdd} />
    ))}
  </div>
</section>

    </div>
  );
}

