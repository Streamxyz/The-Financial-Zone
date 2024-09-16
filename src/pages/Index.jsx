import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-3/4 pr-8 space-y-8">
          <section>
            <h1 className="text-4xl font-bold mb-4">БОГАТСТВО</h1>
            <div className="mb-8">
              <img src="/placeholder.svg" alt="Богатство" className="w-full h-64 object-cover mb-4" />
              <h2 className="text-2xl font-bold mb-2">Какво се случи, когато Испания наказа мултимилионерите си?</h2>
              <p className="text-gray-600 mb-2">Данък върху гражданите, чието нетно богатство надхвърля 3 милиона евро</p>
              <p className="text-sm text-gray-500">преди 2 дни | 13726 прочитания</p>
            </div>
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <img src="/placeholder.svg" alt="Лари Елисън" className="w-full h-48 object-cover mb-4" />
              <h2 className="text-xl font-bold mb-2">Лари Елисън прави толкова пари от AI, че почти настига Джеф Безос</h2>
              <p className="text-sm text-gray-500">преди 3 дни</p>
            </section>
            <section>
              <img src="/placeholder.svg" alt="Първият трилионер" className="w-full h-48 object-cover mb-4" />
              <h2 className="text-xl font-bold mb-2">Той ли ще е първият трилионер в света? Кои са другите кандидати</h2>
              <p className="text-sm text-gray-500">преди 1 седмица</p>
            </section>
          </div>
        </div>
        <aside className="lg:w-1/4">
          <div className="bg-gray-100 p-4 mb-8">
            <h2 className="text-xl font-bold mb-4">АКЦЕНТ НА ДЕНЯ</h2>
            <img src="/placeholder.svg" alt="Акцент на деня" className="w-full h-48 object-cover mb-4" />
            <h3 className="text-lg font-semibold mb-2">Гответе се за още турболенции на финансовите пазари</h3>
            <p className="text-sm text-gray-600">Финанси</p>
          </div>
          <div className="space-y-4">
            <div className="border p-4">
              <img src="/placeholder.svg" alt="Реклама 1" className="w-full h-32 object-cover mb-2" />
              <p className="text-center">Реклама 1</p>
            </div>
            <div className="border p-4">
              <img src="/placeholder.svg" alt="Реклама 2" className="w-full h-32 object-cover mb-2" />
              <p className="text-center">Реклама 2</p>
            </div>
            <div className="border p-4">
              <img src="/placeholder.svg" alt="Реклама 3" className="w-full h-32 object-cover mb-2" />
              <p className="text-center">Реклама 3</p>
            </div>
          </div>
        </aside>
      </div>
    </Layout>
  );
};

export default Index;
