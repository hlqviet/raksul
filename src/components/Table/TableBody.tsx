import { HTMLAttributes } from 'react'

interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {}

const TableBody = (props: TableBodyProps) => {
  return <tbody {...props} />
}

export default TableBody
