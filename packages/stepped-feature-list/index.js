import { useState } from 'react'
import styles from './style.module.css'
import Button from '@hashicorp/react-button'
import Carousel from 'nuka-carousel'

export default function SteppedFeaturesList({ features, brand }) {
  return (
    <>
      {/* carousel rendered at smaller breakpoints */}
      <FeaturesCarousel features={features} />
      <FeaturesList features={features} brand={brand} />
    </>
  )
}

function FeaturesList({ features, brand }) {
  const [activeFeature, setActiveFeature] = useState(0)
  return (
    <div
      className={`${styles.features} ${brand ? brand : ''}`}
      data-testid="features-vertical-list"
    >
      <ul className={styles.options}>
        {features.map((feature, stableIdx) => (
          <Feature
            id={stableIdx}
            // This array is stable, so we can use index as key
            // eslint-disable-next-line react/no-array-index-key
            key={stableIdx}
            title={feature.title}
            active={stableIdx === activeFeature}
            onClick={setActiveFeature}
            learnMoreLink={feature.learnMoreLink}
          >
            {feature.description}
          </Feature>
        ))}
      </ul>
      <div className={styles.contentWrapper}>
        {features[activeFeature].content}
      </div>
    </div>
  )
}

function FeaturesCarousel({ features }) {
  return (
    <div className={styles.featuresCarousel} data-testid="features-carousel">
      <Carousel
        renderCenterRightControls={() => null}
        renderCenterLeftControls={() => null}
        wrapAround
        swiping
        defaultControlsConfig={{
          pagingDotsContainerClassName: styles.pagingDots,
        }}
        cellSpacing={40}
        getControlsContainerStyles={(key) => {
          switch (key) {
            case 'BottomCenter':
              return {
                top: 0,
              }
          }
        }}
      >
        {features.map((feature, stableIdx) => (
          // This array is stable, so we can use index as key
          // eslint-disable-next-line react/no-array-index-key
          <div key={stableIdx}>
            <Feature Element="div" id={stableIdx} title={feature.title} active>
              {feature.description}
            </Feature>
            <div className={styles.contentWrapper}>
              {features[stableIdx].content}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

function Feature({
  children,
  title,
  active,
  onClick,
  learnMoreLink,
  id,
  Element = 'li',
}) {
  return (
    <Element className={active ? styles.activeFeature : styles.feature}>
      {onClick ? (
        <button
          className={styles.heading}
          onClick={() => onClick(id)}
          aria-expanded={active}
          aria-controls={`feature-${id}`}
        >
          {title}
        </button>
      ) : (
        <span className={styles.heading}>{title}</span>
      )}
      <div className={styles.body} id={`feature-${id}`} aria-hidden={!active}>
        <p>{children}</p>
        {learnMoreLink && (
          <Button
            url={learnMoreLink}
            className={styles.learnMoreLink}
            title="Learn more"
            linkType="inbound"
            theme={{
              variant: 'tertiary-neutral',
              brand: 'terraform',
            }}
          />
        )}
      </div>
    </Element>
  )
}
