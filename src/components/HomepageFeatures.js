import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Data Processing',
    Svg: require('../../static/img/home/undraw_data_processing_yrrv.svg').default,
    description: (
      <>
        Data Processing
      </>
    ),
  },
  {
    title: 'Data Analytics',
    Svg: require('../../static/img/home/undraw_analytics_re_dkf8.svg').default,
    description: (
      <>
        We'll do something in data analytics
      </>
    ),
  },
  {
    title: 'Data Trends',
    Svg: require('../../static/img/home/undraw_data_trends_re_2cdy.svg').default,
    description: (
      <>
        We'll analyze data trends
      </>
    ),
  },
  {
    title: 'Stepping up your analytics skills',
    Svg: require('../../static/img/home/undraw_stepping_up_g6oo.svg').default,
    description: (
      <>
        We'll learn clean code practices, and industry best practices.
      </>
    ),
  },
  
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
