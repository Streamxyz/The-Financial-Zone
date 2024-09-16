import React from 'react';
import Layout from '../components/Layout';

const PersonalFinance = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Personal Finance</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Investing</h2>
          {/* Add content for investing */}
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Savings</h2>
          {/* Add content for savings */}
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Retirement</h2>
          {/* Add content for retirement */}
        </section>
      </div>
    </Layout>
  );
};

export default PersonalFinance;
