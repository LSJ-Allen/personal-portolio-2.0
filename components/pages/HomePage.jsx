/**
 * .
 */
import React from 'react';
import Layout from '../components/Layout';

const HomePage = () => (
  <Layout>
    <h1 className="text-4xl font-bold text-center my-8">Welcome to My Portfolio</h1>
    <div className="container mx-auto px-4">
      <p className="text-lg mb-4">
        Here you can find information about my education, experiences, projects, and skills.
      </p>
      <p className="text-lg mb-4">
        Feel free to explore the different sections using the navigation menu above.
      </p>
    </div>
  </Layout>
);

export default HomePage;