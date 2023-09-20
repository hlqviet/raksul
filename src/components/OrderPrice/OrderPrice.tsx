import { useContext } from 'react'

import { formatNumberWithCommas } from '../../common/utils'
import { PriceContext } from '../../contexts/PriceContext'
import Button from '../Button'
import styles from './OrderPrice.module.css'

const OrderPrice = () => {
  const [{ selectedPrice }] = useContext(PriceContext)

  return (
    <div className={styles.orderPrice}>
      <span>
        Order price:{' '}
        {selectedPrice && formatNumberWithCommas(selectedPrice.value)}
      </span>{' '}
      <Button>Cart</Button>
    </div>
  )
}

export default OrderPrice
