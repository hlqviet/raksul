import { HTMLAttributes } from 'react'

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {}

const TableRow = (props: TableRowProps) => {
  return <tr {...props} />
}

export default TableRow
