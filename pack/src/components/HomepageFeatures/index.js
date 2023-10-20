import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast,faPenToSquare,faLayerGroup,faCookieBite,faMagicWandSparkles, faUser, faLaptop, faCode,faGrip} from '@fortawesome/free-solid-svg-icons'

const FeatureList = [
  {
    title: 'Easy to use, no software installation required',
    icon: <FontAwesomeIcon icon={faLaptop}   size="3x" />,
    description: (
      <>
      Without any cumbersome software installation, you can easily access our service software from any PC or MAC computer at any time. Simple and convenient, it makes your digital signage production process smoother.
      </>
    ),
  },
  {
    title: 'Free template library, WYSIWYG designs',
    icon: <FontAwesomeIcon icon={faPenToSquare}   size="3x" />,
    description: (
      <>
      We provide a rich template library, free to use. No more worrying about design, you can freely design and define your layout instantly, ensuring your content is unique
      </>
    ),
  },
  {
    title: 'Rich widgets',
    icon: <FontAwesomeIcon icon={faLayerGroup}   size="3x" />,
    description: (
      <>
       Supports seamless video playback, picture list playback, slideshow, weather, clock, news and other plug-ins.
      </>
    ),
  },
  {
    title: 'Diversified widgets make content more vivid',
    icon: <FontAwesomeIcon icon={faMagicWandSparkles}   size="3x" />,
    description: (
      <>
      You can easily add various widgets, from seamless video playback to picture list playback, to slideshows, weather, clock, news, and more. The content is no longer dull, but full of energy.
      </>
    ),
  },
 
  {
    title: 'Modular design for easy expansion and maintenance',
    icon: <FontAwesomeIcon icon={faGrip}   size="3x" />,
    description: (
      <>
      Our software is modular in design, making the system easier to expand and maintain. Different functional modules are relatively independent to ensure high performance and high reliability of the system.
      </>
    ),
  },
  {
    title: 'Support interactive page publishing to meet various needs',
    icon: <FontAwesomeIcon icon={faCode}   size="3x" />,
    description: (
      <>
      Whether it is a static website, an interactive website, or an H5-based application system, it can be published to the terminal with one click through the background file management function. More flexible and interactive.
      </>
    ),
  },
  {
    title: 'Open source, free custom development',
    icon: <FontAwesomeIcon icon={faUser}   size="3x" />,
    description: (
      <>
      Our software is open source, which means you are free to customize and develop the system according to your needs. Unrestricted and creative.
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {icon}
      </div>
      <div className="text--center padding-horiz--md">
        <h3 >{title}</h3>
        <p className="text--left">{description}</p>
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
