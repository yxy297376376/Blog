import React from 'react'
import styles from './index.less'

export default ({ title, style }: {
  title?: string | React.ReactNode;
  style?: React.CSSProperties
}) => {
  return <div className={styles['pageHeader']} style={style}>
    <h1>{title}</h1>
  </div>
}
