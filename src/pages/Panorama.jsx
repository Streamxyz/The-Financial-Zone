import React from 'react';
import Layout from '../components/Layout';

const Panorama = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Panorama</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Global Markets</h2>
          {/* Add content for global markets */}
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Geopolitics</h2>
          {/* Add content for geopolitics */}
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Environmental</h2>
          {/* Add content for environmental news */}
        </section>
      </div>
    </Layout>
  );
};

export default Panorama;
