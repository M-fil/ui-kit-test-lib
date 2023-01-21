import React, { FC, HTMLAttributes } from 'react'
import styles from './Button.module.scss'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => (
    <button className={`${styles.button} ${className ?? ''}`} {...props}>
        {children}
    </button>
)
