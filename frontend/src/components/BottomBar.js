import { Home, ShoppingCart, Bookmark } from 'lucide-react';

export default function BottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-orange-500 text-white p-5 rounded-t-2xl shadow flex justify-around z-50">
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
