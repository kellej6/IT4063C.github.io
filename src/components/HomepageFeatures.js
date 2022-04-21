import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Ask Questions',
    Svg: require('../../static/img/home/undraw_questions_re_1fy7.svg').default,
    description: (
      <>
        Your data analysis is as good as the questions you ask.
      </>
    )
  },
  {
    title: 'Collect and Prepare Data',
    Svg: require('../../static/img/home/undraw_collecting_re_lp6p.svg').default,
    description: (
      <>
        Identify the datasets you need and learn to work with different data sources.
      </>
    )
  },
  {
    title: 'Data Processing',
    Svg: require('../../static/img/home/undraw_data_processing_yrrv.svg').default,
    description: (
      <>
        Data Cleaning, Data Transformation, and Data Wrangling.
      </>
    ),
  },
  {
    title: 'Data Storage and Warehousing',
    Svg: require('../../static/img/home/undraw_maintenance_re_59vn.svg').default,
    description: (
      <>
        Store your clean data in a secure and reliable way.
      </>
    ),
  },
  {
    title: 'Data Analytics',
    Svg: require('../../static/img/home/undraw_analytics_re_dkf8.svg').default,
    description: (
      <>
        Apply different types of analytics to your data; Descriptive, Diagnostic, Predictive and Prescriptive.
      </>
    ),
  },
  {
    title: 'Tell A Story',
    Svg: require('../../static/img/home/undraw_data_trends_re_2cdy.svg').default,
    description: (
      <>
        Learn to tell a story with your data.
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
