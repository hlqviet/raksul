import { HTMLAttributes } from 'react'

import styles from './styles.module.css'

interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {}

const TableCell = (props: TableCellProps) => {
  const { className = '', ...rest } = props

  return <td className={`${styles.tableCell} ${className}`} {...rest} />
}

export default TableCell
