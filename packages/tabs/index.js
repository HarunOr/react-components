import { useState, useEffect } from 'react'
import TabTriggers from './partials/TabTriggers/index.js'
import TabProvider, { useTabGroups } from './provider'

function Tabs({ items, defaultTabIdx, centered, fullWidthBorder, theme }) {
  const isDefaultOutOfBounds =
    defaultTabIdx >= items.length || defaultTabIdx < 0

  const [activeTabIdx, setActiveTabIdx] = useState(
    // if specified default is out of bounds (ie, it's determined at runtime),
    // fallback to 0 to avoid throwing an error
    isDefaultOutOfBounds ? 0 : defaultTabIdx
  )
  const groupCtx = useTabGroups()

  useEffect(() => {
    const hasGroups = items.filter((item) => item.group).length > 0
    if (process.env.NODE_ENV !== 'production' && hasGroups && groupCtx === undefined) {
        console.warn(
          'The `TabProvider` cannot be accessed. Make sure it wraps the `Tabs` components so Tab Groups can work properly.'
        )
    }
  }, [])

  return (
    <section
      className={`g-tabs ${theme}${centered ? ' g-tabs-centered' : ''}${
        fullWidthBorder ? ' g-tabs-full-border' : ''
      }`}
    >
      <TabTriggers
        items={items.map((item, idx) => ({
          tabIndex: idx,
          heading: item.heading,
          group: item.group,
          ...(item.tooltip && { tooltip: item.tooltip }),
        }))}
        activeTabGroup={groupCtx?.activeTabGroup}
        setActiveTabGroup={groupCtx?.setActiveTabGroup}
        activeTabIdx={activeTabIdx}
        setActiveTabIdx={setActiveTabIdx}
      />
      <div className="g-grid-container">
        {items[activeTabIdx].tabChildren()}
      </div>
    </section>
  )
}

Tabs.defaultProps = {
  defaultTabIdx: 0,
  theme: '',
}

export default Tabs
export { TabProvider, useTabGroups }
