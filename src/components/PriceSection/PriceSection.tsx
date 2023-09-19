import OrderPrice from '../OrderPrice'
import Paper from '../Paper'
import PaperSizeSelection from '../PaperSizeSelection'
import PriceTableWrapper from '../PriceTableWrapper'
import styles from './PriceSection.module.css'

const PriceSection = () => {
  return (
    <div className={styles.priceSection}>
      <Paper className={styles.leftPane}>
        <PaperSizeSelection />
      </Paper>
      <Paper className={styles.rightPane}>
        <PriceTableWrapper />
      </Paper>
      <Paper className={styles.orderPrice}>
        <OrderPrice />
      </Paper>
    </div>
  )
}

export default PriceSection
