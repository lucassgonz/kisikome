import React, { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, User, Settings, HelpCircle, Info } from 'lucide-react';

export default function Navbar({ toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    setIsDark(html.classList.contains('dark'));
  }, []);

  const handleToggleDark = () => {
    toggleDarkMode(); 
    setIsDark(prev => !prev); 
  };

  return (
    <>
      <nav className="bg-orange-custom dark:bg-gray-800 text-white px-4 py-3 shadow flex items-center justify-between rounded-b-2xl">
        <button onClick={() => setMenuOpen(true)} className="p-1">
          <Menu size={28} />
        </button>

        <img src="/assets/logotipo.png" alt="KiSiKome" className="h-16 object-contain" />

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
            src="/assets/logo.png"
            alt="Logo"
            className="h-28 mx-auto rounded-full border-2 border-blue-500 p-2 object-contain"
          />

          <div className="flex flex-col gap-4 mt-4 text-sm font-semibold">
            <div className="flex items-center gap-2">
              <User size={18} /> Meus Dados
            </div>
            <div className="flex items-center gap-2">
              <Settings size={18} /> Configurações
            </div>
            <div className="flex items-center gap-2">
              <HelpCircle size={18} /> Ajuda
            </div>
            <div className="flex items-center gap-2">
              <Info size={18} /> Sobre Nós
            </div>
          </div>
        </div>
      )}
    </>
  );
}
