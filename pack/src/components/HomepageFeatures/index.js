import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const FeatureList = [
  {
    title: '容易使用，不需安装软件',
    icon: <FontAwesomeIcon icon={faEnvelope}  size="6x" />,
    description: (
      <>
      无需任何繁琐的软件安装，您可以随时通过任何PC或MAC电脑轻松访问我们的服务软件。简单、便捷，让您的数字标牌制作流程更加顺畅.
      </>
    ),
  },
  {
    title: '免费模板库，即见即所得设计',
    src: require('@site/static/img/p1.png').default,
    description: (
      <>
      我们提供丰富的模板库，免费使用。不再为设计烦恼，您可以即见即所得地自由设计和定义您的布局，确保内容独具一格
      </>
    ),
  },
  {
    title: '丰富小插件',
    src: require('@site/static/img/p2.png').default,
    description: (
      <>
       支持视频无缝播放,图片列表播放,支持幻灯片,天气,时钟,新闻等插件.
      </>
    ),
  },
  {
    title: '多样化小插件，内容更生动',
    src: require('@site/static/img/p4.png').default,
    description: (
      <>
      您可以轻松加入各种小插件，从视频无缝播放到图片列表播放，再到幻灯片、天气、时钟、新闻等等。内容不再平淡，而是充满活力.
      </>
    ),
  },
  {
    title: '支持交互式页面发布',
    src: require('@site/static/img/p3.png').default,
    description: (
      <>
       静态网站, 交互式网站, 基于H5的应用系统都可以通过后台文件管理功能一健发布到终端.
      </>
    ),
  },
  {
    title: '模块化设计，轻松扩展和维护',
    src: require('@site/static/img/p6.png').default,
    description: (
      <>
      我们的软件采用模块化设计，使系统更易于扩展和维护。不同的功能模块相对独立，确保系统的高性能和高可靠性.
      </>
    ),
  },
  {
    title: '支持交互式页面发布，满足多种需求',
    src: require('@site/static/img/p6.png').default,
    description: (
      <>
      无论是静态网站、交互式网站，还是基于H5的应用系统，都可以通过后台文件管理功能一键发布到终端。更灵活，更互动.
      </>
    ),
  },
  {
    title: '开源，自由定制开发',
    src: require('@site/static/img/p6.png').default,
    description: (
      <>
      我们的软件是开源的，这意味着您可以根据自己的需求自由定制和开发系统。不受束缚，发挥创造力.
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
