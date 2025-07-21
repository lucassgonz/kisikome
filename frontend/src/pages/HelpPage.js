// src/pages/AjudaPage.jsx
import React from 'react';

const HelpPage = () => {
  return (
    <div className="page-container p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Central de Ajuda</h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">📦 Como acompanho meu pedido?</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Após finalizar sua compra, você pode acompanhar o status do seu pedido na tela "Meus Pedidos".
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">🔒 Esqueci minha senha. E agora?</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Acesse a tela de login e clique em "Esqueci minha senha". Enviaremos um link para seu e-mail.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">💬 Preciso de suporte</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Fale conosco via WhatsApp no número <strong>(85) 9 9999-9999</strong> ou envie um e-mail para <strong>suporte@restaurante.com</strong>.
        </p>
      </div>
    </div>
  );
};

export default HelpPage;
