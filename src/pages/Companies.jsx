import React from 'react';
import Layout from '../components/Layout';

const Companies = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Companies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Earnings Reports</h2>
          {/* Add content for earnings reports */}
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Mergers & Acquisitions</h2>
          {/* Add content for M&A */}
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">IPOs</h2>
          {/* Add content for IPOs */}
        </section>
      </div>
    </Layout>
  );
};

export default Companies;