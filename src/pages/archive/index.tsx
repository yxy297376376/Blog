import React from "react";
import { Typography } from "antd";
import _ from "lodash";
import data from "@/assets/json/data.json";
import TextAnimate from "@/components/Texty";
import { history } from "umi";

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
          <span
            key={index}
            style={{
              margin: "0 3px"
            }}
          >
            # {v.name}
          </span>
        ))}
      </Paragraph>

      <h3>诗集篇</h3>

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
            <a
              onClick={() => {
                history.push("/article/detail", {
                  data: v
                });
              }}
            >
              <span>{v.date}</span> ·{v.title}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default Archive;
