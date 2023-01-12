import Dummy from "dummyjs";
import InfiniteScroll from "react-infinite-scroller";
import Masonry from "react-masonry-css";
import { Button, Dropdown, Menu, Row, Card, Input } from "antd";
import React, { useEffect, useState, useMemo } from "react";
import {
  CaretUpOutlined,
  DeleteOutlined,
  EditOutlined
} from "@ant-design/icons";
import _ from "lodash";
import styles from "./index.less";
import { images } from "@/assets/json/data.json";

const pageSize = 20;
const mockData = (start: number) => {
  let datas = [];
  let end = start + pageSize;
  for (var i = start; i < end; i++) {
    let data: any = {};
    data.id = "mock-" + i;
    data.title =
      images[i < images.length - 1 ? i : i % (images.length - 1)].name;
    // data.image = Dummy.src(500, 400);
    data.image =
      images[i < images.length - 1 ? i : i % (images.length - 1)].src;
    data.content = Dummy.text(20, 60);
    data.collapsed = true;
    datas.push(data);
  }
  return datas;
};

const Masonrys = () => {
  const [breakpointColumnsObj, setBreakpoint] = useState({
    default: 3,
    1400: 4,
    1100: 3,
    700: 2,
    500: 1
  });
  const [hasMore, setHasMore] = useState(true);
  const [datas, setDatas] = useState<any>([]);

  useEffect(() => {
    loadMoreData();
  }, []);

  function loadMoreData(page = 1) {
    if (datas.length >= 200) {
      console.log("加载完成");
      return false;
    }
    let start = (page - 1) * pageSize + 1;
    let newData = mockData(start);
    setDatas([...datas, ...newData]);
  }

  const renderContainer = useMemo(() => {
    return datas.map((item: any, key: number) => {
      /** body区域样式 */
      let defineBodyStyle = item.collapsed
        ? { padding: "5px", margin: 8 }
        : { padding: "0px", margin: 8 };
      /** 箭头旋转 */
      let caretRotate = item.collapsed ? 0 : 180;
      return (
        <Card
          key={item.id}
          title={item.title}
          bordered={false}
          hoverable
          bodyStyle={defineBodyStyle}
          style={{ margin: 8 }}
          className={styles["gcard"]}
          actions={[
            <CaretUpOutlined
              key="caret-up"
              rotate={caretRotate}
              onClick={() => {
                item.collapsed = !item.collapsed;
                handlerDataChange(datas);
              }}
            />,
            <DeleteOutlined key="delete" />,
            <EditOutlined key="ellipsis" />
          ]}
        >
          {item.collapsed ? (
            <>
              <div style={{ position: "relative" }} className={styles["gitem"]}>
                <img src={item.image} style={{ width: "100%" }} />
                <div className={styles["baseinfo"]}>2312312</div>
              </div>
              <div>{item.content}</div>
            </>
          ) : null}
        </Card>
      );
    });
  }, [datas]);

  function handlerDataChange(datas: any) {
    const _data = _.cloneDeep(datas);
    setDatas(_data);
  }

  return (
    <>
      {/* 下拉加载 */}
      <InfiniteScroll
        initialLoad={false} // 不让它进入直接加载
        pageStart={1} // 设置初始化请求的页数
        loadMore={loadMoreData}
        hasMore={false}
        useWindow // 监听 window 滚动条
      >
        {/* 瀑布流 */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="note-masonry-grid"
          columnClassName="note-masonry-grid_column"
        >
          {renderContainer}
        </Masonry>
      </InfiniteScroll>
    </>
  );
};
export default Masonrys;
