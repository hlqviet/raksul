import { HTMLAttributes } from 'react'

import styles from './styles.module.css'

interface TableProps extends HTMLAttributes<HTMLTableElement> {}

const Table = (props: TableProps) => {
  const { className = '', ...rest } = props

  return <table className={`${styles.table} ${className}`} {...rest} />
}

export default Table
