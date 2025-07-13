import { Home, ShoppingCart, Bookmark } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function BottomBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/', icon: <Home size={20} />, label: 'Início' },
    { path: '/orders', icon: <Bookmark size={20} />, label: 'Pedidos' },
    { path: '/cart', icon: <ShoppingCart size={20} />, label: 'Carrinho' },
  ];

  return (
    <div className="fixed bottom-0 w-full py-3 flex justify-around bg-orange-custom dark:bg-gray-800 text-white transition-colors duration-300 shadow-lg">
      {navItems.map(item => {
        const isActive = location.pathname === item.path;

        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center text-xs transition-all duration-200 ${
              isActive ? 'text-white bg-orange-600 px-3 py-1 rounded-xl' : 'opacity-80 hover:opacity-100'
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
