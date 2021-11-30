/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Setup to my personal liking',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Everyone has their own prefered technology stack. These templates
        represent mine.
      </>
    ),
  },
  {
    title: 'As consistent as possible',
    image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        All templates have a certain level of consistency between them.
      </>
    ),
  },
  {
    title: 'Modern technologies',
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        I don't want to do things the old way! At least when there's a new way that's better.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
