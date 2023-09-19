import { SelectHTMLAttributes } from 'react'

import styles from './Select.module.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

const Select = (props: SelectProps) => {
  const { className = '', ...rest } = props

  return <select className={`${styles.select} ${className}`} {...rest} />
}

export default Select
