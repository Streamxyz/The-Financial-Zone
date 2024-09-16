import React from 'react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { Link } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

const Header = () => {
  const categories = ['Macro', 'Companies', 'Tech', 'Panorama', 'Personal Finance', 'Latest'];

  return (
    <header className="bg-[#b80000] text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">The Financial Zone</Link>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-full bg-white text-gray-900"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-white text-[#b80000] px-4 py-2 rounded-full font-semibold">
              Menu
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {categories.map((category) => (
                <DropdownMenuItem key={category}>
                  <Link to={`/${category.toLowerCase().replace(' ', '-')}`}>{category}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
