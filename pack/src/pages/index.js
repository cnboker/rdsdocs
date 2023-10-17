import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Company from '@site/src/components/CompanyFeatures/company.js'
import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"><Translate id="home.digital.app.solution">Digital Signage Application Solutions</Translate></h1>
        <p className="hero__subtitle"><Translate id="home.choice.for.pi.user">Choice for Raspberry Pi Users</Translate></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            <Translate id="home.5m.intro">RDS Introduction - 5 minutes</Translate> ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="数字标牌应用解决方案">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Company />
      </main>
    </Layout>
  );
}
