import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Companies = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Companies</h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Recent Developments</h2>
          <p className="mb-4">
            The business world has seen significant activity in mergers, acquisitions, and IPOs. Here are some key areas to explore:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><Link to="/companies/earnings-reports" className="text-blue-600 hover:underline">Earnings Reports</Link></li>
            <li><Link to="/companies/mergers-acquisitions" className="text-blue-600 hover:underline">Mergers & Acquisitions</Link></li>
            <li><Link to="/companies/ipos" className="text-blue-600 hover:underline">IPOs</Link></li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default Companies;
