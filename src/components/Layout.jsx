import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import AdBanner from './AdBanner';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <AdBanner position="top" />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-3/4 pr-8">{children}</div>
          <aside className="lg:w-1/4">
            <AdBanner position="sidebar" />
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Most Read</h3>
              {/* Add MostRead component here */}
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
