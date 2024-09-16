import React from 'react';
import Layout from '../components/Layout';

const Macro = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Macro Economics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Economic Indicators</h2>
          {/* Add content for economic indicators */}
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Monetary Policy</h2>
          {/* Add content for monetary policy */}
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Fiscal Policy</h2>
          {/* Add content for fiscal policy */}
        </section>
      </div>
    </Layout>
  );
};

export default Macro;