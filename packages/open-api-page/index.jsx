import { useState, useRef } from 'react'
import Link from 'next/link'
import OperationObject from './partials/operation-object'
import HashiHead from '@hashicorp/react-head'
import DocsSidenav from '@hashicorp/react-docs-sidenav'
import Content from '@hashicorp/react-content'
import { getPathsFromSchema, getPropsForPage } from './server'
import styles from './style.module.css'
import useOnClickOutside from './hooks/use-on-click-outside'

function OpenApiPage({
  info,
  operationCategory,
  navData,
  isSingleService,
  productName,
  productSlug,
  currentPath,
  pathFromRoot,
  massageOperationPathFn = (path) => path,
  renderOperationIntro,
}) {
  const operationsRef = useRef(null)
  const [expandedOperations, setExpandedOperations] = useState([])
  useOnClickOutside(operationsRef, () => setExpandedOperations([]))

  function setOperationState(slug, isExpanded) {
    const newStates = expandedOperations.filter((s) => s !== slug)
    if (isExpanded) newStates.push(slug)
    setExpandedOperations(newStates)
  }

  const pageTitle = operationCategory ? operationCategory.name : info.title

  return (
    <div className={styles.root} data-theme={productSlug}>
      <HashiHead
        title={`${pageTitle} | ${productName} by HashiCorp`}
        description={info.description}
        siteName={`${productName} by HashiCorp`}
      />
      <DocsSidenav
        product={productSlug}
        Link={Link}
        currentPath={isSingleService ? navData[0].path : currentPath}
        baseRoute={pathFromRoot}
        disableFilter={true}
        navData={navData}
      />
      <Content
        className={styles.contentContainer}
        product={productSlug}
        content={
          operationCategory ? (
            <>
              <p className={`${styles.pageHeading} g-type-display-2`}>
                {info.title}
              </p>
              <h1 className={`${styles.categoryHeading} g-type-display-4`}>
                {operationCategory.name}
              </h1>
              <div ref={operationsRef}>
                {operationCategory.operations.map((op) => {
                  const isExpanded =
                    expandedOperations.indexOf(op.operationId) !== -1

                  return (
                    <OperationObject
                      key={op.__type + op.__path}
                      path={massageOperationPathFn(op.__path)}
                      type={op.__type}
                      data={op}
                      renderOperationIntro={renderOperationIntro}
                      isCollapsed={!isExpanded}
                      setIsCollapsed={(isCollapsed) =>
                        setOperationState(op.operationId, !isCollapsed)
                      }
                    />
                  )
                })}
              </div>
            </>
          ) : (
            <>
              <h1 className={`${styles.pageHeading} g-type-display-2`}>
                {info.title}
              </h1>
              <p className={`${styles.landingPlaceholder} g-type-body-long`}>
                Select a service from the sidebar.
              </p>
            </>
          )
        }
      />
    </div>
  )
}

export { getPathsFromSchema, getPropsForPage }
export default OpenApiPage
