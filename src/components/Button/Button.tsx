import { HTMLAttributes } from 'react'

import styles from './Button.module.css'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps) => {
  const { className = '', ...rest } = props

  return <button className={`${styles.button} ${className}`} {...rest} />
}

export default Button
