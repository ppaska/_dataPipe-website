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

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Welcome `}
      description="Data manipulation and data processing library for JavaScript. Inspired by LINQ (C#) and Pandas (Python). It provides a powerful API for data loading, data transformation and other helpful data manipulation functions.">
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
            <h2>Data Manipulation and data processing library for JavaScript</h2>
            <p>dataPipe-JS is a data manipulation and data processing library for JavaScript. Main inspirations are coming from LINQ (C#) and Pandas (Python) and carefully brought into JavaScript world.
            It provides a powerful API for data loading, data transformation and other helpful data manipulation functions.
            Originally DataPipe project was created to power JSPython and Worksheet Systems related projects. However it also can be used
            as a standalone library for your data-driven JavaScript or JSPython applications on both the client (web browser) and server (NodeJS).
            </p>
            <h2>Explore dataPipe-js library</h2>
            <ul>
              <li><a href="/docs/get-started">Getting Started</a></li>
              <li><a href="/docs/datapipe#datapipe-initialization">Data Pipe Initialization</a></li>
              <li><a href="/docs/datapipe#datapipe-transformation-functions">Data Transformation</a></li>
              <li><a href="/docs/datapipe#aggregation-and-stats-functions">Aggregation and other numerical functions</a></li>
              <li><a href="/docs/datapipe#datapipe-output">DataPipe Output</a></li>
              <li><a href="/docs/datapipe-js-utils">Other helpfull utilities</a></li>
            </ul>
            <h2>Resources</h2>
            <ul>
              <li><a href="https://stackblitz.com/edit/datapipe-js-examples?file=index.js">StackBlitz Examples</a></li>
              <li><a href="https://www.npmjs.com/package/datapipe-js">NPM Package</a></li>
              <li><a href="https://github.com/FalconSoft/dataPipe">A source code on github.com</a></li>
              <li><a href="https://www.jsdelivr.com/package/npm/datapipe-js">CDN on jsDelivr.com</a></li>
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
