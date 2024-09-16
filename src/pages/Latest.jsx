import React from 'react';
import Layout from '../components/Layout';

const Latest = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Breaking News</h2>
          {/* Add content for breaking news */}
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Market Updates</h2>
          {/* Add content for market updates */}
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Analysis</h2>
          {/* Add content for analysis */}
        </section>
      </div>
    </Layout>
  );
};

export default Latest;