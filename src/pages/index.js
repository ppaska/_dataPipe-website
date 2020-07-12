/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: <>Powered by React</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Welcome `}
      description="Data manipulation and processing in JavaScript<head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/get-started')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <h2>JavaScript Data Manipulation Library</h2>
            <p>dataPipe-JS is a data transformation and analytical library inspired by LINQ (C#) and Pandas - (Python) for JavaScript.
            It provides a facilities for data loading, data transformation and other helpful data manipulation functions.
            Originally DataPipe project was created to power JSPython and Worksheet Systems related projects, but it is also a can be used
            as a standalone library for your data-driven JavaScript or JSPython applications on both the client (web browser) and server (NodeJS).
            </p>
            <h2>A common Data Management Tasks dataPipeJS</h2>
            <ul>
              <li><a hred="/">Getting Started</a></li>
              <li><a hred="/">Loading Data</a></li>
              <li><a hred="/">Data Transformation</a></li>
              <li><a hred="/">Aggregation and other numerical functions</a></li>
              <li><a hred="/">Output to</a></li>
              <li><a hred="/">Other helpfull utilities</a></li>
            </ul>
            <h2>A common Data Management Tasks dataPipeJS</h2>
            <ul>
              <li><a hred="https://www.npmjs.com/package/datapipe-js">NPM Package</a></li>
              <li><a hred="https://github.com/FalconSoft/dataPipe">A source code on github.com</a></li>
              <li><a hred="https://www.jsdelivr.com/package/npm/datapipe-js">CDN on jsDelivr.com</a></li>
            </ul>

            <h2>License</h2>
            <p>A permissive MIT (c) - FalconSoft Ltd</p>

          </div>
        </section>


      </main>
    </Layout>
  );
}

export default Home;
