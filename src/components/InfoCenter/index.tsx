import React from 'react';
import DEFAULT_AVATAR from '@/assets/images/avatar.jpg'
import { Avatar } from 'antd';
import styles from './index.less'
interface InfoProps {
  data: any,
  onLoginOut: () => void,
  style: React.CSSProperties
}
const InfoCenter = ({
  data,
  onLoginOut,
  style
}: Partial<InfoProps>) => {
  return <div style={style} className={styles['infoCenter']}>
    <Avatar src={data?.avatar || DEFAULT_AVATAR} />
    {/* &nbsp; Antd Design 5.0 */}
  </div>

}

export default InfoCenter
