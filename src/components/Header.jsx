import React from 'react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';

const Header = () => {
  return (
    <header className="bg-[#b80000] text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-2xl font-bold">Money.bg</div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-full bg-white text-gray-900"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <button className="bg-white text-[#b80000] px-4 py-2 rounded-full font-semibold">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;