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
      title: "БОГАТСТВО",
      subtitle: "Какво се случи, когато Испания наказа мултимилионерите си?",
      description: "Данък върху гражданите, чието нетно богатство надхвърля 3 милиона евро",
      date: "преди 2 дни",
      reads: 13726
    });

    setSecondaryArticles([
      {
        title: "Лари Елисън прави толкова пари от AI, че почти настига Джеф Безос",
        date: "преди 3 дни"
      },
      {
        title: "Той ли ще е първият трилионер в света? Кои са другите кандидати",
        date: "преди 1 седмица"
      }
    ]);

    setAccentArticle({
      title: "Гответе се за още турболенции на финансовите пазари",
      category: "Финанси"
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
              <p className="text-sm text-gray-500">{featuredArticle.date} | {featuredArticle.reads} прочитания</p>
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
              <img src="/placeholder.svg" alt="Реклама 1" className="w-full h-32 object-cover mb-2" />
              <p className="text-center text-white">Реклама 1</p>
            </div>
            <div className="bg-gray-100 p-4">
              <h2 className="text-xl font-bold mb-4">АКЦЕНТ НА ДЕНЯ</h2>
              <img src="/placeholder.svg" alt={accentArticle.title} className="w-full h-48 object-cover mb-4" />
              <h3 className="text-lg font-semibold mb-2">{accentArticle.title}</h3>
              <p className="text-sm text-gray-600">{accentArticle.category}</p>
            </div>
            <div className="bg-[#b80000] p-4">
              <img src="/placeholder.svg" alt="Реклама 2" className="w-full h-32 object-cover mb-2" />
              <p className="text-center text-white">Реклама 2</p>
            </div>
          </div>
        </aside>
      </div>
    </Layout>
  );
};

export default Index;
