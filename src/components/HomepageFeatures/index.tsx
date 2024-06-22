import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Fun to play',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Pool is a fun game to play with friends and family. It's a great way to
        spend time together and enjoy each other's company. It's also a great way
        to socialize and meet new people.
      </>
    ),
  },
  {
    title: 'Competitive',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Pool is a competitive game that requires skill and strategy. It's a great
        way to challenge yourself and improve your skills. It's also a great way
        to compete against others and see who is the best player.
      </>
    ),
  },
  {
    title: `There's always more to learn`,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Pool is a game that you can always improve at. There are always new
        techniques and strategies to learn. It's a great way to keep your mind
        sharp and stay engaged.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
