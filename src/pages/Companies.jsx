import React from 'react';
import Layout from '../components/Layout';

const Companies = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Companies</h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Mergers & Acquisitions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Verizon to Acquire Frontier</h3>
              <p>Verizon has announced plans to acquire Frontier Communications in a deal valued at $20 billion, marking a significant move in the telecommunications sector.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Blackstone and CPPIB Acquire AirTrunk</h3>
              <p>A consortium led by Blackstone and the Canada Pension Plan Investment Board (CPPIB) is set to acquire AirTrunk from Macquarie Group and PSP Investments for AUD 24 billion, further consolidating their positions in the data center market.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Harbour Energy Completes Acquisition</h3>
              <p>Harbour Energy has finalized its acquisition of Wintershall Dea's exploration and production business from BASF and LetterOne for $11.2 billion, enhancing its portfolio in the energy sector.</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">IPOs</h2>
          <p>The market is anticipating several initial public offerings (IPOs) as companies look to capitalize on favorable conditions. Specific details on upcoming IPOs are expected to be a focus in the coming weeks.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">M&A Activity Surge</h2>
          <p>Private equity firms are experiencing a resurgence in merger and acquisition activity, with a reported $30 billion in deals over one week, indicating a recovery in the M&A landscape as financing conditions improve.</p>
        </section>
      </div>
    </Layout>
  );
};

export default Companies;
