import { Row, Col } from "antd";
import GTitle from "@/components/GTitle";
import styles from "./index.less";
import localData from "@/assets/json/data.json";
import { useEffect } from "react";
import { history } from "umi";

const IndexLink = ({ data }) => {
  return (
    <div
      className={styles["itemLink"]}
      onClick={() => {
        history.push("/article/detail", {
          data: data
        });
      }}
    >
      <h2>{data.title}</h2>
      <p
        style={{
          overflow: "hidden"
        }}
        dangerouslySetInnerHTML={{
          __html: data.content.replaceAll(" ", "<br/>")
        }}
      ></p>
    </div>
  );
};

const dataSource = localData.posts.filter(v => v.id < 5);

export default () => {
  return (
    <>
      <GTitle title="诗集" />
      <Row gutter={24}>
        {dataSource.map((v, index) => (
          <Col xs={24} sm={12} md={8} lg={8} xl={6} xxl={4} key={v.id}>
            <IndexLink data={v} />
          </Col>
        ))}
      </Row>
    </>
  );
};
