import PageTitle from "@/components/PageTitle";
import React, { useEffect, useRef, useState } from "react";
import { withTranslation } from "react-i18next";
import { Input, Form, Button, Modal } from "antd";
import styles from "../index.less";
import Author from "@/assets/images/avatar.jpg";
import TextAnimate from "@/components/Texty";

interface ReplyContentType {
  id: string | number;
  content: string;
}

interface CommentDataType {
  id: number | string;
  date: string;
  author: string;
  avatar: string;
  content: string;
  at?: string;
  children?: CommentDataType[];
}

const { TextArea } = Input;

const mockReply = [
  {
    id: 1,
    date: "2022-12-11",
    author: "Eclsr",
    avatar:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F09%2F20210609081952_51ef5.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673430240&t=c9baf925587101db21a19b294e96b661",
    content:
      "「怪奇灵感生成器」很棒！明年开始回复「刻意写作」的时候就用这个来随机每天的场景试试，哈哈。之前「刻意写作」是随机三个关键词，然后写故事，太费脑细胞了。今年很少去刻意做这件事，光明正大地偷懒！",
    children: [
      {
        id: 11,
        date: "2022-12-12",
        author: "YS",
        at: "Eclsr",
        avatar: Author,
        content:
          "看了看你的刻意写作，感觉都很棒！另外，博客的新主题很棒，尽管少了一些神秘色彩，但设计很有感觉。"
      }
    ]
  }
];

const Comment = () => {
  return (
    <div id="reply">
      <TextAnimate>
        有什么话都可以在这里告诉我，或者直接给我发邮件。任何内容都可以，只要不违反法律，不发小广告就可以。
      </TextAnimate>
      <TextArea rows={7} />

      <div className={styles["comment"]}>
        <Input placeholder="用户名" className={styles["comment_item"]} />
        <Input placeholder="邮箱" className={styles["comment_item"]} />
        <Input placeholder="网址(选填)" className={styles["comment_item"]} />
        <Button type="primary" className={styles["comment_item"]}>
          写下留言
        </Button>
      </div>
    </div>
  );
};

const CommentItem = ({
  isChildren = false,
  data,
  onReply
}: {
  isChildren?: boolean;
  data: CommentDataType;
  onReply: (value: ReplyContentType) => void;
}) => {
  const { id, avatar, content, date, author, at = "" } = data;
  const replyRef = useRef<any>();

  function handleReply() {
    Modal.confirm({
      title: "回复",
      content: (
        <TextArea
          rows={4}
          onChange={e => (replyRef.current = e.target.value)}
        />
      ),
      onOk: () => {
        onReply &&
          onReply({
            id,
            content: replyRef.current
          });
      },
      onCancel: () => {
        replyRef.current = null;
      }
    });
  }

  return (
    <div className={styles["comment-body-inner"]}>
      <div className={styles["comment-avatar"]}>
        <img src={avatar} alt="" className={styles["avatar"]} />
        <span className={styles["comment-reply"]}>
          <a onClick={handleReply}>回复</a>
        </span>
      </div>
      <div className={styles["comment-main"]}>
        <div className={styles["comment-content"]}>
          <p>{content}</p>
        </div>
        <p className={styles["comment-meta"]}>
          <span className={styles["comment-author"]}>
            <a href="">{author}</a>
          </span>
          <span className={styles["comment-date"]}>{date}</span>
          <span
            className={styles["comment-at"]}
            style={{
              display: isChildren ? "inline-block" : "none"
            }}
          >
            回复 <a href="">@{at}</a>
          </span>
        </p>
      </div>
    </div>
  );
};

const CommentList = () => {
  function onReply(data) {
    console.log(data);
  }

  return (
    <ol className={styles["comment-list"]}>
      {mockReply.map((v, index) => (
        <div className={styles["comment-body"]} key={index}>
          <CommentItem data={v} onReply={onReply} />
          <div
            className={styles["comment-children"]}
            style={{
              display: v.children.length > 0 ? "block" : "none"
            }}
          >
            {v.children.map((_v, _index) => (
              <CommentItem
                data={_v}
                isChildren
                key={_index}
                onReply={onReply}
              />
            ))}
          </div>
        </div>
      ))}
    </ol>
  );
};

const Message = ({ t }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 16px)"
        // backgroundColor: '#efefef'
      }}
    >
      <Comment />

      <CommentList />
    </div>
  );
};

export default withTranslation("translations")(Message);
