import styles from "./index.less";
import { Divider, Tag } from "antd";

const RightMenu = () => {
  return (
    <div className={styles["right-menu"]}>
      <div className={styles["base-info"]}>
        <div className={styles["sidebar-info-img"]}>
          <div
            className={styles["sidebar-info-bg"]}
            style={{
              backgroundImage: `url()`
            }}
          ></div>
          <div className={styles["mdui-img-circle"]}></div>
        </div>
        <div className={styles["sidebar-info-body"]}>
          <div className={styles["sidebar-info-name"]}>YS</div>
          <div className={styles["sidebar-info-desc"]}>
            有好久没有抬头认真看天上的云朵
          </div>
        </div>
      </div>
      <div className={styles["reply"]}>
        <ul className={styles["mdui-list"]}>
          <div className={styles["sidebar-module-title"]}>最新回复</div>
          <a>
            <li className={styles["dui-list-item"]}>Bhao: 新年快乐哦！！！</li>
            <li className={styles["dui-list-item"]}>Bhao: 新年快乐哦！！！</li>
            <li className={styles["dui-list-item"]}>Bhao: 新年快乐哦！！！</li>
            <li className={styles["dui-list-item"]}>Bhao: 新年快乐哦！！！</li>
            <li className={styles["dui-list-item"]}>Bhao: 新年快乐哦！！！</li>
          </a>
        </ul>
      </div>
      <div className={styles["tags"]}>
        <div className={styles["sidebar-module-title"]}>最新回复</div>
        <div className={styles["content"]}>
          <Tag color="#f50">#f50</Tag>
          <Tag color="#2db7f5">#2db7f5</Tag>
          <Tag color="#87d068">#87d068</Tag>
          <Tag color="#108ee9">#108ee9</Tag>
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
