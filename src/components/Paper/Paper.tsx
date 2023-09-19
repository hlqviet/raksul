import { HTMLAttributes } from 'react'

import styles from './Paper.module.css'

interface PaperProps extends HTMLAttributes<HTMLDivElement> {}

const Paper = (props: PaperProps) => {
  const { className = '', ...rest } = props

  return <div className={`${styles.paper} ${className}`} {...rest} />
}

export default Paper
