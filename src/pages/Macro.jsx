import React from 'react';
import Layout from '../components/Layout';

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
        </section>
        
        <section>
          <h3 className="text-xl font-bold mb-2">1. RBI Governor Addresses Inflation Concerns</h3>
          <p className="mb-4">
            Shaktikanta Das's acknowledgment of inflation persisting above the target 4% level emphasizes monetary policy's role in maintaining economic equilibrium. The RBI's focus on controlling inflation has broad implications for India's macroeconomic stability:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Interest Rates: Higher inflation rates typically push central banks to consider increasing interest rates to manage demand and control price pressures.</li>
            <li>Investment in Real Estate: By monitoring banks' exposure to commercial real estate, the RBI aims to avoid financial sector overexposure.</li>
            <li>Impact on Growth: A concerted effort to curb inflation, while necessary, could lead to slower economic growth in the short term.</li>
          </ul>
        </section>
        
        <section>
          <h3 className="text-xl font-bold mb-2">2. Supreme Court Ruling on Mineral Royalties</h3>
          <p className="mb-4">
            The Indian government's challenge to the Supreme Court's ruling allowing states to impose their own taxes on mineral-bearing lands reveals a tension between state and central economic policy:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Taxation Uniformity: Inconsistent tax regimes across states could lead to an uneven business environment for industries dependent on minerals.</li>
            <li>Inflation and Supply Chains: Higher mineral costs due to state-imposed taxes could increase the input costs for industries reliant on raw materials.</li>
            <li>Impact on National Competitiveness: A lack of uniform taxation could make Indian industries less competitive in the global market.</li>
          </ul>
        </section>
        
        <section>
          <h3 className="text-xl font-bold mb-2">3. FSDC's Review of Macroeconomic Developments</h3>
          <p className="mb-4">
            The Financial Stability and Development Council's assessment of macroeconomic risks reflects a forward-looking approach to global and domestic vulnerabilities:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Resilience Against Emerging Threats: Focus on financial sector resilience against threats like cyber risks and climate change.</li>
            <li>Global Linkages: India's economy is deeply interconnected with global financial markets.</li>
            <li>Climate Change Costs: Proactive financial system resilience against climate change can help mitigate future economic shocks.</li>
          </ul>
        </section>
        
        <section>
          <h3 className="text-xl font-bold mb-2">4. Economic Uncertainty Amid Growth</h3>
          <p className="mb-4">
            The survey from Aditya Birla Sun Life Insurance highlights the underlying labor market concerns in an otherwise growing economy:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Technological Shifts and Job Security: The rise of AI and automation has amplified uncertainty for many salaried workers.</li>
            <li>Consumption Trends: As job insecurity grows, consumer confidence may weaken, leading to reduced spending on non-essential goods and services.</li>
          </ul>
        </section>
        
        <section>
          <h3 className="text-xl font-bold mb-2">5. US Economic Indicators and Market Impacts</h3>
          <p className="mb-4">
            Events in the U.S., such as the FOMC meeting and elections, are expected to influence global markets, including India's:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Interest Rate Decisions: The Federal Reserve's monetary policy can create ripple effects across emerging markets like India.</li>
            <li>Cryptocurrency and Younger Voters: The increasing popularity of cryptocurrencies like Bitcoin and calls for crypto-friendly policies by younger U.S. voters could indirectly affect regulatory conversations in India.</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default Macro;
