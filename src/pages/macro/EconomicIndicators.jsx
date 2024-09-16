import React from 'react';
import Layout from '../../components/Layout';

const EconomicIndicators = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Economic Indicators</h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Inflation Concerns</h2>
          <p className="mb-4">
            RBI Governor Shaktikanta Das has acknowledged that inflation is persisting above the target 4% level, emphasizing monetary policy's role in maintaining economic equilibrium. The RBI's focus on controlling inflation has broad implications for India's macroeconomic stability.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Interest Rates: Higher inflation rates typically push central banks to consider increasing interest rates to manage demand and control price pressures.</li>
            <li>Impact on Growth: A concerted effort to curb inflation, while necessary, could lead to slower economic growth in the short term.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Economic Uncertainty Amid Growth</h2>
          <p className="mb-4">
            A survey from Aditya Birla Sun Life Insurance highlights underlying labor market concerns in an otherwise growing economy:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Technological Shifts and Job Security: The rise of AI and automation has amplified uncertainty for many salaried workers.</li>
            <li>Consumption Trends: As job insecurity grows, consumer confidence may weaken, leading to reduced spending on non-essential goods and services.</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default EconomicIndicators;
