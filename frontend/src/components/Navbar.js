import { Menu } from 'lucide-react'; 
import logo from '../assets/logo.png'; 

export default function Navbar() {
  return (
    <nav className="bg-orange-500 text-white px-4 py-3 shadow flex items-center justify-between rounded-b-2xl">
      <button className="p-1">
        <Menu size={28} />
      </button>

      <img src={logo} alt="KiSiKome" className="h-8 object-contain" />

      <div className="w-7" /> 
    </nav>
  );
}
