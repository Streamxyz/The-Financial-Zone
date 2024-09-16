import React from 'react';
import Layout from '../../components/Layout';

const IPOs = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Initial Public Offerings (IPOs)</h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Upcoming IPOs</h2>
          <p className="mb-4">
            The market is anticipating several initial public offerings (IPOs) as companies look to capitalize on favorable conditions. Specific details on upcoming IPOs are expected to be a focus in the coming weeks.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Market Conditions</h2>
          <p className="mb-4">
            The current market environment appears conducive for companies considering going public. Factors such as improved investor sentiment, economic recovery, and the search for growth opportunities are contributing to a favorable IPO landscape.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default IPOs;
