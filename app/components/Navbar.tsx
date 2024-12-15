import { Home, Search, PlusSquare, User } from 'lucide-react';
import { IconButton } from './IconButton';
import { Logo } from './Logo';

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Logo size="sm" />
            <span className="text-xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              iloveinsta
            </span>
          </div>

          <div className="flex items-center gap-4">
            <IconButton icon={Home} variant="secondary" />
            <IconButton icon={Search} variant="secondary" className="md:hidden" />
            <IconButton icon={PlusSquare} variant="secondary" />
            <IconButton icon={User} variant="secondary" />
          </div>
        </div>
      </div>
    </nav>
  );
}