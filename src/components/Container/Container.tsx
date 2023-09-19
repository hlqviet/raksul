import { HTMLAttributes } from 'react'

import styles from './Container.module.css'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

const Container = (props: ContainerProps) => {
  const { className = '', ...rest } = props

  return <div className={`${styles.container} ${className}`} {...rest} />
}

export default Container
