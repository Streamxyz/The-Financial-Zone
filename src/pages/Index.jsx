import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Index = () => {
  const [featuredArticle, setFeaturedArticle] = useState({});
  const [secondaryArticles, setSecondaryArticles] = useState([]);
  const [accentArticle, setAccentArticle] = useState({});

  useEffect(() => {
    setFeaturedArticle({
      title: "MARKET DOWNTURN",
      subtitle: "Stock Market Crash: What You Need to Know",
      description: "Analysis of the recent market plunge and its implications for investors",
      date: "2 hours ago",
      reads: 24563
    });

    setSecondaryArticles([
      {
        title: "Global Economic Crisis Looms as Major Indices Tumble",
        date: "4 hours ago"
      },
      {
        title: "Investor Panic: How to Navigate the Current Market Volatility",
        date: "6 hours ago"
      }
    ]);

    setAccentArticle({
      title: "Breaking: Federal Reserve Announces Emergency Meeting",
      category: "Economy"
    });
  }, []);

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-3/4 pr-8 space-y-8">
          <section className="relative">
            <img src="/images/stock-market-crash.jpg" alt="Stock Market Crash Newspaper" className="w-full h-96 object-cover mb-4" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-6">
              <h1 className="text-5xl font-bold mb-2">{featuredArticle.title}</h1>
              <h2 className="text-3xl font-semibold mb-2">{featuredArticle.subtitle}</h2>
              <p className="text-xl mb-2">{featuredArticle.description}</p>
              <p className="text-sm">{featuredArticle.date} | {featuredArticle.reads} reads</p>
            </div>
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondaryArticles.map((article, index) => (
              <section key={index} className="bg-gray-100 p-6 rounded-lg">
                <img src="/images/stock-chart.jpg" alt="Stock Chart" className="w-full h-48 object-cover mb-4 rounded" />
                <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                <p className="text-sm text-gray-600">{article.date}</p>
              </section>
            ))}
          </div>
        </div>
        <aside className="lg:w-1/4">
          <div className="space-y-6">
            <div className="bg-red-600 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">BREAKING NEWS</h2>
              <img src="/images/stock-ticker.jpg" alt="Stock Ticker" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl font-semibold text-white mb-2">{accentArticle.title}</h3>
              <p className="text-sm text-white">{accentArticle.category}</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Market Overview</h2>
              <img src="/images/stock-chart.jpg" alt="Market Chart" className="w-full h-48 object-cover mb-4 rounded" />
              <ul className="space-y-2">
                <li>Dow Jones: <span className="text-red-600">-2.34%</span></li>
                <li>NASDAQ: <span className="text-red-600">-3.12%</span></li>
                <li>S&P 500: <span className="text-red-600">-2.87%</span></li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </Layout>
  );
};

export default Index;
