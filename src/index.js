import React from 'react'
import styles from './styles.module.css'

export const CustomButton = ({ text, type }) => {
  return (
    <button className={`${styles.btn} ${styles[type]}`}>{text} Button</button>
  )
}
