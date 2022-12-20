import { useEffect, useRef, useState } from "react";
import { getDetails } from "@/serives/api";
import { Typography, Spin } from "antd";
import styles from "./index.less";
import PageTitle from "@/components/PageTitle";
import GTitle from "@/components/GTitle";
import { AudioPlayer } from "@/components/APlayer";
import { useUnmount } from "ahooks";
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

        <PageTitle title={data.title} />
        <p className={styles["date"]}>{data?.date}</p>

        <Paragraph>
          <div
            className={styles["content"]}
            dangerouslySetInnerHTML={{
              __html: data.content.replaceAll(" ", "<br />")
            }}
          ></div>
        </Paragraph>
      </Typography>

      {data.audio && <AudioPlayer audio={data?.audio || []} />}

      <Typography>
        <GTitle
          title="写作背景"
          style={{
            fontSize: 16
          }}
        />
        <Paragraph>
          <div className={styles["text"]}>{data.text}</div>
        </Paragraph>
        <br />
        <br />
        <br />
      </Typography>
    </Spin>
  );
};

export default ArticleDetail;
