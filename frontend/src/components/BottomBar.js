import { Home, ShoppingCart, Bookmark } from 'lucide-react';

export default function BottomBar() {
  return (
<div className="fixed bottom-0 bg-orange-custom dark:bg-gray-800 text-white w-full py-3 flex justify-around transition-colors duration-300">
      <button className="flex flex-col items-center text-xs">
        <Home size={20} />
      </button>
      <button className="flex flex-col items-center text-xs">
        <Bookmark size={20} />
      </button>
      <button className="flex flex-col items-center text-xs">
        <ShoppingCart size={20} />
      </button>
    </div>
  );
}
