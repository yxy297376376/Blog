import PARK1 from '@/assets/images/park1.jpg'
import DARK1 from '@/assets/images/dark1.jpg'
import WQ3 from '@/assets/images/wq3.jpg'
import k7 from '@/assets/images/k7.jpg'
import J3 from '@/assets/images/j3.jpg'
import styles from './index.less'
import { Card } from 'antd';
import { history } from 'umi';
import PageTitle from '@/components/PageTitle'

const { Meta } = Card;

const Home = () => {

  function onJumpDetail(v: any) {
    history.push('/article/detail', {
      url: v
    })
  }

  return <div className={styles['homePage']}>
    <PageTitle title='杂思' />
    <div className={styles['content']}>
      {
        [k7, J3, DARK1, WQ3, PARK1].map((v, index) => (
          <Card
            key={index}
            hoverable
            style={{ width: '100%', margin: '10px auto' }}
            className={styles['hoverImg']}
            cover={
              <img
                alt="example"
                src={v}
                style={{ objectFit: 'cover', height: 140, width: '100%' }}
              />
            }
            onClick={() => onJumpDetail(v)}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        ))
      }
    </div>
  </div>
}
export default Home;
