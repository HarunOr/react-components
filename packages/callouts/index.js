import CalloutItem from './partials/callout-item/index.js'

function Callouts({
  heading,
  subheading,
  centerHeading,
  layout,
  theme,
  brand,
  items,
}) {
  if (!layout)
    throw new Error('The "layout" prop is required, please pass in a value')
  return (
    <section className={`g-callouts theme-${theme}`}>
      <div className="g-grid-container">
        {(heading || subheading) && (
          <div className="headings" data-testid="headings">
            {heading && (
              <h2
                className={`g-type-display-2 theme-${theme} ${
                  centerHeading ? 'centered' : ''
                }`}
              >
                {heading}
              </h2>
            )}
            {subheading && (
              <p
                className={`g-type-body-large theme-${theme} ${
                  centerHeading ? 'centered' : ''
                }`}
              >
                {subheading}
              </p>
            )}
          </div>
        )}
        <div className={`items layout-${layout}`}>
          {items.map((item, stableIdx) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <div key={stableIdx} className="callout-item-wrapper">
                <CalloutItem
                  icon={item.icon}
                  heading={item.heading}
                  content={item.content}
                  link={item.link}
                  layout={layout}
                  theme={theme}
                  brand={brand}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

Callouts.defaultProps = {
  theme: 'light',
  brand: 'hashicorp',
}

export default Callouts