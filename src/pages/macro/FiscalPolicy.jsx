import React from 'react';
import Layout from '../../components/Layout';

const FiscalPolicy = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Fiscal Policy</h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Supreme Court Ruling on Mineral Royalties</h2>
          <p className="mb-4">
            The Indian government's challenge to the Supreme Court's ruling allowing states to impose their own taxes on mineral-bearing lands reveals a tension between state and central economic policy:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Taxation Uniformity: Inconsistent tax regimes across states could lead to an uneven business environment for industries dependent on minerals.</li>
            <li>Inflation and Supply Chains: Higher mineral costs due to state-imposed taxes could increase the input costs for industries reliant on raw materials.</li>
            <li>Impact on National Competitiveness: A lack of uniform taxation could make Indian industries less competitive in the global market.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">FSDC's Review of Macroeconomic Developments</h2>
          <p className="mb-4">
            The Financial Stability and Development Council's assessment of macroeconomic risks reflects a forward-looking approach to global and domestic vulnerabilities:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Resilience Against Emerging Threats: Focus on financial sector resilience against threats like cyber risks and climate change.</li>
            <li>Global Linkages: India's economy is deeply interconnected with global financial markets.</li>
            <li>Climate Change Costs: Proactive financial system resilience against climate change can help mitigate future economic shocks.</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default FiscalPolicy;
