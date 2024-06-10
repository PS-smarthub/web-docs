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
    title: 'Smart Hub',
    Svg: require('@site/static/img/SMART_HUB.svg').default,
    description: (
      <>
        Smart Hub é uma plataforma para desenvolvimento e utilização de aplicações
        dentro da PS/SC, com objetivo de trazer mais facilidade para os colaboradores 
        no dia-a-dia de trabalho.
      </>
    ),
  },
  {
    title: 'Cold Start',
    Svg: require('@site/static/img/COLD_START.svg').default,
    description: (
      <>
        Cold Start é a primeira aplicação dentro da plataforma desenvolvida, dessa forma,
        ambas se complementam dentro do desenvolvimento de noso TCC. Nossa aplicação é uma
        maneira mais prática e eficiente de gerenciar os contêineres de refrigeração da PS.
      </>
    ),
  },
  {
    title: 'Powered by DTA',
    Svg: require('@site/static/img/dta.svg').default,
    description: (
      <>
        O Digital Talent Academy é o programa de desenvolvimento de novos profissionais para a área
        de Tecnologia dentro da Bosch, ele é realizado com Aprendizes da CaP/ETS. Os seus alunos possuem ums formação 
        técnica fornecida pelo SENAI e aprendizado prático dentro da Bosch.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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
