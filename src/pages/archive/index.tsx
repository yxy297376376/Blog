import React from "react";
import { Typography } from "antd";
import _ from "lodash";
import data from "@/assets/json/data.json";
import TextAnimate from "@/components/Texty";

const { Paragraph } = Typography;

const Archive = () => {
  const { posts } = data;
  const tags = _.flattenDeep(posts.map(v => v.tags));
  console.log(tags);

  return (
    <div className="fadeIn">
      <h2>标签云</h2>
      <Paragraph>
        {tags.map((v: any, index: number) => (
          <span key={index}># {v.name}</span>
        ))}
      </Paragraph>

      <h2>2022年</h2>

      <ol
        style={{
          listStyle: "none"
        }}
      >
        {posts.map((v, index) => (
          <li
            key={index}
            style={{
              listStyleType: "none"
            }}
          >
            <a href={v.link}>
              <span>{v.date}</span> ·{v.title}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default Archive;
