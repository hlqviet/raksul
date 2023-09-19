import { useContext, useState } from 'react'

import { PaperSizeContext } from '../../contexts/PaperSizeContext'
import useGetPricesQuery from '../../hooks/useGetPricesQuery'
import Button from '../Button'
import PriceTable from '../PriceTable/PriceTable'
import styles from './PriceTableWrapper.module.css'

const PriceTableWrapper = () => {
  const [{ paperSize }] = useContext(PaperSizeContext)
  const { loading, error, data } = useGetPricesQuery({ paperSize })
  const [showMore, setShowMore] = useState(false)

  if (error) return <div>{error.toString()}</div>

  const visibleData = showMore ? data?.prices : data?.prices.slice(0, 5)

  const handleClick = () => {
    setShowMore(!showMore)
  }

  return (
    <div>
      <h3>Price table</h3>
      {loading && <div>Loading...</div>}

      {!loading && visibleData?.length && (
        <>
          <PriceTable data={visibleData} />
          <div className={styles.textCenter}>
            <Button onClick={handleClick}>
              {showMore && 'Show less'}
              {!showMore && 'Show more'}
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

export default PriceTableWrapper
