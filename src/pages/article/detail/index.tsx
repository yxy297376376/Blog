import { useEffect, useRef, useState } from "react";
import { getDetails } from "@/serives/api";
import { Typography, Spin, Row, Col } from "antd";
import styles from "./index.less";
import PageTitle from "@/components/PageTitle";
import GTitle from "@/components/GTitle";
import { AudioPlayer } from "@/components/APlayer";
import { posts } from "@/assets/json/data.json";
import { useUnmount } from "ahooks";
import { history } from "umi";
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
  const {
    state: { data }
  } = location;

  const audioRef = useRef<any>();

  useEffect(() => {
    setLoading(true);
    window.scrollTo({
      top: 330,
      behavior: "smooth"
    });
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [data]);

  const current = posts.findIndex(v => v.id == data?.id);

  const prev = posts.find((v, index) => index == current - 1);
  const next = posts.find((v, index) => index == current + 1);

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

      {data.audio && <AudioPlayer ref={audioRef} audio={data?.audio || []} />}

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

        <Row
          gutter={24}
          style={{
            padding: "0 30px"
          }}
        >
          <Col span={12}>
            <a
              onClick={() => {
                // audioRef.current?.instance?.destroy();
                history.push("/article/detail", {
                  data: prev
                });
              }}
              style={{
                display: !!prev ? "inline-block" : "none"
              }}
            >
              上一篇：{prev?.title}{" "}
            </a>
          </Col>
          <Col span={12} style={{ textAlign: "right" }}>
            <a
              onClick={() => {
                // audioRef.current?.instance?.destroy();
                history.push("/article/detail", {
                  data: next
                });
              }}
              style={{
                display: !!next ? "inline-block" : "none"
              }}
            >
              下一篇：{next?.title}{" "}
            </a>
          </Col>
        </Row>
        <br />
      </Typography>
    </Spin>
  );
};

export default ArticleDetail;
