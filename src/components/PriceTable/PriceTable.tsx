import { Price } from '../../models/price'
import { Table, TableBody, TableCell } from '../Table'
import TableRow from '../Table/TableRow'
import styles from './PriceTable.module.css'

const businessDays = [1, 2, 3, 4, 5]

interface PriceTableProps {
  data: Price[][]
}

const PriceTable = (props: PriceTableProps) => {
  const { data } = props

  return (
    <Table className={styles.table}>
      <TableBody>
        <TableRow>
          <TableCell className={styles.fontBold}>
            Business days/
            <br />
            Quantity
          </TableCell>
          {businessDays.map((businessDay) => (
            <TableCell key={businessDay} className={styles.fontBold}>
              {businessDay}
            </TableCell>
          ))}
        </TableRow>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell className={styles.fontBold}>{row[0].quantity}</TableCell>
            {row.map(({ business_day: businessDay, price, quantity }) => (
              <TableCell key={`${businessDay}-${price}-${quantity}`}>
                {price}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default PriceTable
