import { useEffect, useState } from "react";
import { getDetails } from "@/serives/api";
import { Typography, Spin } from "antd";
import styles from "./index.less";

type NormalType = string | number;

interface DetailProps {
  title: NormalType;
  description: NormalType;
  create_time: string;
  url: string;
  name: NormalType;
}

const { Title, Paragraph, Text, Link } = Typography;

const ArticleDetail = ({ location }: { location: any }) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const {
    state: { data }
  } = location;

  return (
    <Spin spinning={loading}>
      <Typography className={styles["detail"]}>
        <img
          src={data.link}
          className={styles["cover"]}
          loading="lazy"
          onError={e => {
            // setIsError(true);
          }}
        ></img>

        <Title level={3}>{data?.title}</Title>
        <Title level={5}>{data?.create_time}</Title>

        <Paragraph>
          <div
            className={styles["content"]}
            dangerouslySetInnerHTML={{
              __html: data.content.replaceAll(" ", "<br />")
            }}
          ></div>
        </Paragraph>
      </Typography>
      <Typography>
        <Title level={5}>创作背景</Title>
        <Paragraph>{data.text}</Paragraph>
        <br />
        <br />
        <br />
      </Typography>
    </Spin>
  );
};

export default ArticleDetail;
