import { Row, Col } from 'antd';
import GTitle from '@/components/GTitle';
import styles from './index.less';

const IndexLink = () => {
  return <div className={styles['itemLink']}>
    <h2>个人主页</h2>
    <p>撒打算阿松大删掉啊实打实打算萨达萨达萨达萨达是飞洒发生阿萨水水水水水水水水水水水水水水水水水水水</p>
  </div>
}
export default () => {
  return <>
    <GTitle title='首页导航' />
    <Row gutter={24}>
      {
        [1, 2].map((v, index) => (
          <Col xs={24} sm={12} md={8} lg={8} xl={6} xxl={4} key={index}>
            <IndexLink />
          </Col>
        ))
      }
    </Row>
  </>
}
