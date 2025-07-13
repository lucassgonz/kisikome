import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Moon, Sun, User, Settings, HelpCircle, Info } from 'lucide-react';

export default function Navbar({ toggleDarkMode, isDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleDark = () => {
    toggleDarkMode();
  };

  // Navegações
  const goTo = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-orange-custom dark:bg-gray-800 text-white px-4 py-3 shadow flex items-center justify-between rounded-b-2xl transition-colors duration-300">
        <button onClick={() => setMenuOpen(true)} className="p-1">
          <Menu size={28} />
        </button>

        <img
          src={isDark ? '/assets/logotipo_dark.png' : '/assets/logotipo.png'}
          alt="KiSiKome"
          className="h-16 object-contain transition-all duration-300"
        />

        <button onClick={handleToggleDark} className="p-1">
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>

      {/* MENU LATERAL */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-orange-custom dark:bg-gray-900 text-white w-64 p-6 flex flex-col gap-6 transition-colors duration-300">
          <div className="flex justify-end">
            <button onClick={() => setMenuOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <img
            src={isDark ? '/assets/logo_dark.png' : '/assets/logo.png'}
            alt="Logo"
            className="h-28 mx-auto rounded-full border-2 border-blue-500 p-2 object-contain transition-all duration-300"
          />

          <div className="flex flex-col gap-4 mt-4 text-sm font-semibold">
            <button onClick={() => goTo('/profile')} className="flex items-center gap-2">
              <User size={18} /> Meus Dados
            </button>
            <button onClick={() => goTo('/settings')} className="flex items-center gap-2">
              <Settings size={18} /> Configurações
            </button>
            <button onClick={() => goTo('/help')} className="flex items-center gap-2">
              <HelpCircle size={18} /> Ajuda
            </button>
            <button onClick={() => goTo('/about')} className="flex items-center gap-2">
              <Info size={18} /> Sobre Nós
            </button>
          </div>
        </div>
      )}
    </>
  );
}
