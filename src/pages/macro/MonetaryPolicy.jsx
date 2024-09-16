import React from 'react';
import Layout from '../../components/Layout';

const MonetaryPolicy = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Monetary Policy</h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">RBI's Focus on Inflation Control</h2>
          <p className="mb-4">
            The Reserve Bank of India (RBI) is actively working to control inflation, which has implications for various aspects of the economy:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Interest Rates: The RBI may consider increasing interest rates to manage demand and control price pressures.</li>
            <li>Investment in Real Estate: The RBI is monitoring banks' exposure to commercial real estate to avoid financial sector overexposure.</li>
            <li>Economic Growth: While necessary for long-term stability, efforts to curb inflation could lead to slower economic growth in the short term.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Global Monetary Policy Impacts</h2>
          <p className="mb-4">
            Events in the U.S., such as Federal Reserve decisions, can influence global markets, including India's:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Interest Rate Decisions: The Federal Reserve's monetary policy can create ripple effects across emerging markets like India.</li>
            <li>Capital Flows: Changes in U.S. interest rates can lead to capital outflows from India, potentially affecting the rupee's value.</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default MonetaryPolicy;
