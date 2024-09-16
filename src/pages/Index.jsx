import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Index = () => {
  const [featuredArticle, setFeaturedArticle] = useState({});
  const [secondaryArticles, setSecondaryArticles] = useState([]);
  const [accentArticle, setAccentArticle] = useState({});

  useEffect(() => {
    // Simulate fetching dynamic content
    setFeaturedArticle({
      title: "WEALTH",
      subtitle: "What happened when Spain penalized its multimillionaires?",
      description: "Tax on citizens whose net wealth exceeds 3 million euros",
      date: "2 days ago",
      reads: 13726
    });

    setSecondaryArticles([
      {
        title: "Larry Ellison is making so much money from AI that he's almost catching up to Jeff Bezos",
        date: "3 days ago"
      },
      {
        title: "Will he be the world's first trillionaire? Who are the other candidates",
        date: "1 week ago"
      }
    ]);

    setAccentArticle({
      title: "Prepare for more turbulence in financial markets",
      category: "Finance"
    });
  }, []);

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-3/4 pr-8 space-y-8">
          <section>
            <h1 className="text-4xl font-bold mb-4">{featuredArticle.title}</h1>
            <div className="mb-8">
              <img src="/placeholder.svg" alt={featuredArticle.title} className="w-full h-64 object-cover mb-4" />
              <h2 className="text-2xl font-bold mb-2">{featuredArticle.subtitle}</h2>
              <p className="text-gray-600 mb-2">{featuredArticle.description}</p>
              <p className="text-sm text-gray-500">{featuredArticle.date} | {featuredArticle.reads} reads</p>
            </div>
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondaryArticles.map((article, index) => (
              <section key={index}>
                <img src="/placeholder.svg" alt={article.title} className="w-full h-48 object-cover mb-4" />
                <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                <p className="text-sm text-gray-500">{article.date}</p>
              </section>
            ))}
          </div>
        </div>
        <aside className="lg:w-1/4">
          <div className="space-y-4">
            <div className="bg-[#b80000] p-4">
              <img src="/placeholder.svg" alt="Advertisement 1" className="w-full h-32 object-cover mb-2" />
              <p className="text-center text-white">Advertisement 1</p>
            </div>
            <div className="bg-gray-100 p-4">
              <h2 className="text-xl font-bold mb-4">HIGHLIGHT OF THE DAY</h2>
              <img src="/placeholder.svg" alt={accentArticle.title} className="w-full h-48 object-cover mb-4" />
              <h3 className="text-lg font-semibold mb-2">{accentArticle.title}</h3>
              <p className="text-sm text-gray-600">{accentArticle.category}</p>
            </div>
            <div className="bg-[#b80000] p-4">
              <img src="/placeholder.svg" alt="Advertisement 2" className="w-full h-32 object-cover mb-2" />
              <p className="text-center text-white">Advertisement 2</p>
            </div>
          </div>
        </aside>
      </div>
    </Layout>
  );
};

export default Index;
