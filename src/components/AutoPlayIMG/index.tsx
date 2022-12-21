import React from "react";
import { Carousel } from "antd";
import styles from "./index.less";
import { AudioPlayer } from "@/components/APlayer";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79"
};

const static_imgs = [
  {
    label: "1",
    src: "http://rluot02vo.hd-bkt.clouddn.com/images/mmexport1599122110481.jpg"
  },
  {
    label: "1",
    src: "http://rluot02vo.hd-bkt.clouddn.com/images/mmexport1599122118366.jpg"
  },
  {
    label: "1",
    src: "http://rluot02vo.hd-bkt.clouddn.com/images/mmexport1599122121198.jpg"
  },
  {
    label: "1",
    src: "http://rluot02vo.hd-bkt.clouddn.com/images/mmexport1599122124700.jpg"
  },
  {
    label: "1",
    src: "http://rluot02vo.hd-bkt.clouddn.com/images/mmexport1599122134751.jpg"
  },
  {
    label: "1",
    src: "http://rluot02vo.hd-bkt.clouddn.com/images/mmexport1599122137623.jpg"
  },
  {
    label: "1",
    src: "http://rluot02vo.hd-bkt.clouddn.com/images/IMG_20221202_203406.jpg"
  },
  {
    label: "1",
    src: "http://rluot02vo.hd-bkt.clouddn.com/images/IMG_20221021_085827.jpg"
  },
  {
    label: "1",
    src: "http://rluot02vo.hd-bkt.clouddn.com/images/IMG_20221019_090114.jpg"
  },
  {
    label: "1",
    src: "http://rluot02vo.hd-bkt.clouddn.com/images/IMG_20220929_105925.jpg"
  }
];

const options = {
  autoplay: true,
  fade: true,
  infinite: true,
  speed: 3000,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  swipeToSlide: true
};
const AutoPlayIMG = () => {
  return (
    <>
      <Carousel {...options}>
        {static_imgs.map((v, index) => (
          <div key={index}>
            <img src={v.src} className={styles["imgStyle"]} alt="" />
            {/* <h3 style={contentStyle}>{v.label}</h3> */}
          </div>
        ))}
      </Carousel>
      <AudioPlayer
        audio={[
          //  {
          //   "name": "连名带姓",
          //   "artist": "张惠妹",
          //   "cover": "https://bkimg.cdn.bcebos.com/smart/6a600c338744ebf…_1,color_ffffff?x-bce-process=image/format,f_auto",
          //   "url": "http://rluot02vo.hd-bkt.clouddn.com/songs/%E8%BF%9E%E5%90%8D%E5%B8%A6%E5%A7%93-%E5%BC%A0%E6%83%A0%E5%A6%B9.mp3",
          //   "lrc": "https://music.y444.cn/api/v1/search/lyric/lrc?id=522352195&src=wyy&name=%E8%BF%9E%E5%90%8D%E5%B8%A6%E5%A7%93-%E5%BC%A0%E6%83%A0%E5%A6%B9"
          // }
          {
            name: "世界末日（live）",
            artist: "周杰伦",
            cover:
              "https://img0.baidu.com/it/u=2179869794,1270393163&fm=253&fmt=auto&app=138&f=JPEG?w=224&h=224",
            url: "http://rluot02vo.hd-bkt.clouddn.com/songs/%E4%B8%96%E7%95%8C%E6%9C%AB%E6%97%A5-%E5%91%A8%E6%9D%B0%E4%BC%A6.mp3",
            lrc: "http://rluot02vo.hd-bkt.clouddn.com/songs/%E4%B8%96%E7%95%8C%E6%9C%AB%E6%97%A5-%E5%91%A8%E6%9D%B0%E4%BC%A6.lrc"
          }
        ]}
      />
    </>
  );
};

export default AutoPlayIMG;
