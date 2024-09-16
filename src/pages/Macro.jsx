import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Macro = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Macro Economics</h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Recent Developments in Indian Economy</h2>
          <p className="mb-4">
            Recent developments, including regulatory actions by the RBI, the Supreme Court's rulings on mineral royalties, and insights from the FSDC, highlight several key macroeconomic dynamics in India and the broader global landscape. These factors will affect inflation, taxation, and economic stability, impacting industries, employment, and markets in various ways.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><Link to="/macro/economic-indicators" className="text-blue-600 hover:underline">Economic Indicators</Link></li>
            <li><Link to="/macro/monetary-policy" className="text-blue-600 hover:underline">Monetary Policy</Link></li>
            <li><Link to="/macro/fiscal-policy" className="text-blue-600 hover:underline">Fiscal Policy</Link></li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default Macro;
