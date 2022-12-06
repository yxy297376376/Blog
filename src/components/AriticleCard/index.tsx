import { Row, Col } from 'antd'
import styles from './index.less'
export default ({
  data
}: {
  data?: any
}) => {
  return <div className={styles['postText']}>
    <h2 className={styles['title']}>那个从角落里走过的人</h2>
    <ul className={styles['meta']}>
      <li>10 天前</li>
      <li>小说</li>
      <li>184 次阅读</li>
      <li>2 评论</li>
    </ul>
    <div className={styles['content']}>
      我像往常一样乘电车回家。刚上车，我就在余光里看到窗外有一个黑色的人影从窗户的一侧闪过，还没等我反应过来，他就消失在混杂的人群里了。说来也奇怪，他是从一个角落离开站台的，离我那么远，却那么引人注意。
    </div>
  </div>
}
