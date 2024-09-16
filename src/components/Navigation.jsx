import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const categories = ['Macro', 'Companies', 'Tech', 'Panorama', 'Personal Finance', 'Latest'];

  return (
    <nav className="bg-[#f9f9f9] border-b border-gray-200">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-6 py-3">
          {categories.map((category) => (
            <li key={category}>
              <Link
                to={`/${category.toLowerCase().replace(' ', '-')}`}
                className="text-gray-700 hover:text-[#b80000] font-semibold"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;