import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  useEffect(() => {
  const script = document.createElement('script');
  script.src = 'https://unpkg.com/@stoplight/elements/web-components.min.js';
  script.type = 'module';
  document.body.appendChild(script);
}, []);
  return (
    <Layout
      title="Paysecure API Documentation"
      description="Documentation for integrating with the Paysecure payment gateway."
    >
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">Welcome to Paysecure API Documentation</h1>
          <p className="hero__subtitle">
            Integrate seamlessly with Paysecure's payment gateway to provide a frictionless payment experience.
          </p>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <h3>Get Started</h3>
                <p>Follow our integration steps to set up Paysecure in your application.</p>
              </div>
              <div className="col col--4">
                <h3>Explore APIs</h3>
                <p>Learn about our endpoints for payments, webhooks, and customer management.</p>
              </div>
              <div className="col col--4">
                <h3>Contact Support</h3>
                <p>Reach out to our team at <a href="mailto:info@paysecure.net">info@paysecure.net</a>.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}