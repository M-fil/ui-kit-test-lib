import React, { FC, ReactNode, useState } from 'react'
import styles from './Accordion.module.scss'

export interface AccordionProps {
  isOpen?: boolean
  onToggle?: () => void
  children: ReactNode
  title: string
  innerControl?: boolean
}

export const Accordion: FC<AccordionProps> = ({
  isOpen: isOpenProp,
  onToggle: onToggleProp,
  children,
  title,
  innerControl = false
}) => {
  const [isOpenState, setIsOpenState] = useState(false)

  const onToggle = (): void => {
    if (innerControl) {
      setIsOpenState((prevIsOpen) => !prevIsOpen)
    } else {
      onToggleProp?.()
    }
  }

  const isOpen = innerControl ? isOpenState : isOpenProp

  return (
        <div className={styles.container}>
            <button onClick={onToggle} className={styles.triggerButton}>
                <span className={styles.title}>
                    {title}
                </span>
                <span className={styles.indicator}>
                    {isOpen ? '-' : '+'}
                </span>
            </button>
            {isOpen && (
                <div className={styles.content}>
                    {children}
                </div>
            )}
        </div>
  )
}
