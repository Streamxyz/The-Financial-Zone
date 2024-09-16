import React from 'react';
import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold mb-4">Welcome to Money.bg</h1>
          <p className="text-xl text-gray-600">Your source for financial news and insights</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Latest News</h2>
          {/* Add news articles component here */}
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Market Overview</h2>
          {/* Add market overview component here */}
        </section>
      </div>
    </Layout>
  );
};

export default Index;
