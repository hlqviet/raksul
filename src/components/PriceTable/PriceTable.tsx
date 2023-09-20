import { useContext, useState } from 'react'

import { PriceContext, setSelectedPrice } from '../../contexts/PriceContext'
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
  const [{ selectedPrice }, dispatch] = useContext(PriceContext)
  const [hoveringPosition, setHoveringPosition] = useState<
    [number, number] | undefined
  >()

  const handleCellClick = (
    rowIndex: number,
    columnIndex: number,
    price: number
  ) => {
    dispatch(
      setSelectedPrice({ position: [rowIndex, columnIndex], value: price })
    )
  }

  const getCellClassName = (rowIndex: number, columnIndex: number) => {
    const classNames = [styles.tableCell]

    if (hoveringPosition) {
      const [hoveringRowIndex, hoveringColumnIndex] = hoveringPosition

      if (
        hoveringRowIndex === rowIndex ||
        hoveringColumnIndex === columnIndex
      ) {
        classNames.push(styles.weakHighlight)
      }
    }

    if (!selectedPrice) return classNames.join(' ')

    const [selectedRowIndex, selectedColumnIndex] = selectedPrice.position

    if (selectedRowIndex === rowIndex && selectedColumnIndex === columnIndex) {
      classNames.push(styles.highlight)
    }

    return classNames.join(' ')
  }

  return (
    <Table
      className={styles.table}
      onMouseOut={() => setHoveringPosition(undefined)}>
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
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            <TableCell className={styles.fontBold}>{row[0].quantity}</TableCell>

            {row.map(
              ({ business_day: businessDay, price, quantity }, columnIndex) => (
                <TableCell
                  key={`${businessDay}-${price}-${quantity}`}
                  className={getCellClassName(rowIndex, columnIndex)}
                  onClick={() => handleCellClick(rowIndex, columnIndex, price)}
                  onMouseOver={() =>
                    setHoveringPosition([rowIndex, columnIndex])
                  }>
                  {price}
                </TableCell>
              )
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default PriceTable
