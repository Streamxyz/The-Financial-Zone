import React from 'react';
import { Link } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

const Navigation = () => {
  const categories = [
    { name: 'Macro', subcategories: ['Economic Indicators', 'Monetary Policy', 'Fiscal Policy'] },
    { name: 'Companies', subcategories: ['Earnings Reports', 'Mergers & Acquisitions', 'IPOs'] },
    { name: 'Tech', subcategories: ['Startups', 'Big Tech', 'Emerging Technologies'] },
    { name: 'Panorama', subcategories: ['Global Markets', 'Geopolitics', 'Environmental'] },
    { name: 'Personal Finance', subcategories: ['Investing', 'Savings', 'Retirement'] },
    { name: 'Latest', subcategories: ['Breaking News', 'Market Updates', 'Analysis'] },
  ];

  return (
    <nav className="bg-[#f9f9f9] border-b border-gray-200">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-6 py-3">
          {categories.map((category) => (
            <li key={category.name}>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-700 hover:text-[#b80000] font-semibold">
                  {category.name}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {category.subcategories.map((subcategory) => (
                    <DropdownMenuItem key={subcategory}>
                      <Link to={`/${category.name.toLowerCase()}/${subcategory.toLowerCase().replace(' ', '-')}`}>
                        {subcategory}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
