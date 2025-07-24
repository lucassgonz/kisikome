# 🍽️ Sistema de Pedidos Online - Restaurante

Este é um sistema completo de pedidos online com interface web, autenticação, carrinho, pagamento e histórico de pedidos, feito com:

- **Frontend**: React + TailwindCSS  
- **Backend**: Node.js + Express  
- **Banco de Dados**: Supabase (PostgreSQL)  
- **Autenticação**: JWT  
- **Hospedagem local** (para testes): `localhost:3000` (frontend) e `localhost:4000` (backend)

---

## 🚀 Funcionalidades

✅ Cadastro e login de usuários  
✅ Visualização de produtos por categoria  
✅ Adição ao carrinho com agrupamento automático  
✅ Remoção de itens do carrinho  
✅ Tela de checkout com confirmação de pagamento  
✅ Criação e listagem de pedidos  
✅ Tela de perfil do cliente  
✅ Telas informativas: Ajuda e Sobre Nós  

---

## 📦 Instalação

### 1. Clone o projeto

```bash
git clone https://github.com/lucassgonz/kisikome.git
cd kisikome/backend
npm install
cp .env.example .env
# Configure seu JWT_SECRET e URL do Supabase no .env
npm start
```

### 2. Frontend

```bash
cd ../frontend
npm install
npm run dev
```

---

## 🧠 Estrutura do Projeto

```
kisikome/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middlewares/
│   ├── config/supabase.js
│   ├── .env.example
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/api.js
│   │   └── App.jsx
│   └── vite.config.js
```

---

## 🧪 Banco de Dados (Supabase)

Crie um projeto no [https://supabase.com](https://supabase.com) e configure as seguintes tabelas:

- `cliente`
- `produto`
- `restaurante`
- `carrinho`
- `carrinho_item`
- `pedido`
- `pedido_item`
- `pagamento`

Inclua também as relações e constraints adequadas (chaves estrangeiras, `ON DELETE CASCADE`, etc.).  
Você pode importar o schema diretamente a partir do script SQL do backend.

---

## 🔐 Autenticação

- Após login, o JWT é salvo no `localStorage`
- Ele é enviado automaticamente em todas as requisições via `axios` interceptor:

```js
// src/services/api.js
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
```

---

## 🌐 Telas disponíveis

- `/login` – Login
- `/register` – Cadastro
- `/` – Catálogo de produtos por categoria
- `/cart` – Carrinho de compras
- `/checkout` – Confirmação de pagamento
- `/orders` – Lista de pedidos do cliente
- `/perfil` – Dados do usuário
- `/ajuda` – Dúvidas frequentes
- `/sobre` – Informações sobre a empresa

---

## 🤝 Contribuindo

Pull requests são bem-vindos!  
Sinta-se à vontade para abrir uma issue com sugestões de melhorias.

---

## 📄 Licença

Este projeto está sob a licença MIT.  
Desenvolvido com 💚 por [Lucas Gonzaga](https://github.com/lucassgonz), [Enzo Gabriel](https://github.com/ManoKondz), Gustavo Henrique e Jonas Silva .
