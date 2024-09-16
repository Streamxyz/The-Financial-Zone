import React from 'react';
import Layout from '../components/Layout';

const Tech = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Technology</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Startups</h2>
          {/* Add content for startups */}
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Big Tech</h2>
          {/* Add content for big tech companies */}
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Emerging Technologies</h2>
          {/* Add content for emerging technologies */}
        </section>
      </div>
    </Layout>
  );
};

export default Tech;