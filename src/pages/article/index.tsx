import PARK1 from "@/assets/images/park1.jpg";
import DARK1 from "@/assets/images/dark1.jpg";
import WQ3 from "@/assets/images/wq3.jpg";
import k7 from "@/assets/images/k7.jpg";
import J3 from "@/assets/images/j3.jpg";
import styles from "./index.less";
import { Card } from "antd";
import { history } from "umi";
import PageTitle from "@/components/PageTitle";
import { posts } from "@/assets/json/data.json";

const { Meta } = Card;

const Home = () => {
  function onJumpDetail(v: any) {
    history.push("/article/detail", {
      data: v
    });
  }
  // {[k7, J3, DARK1, WQ3, PARK1]

  return (
    <div className={styles["homePage"]}>
      <div className={styles["content"]}>
        {posts.map((v, index) => (
          <Card
            key={index}
            hoverable
            style={{ width: "100%", margin: "10px auto" }}
            className={styles["hoverImg"]}
            cover={
              <img
                alt="example"
                src={v.link}
                style={{ objectFit: "cover", height: 150, width: "100%" }}
              />
            }
            onClick={() => onJumpDetail(v)}
          >
            <Meta
              title={v.title}
              description={v.content.substring(0, 45) + "..."}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};
export default Home;
