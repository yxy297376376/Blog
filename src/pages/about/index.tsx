import { useDispatch } from "dva";
import { Dispatch } from "@/models/connect";
import styles from "./index.less";
import classNames from "classnames";
import Ga from "@/components/Ga";
import TextAnimate from "@/components/Texty";
import TweenOne from "rc-tween-one";
import QueueAnim from "rc-queue-anim";
import { Parallax } from "rc-scroll-anim";
import { useEffect } from "react";

const ArticleList = [
  { label: "随笔", desc: "通常是记录最近发生的事情，或是一些零碎的想法" },
  { label: "杂谈", desc: "对某些事物的看法" },
  { label: "文学", desc: "偶尔会写短篇小说和向往诗" },
  { label: "码农", desc: "对于敲代码的学习/研究记录，或者是自己的作品" }
];
const About = () => {
  return (
    <div>
      <div
        style={{
          overflow: "hidden"
        }}
        className={classNames({
          [styles["header"]]: true,
          "post-content": true
        })}
      >
        <p>Hello，这里是Secret Life Course ，你可以叫我「杨舒」。</p>

        <h2 key={0}>关于本站</h2>

        <TextAnimate>
          为什么博客名字叫做「Secret Life
          Course」呢？为什么博客名字叫做「Secret」?
          在我脑子里的印象大概是一个清净的好去处。总之，我希望这个博客能成为互联网上属于我自己一片净土，所以就有了这个名字。
        </TextAnimate>

        <p key={2}>
          关于之前的博客，以及这个博客更多的故事，可以阅读这一篇文章：
        </p>

        <div className="bracketdown-post" key={3}>
          <TextAnimate className="bracketdown-post-title" duration={1000}>
            请重新认识我——杨舒
          </TextAnimate>
          <p className="bracketdown-post-excerpt">
            时隔三年多，我又一次看到了这句话。 &gt; 如果您看到这篇文章,表示您的
            blog 已经安装成功. 搭建博客的原因很简单：**一片互联网净土。**
          </p>

          <p className="bracketdown-post-meta">
            <span>2022-12-09</span>
            <Ga>阅读全文</Ga>
          </p>
        </div>

        <p key={4}>这个博客的文章主要有以下几个分类</p>

        <ul key={5}>
          {ArticleList.map(v => (
            <li className={styles["flex-item"]}>
              <Ga href="">{v.label}</Ga>：<TextAnimate>{v.desc}</TextAnimate>
            </li>
          ))}
        </ul>

        <hr />

        <h2 key={6}>关于我</h2>
        <p>
          我算是一个前端工程师
          ，你现在看到的博客主题就是我写的。学了这么几年也倒腾出来了一些稍微有用一点的东西，你可以到我的
          <Ga href="https://github.com/yxy297376376">GitHub 页面</Ga>查看。
        </p>

        <h2 key={7}>联系我</h2>
        <p key={8}>
          通常情况下不随便加 QQ
          和微信好友，如果你需要联系我，请参阅以下联系方式：
        </p>

        <ul key={9}>
          <li>
            <strong>邮箱</strong>：<Ga>@297376376@qq.com</Ga>（最常用）
          </li>
        </ul>

        <div className="comment-closed" key={10}>
          <p>本页的评论功能已关闭</p>
          <button> × </button>
        </div>
      </div>
    </div>
  );
};

export default About;
