import React from 'react'
import styles from './index.less'

export default ({ style, title }: {
  title: String | React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return <h1 className={styles['beforeTitle']} style={style}>{title}</h1>
}
