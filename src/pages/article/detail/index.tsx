import { useEffect, useState } from "react";
import { getDetails } from '@/serives/api';
import { Typography, Spin } from 'antd';
import styles from './index.less'

type NormalType = string | number;

interface DetailProps {
  title: NormalType,
  description: NormalType,
  create_time: string,
  url: string,
  name: NormalType
}

const { Title, Paragraph, Text, Link } = Typography;

const ArticleDetail = ({ location }: {
  location: any
}) => {

  const [detail, setDetail] = useState<DetailProps>();
  const [loading, setLoading] = useState<boolean>(false);

  async function onImages() {
    setLoading(true)
    const res = await getDetails();
    setDetail(res.data)

    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  useEffect(() => {
    onImages()
  }, [])

  const { state: { url } } = location;
  return (
    <Spin spinning={loading}>
      <Typography>
        <Title level={2}>{detail?.title}</Title>
        <Title level={5}>{detail?.create_time}</Title>
        <img src={url} className={styles['cover']} loading='lazy' onError={(e) => {
          // setIsError(true);
        }}></img>
        <Paragraph >{detail?.description}</Paragraph>
        <Paragraph >{detail?.description}</Paragraph>
        <Paragraph >{detail?.description}</Paragraph>
      </Typography >
    </Spin>
  )
}

export default ArticleDetail;
