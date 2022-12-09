import { useDispatch } from "dva";
import { Dispatch } from "@/models/connect";
import styles from "./index.less";
import classNames from "classnames";
import Ga from "@/components/Ga";

const About = () => {
  return (
    <div>
      <div
        className={classNames({
          [styles["header"]]: true,
          "post-content": true
        })}
      >
        <p>
          {" "}
          Hello，这里是Secret Life Course ，你可以叫我「杨舒」或者「黑怕男孩」。
        </p>

        <h2>关于本站</h2>

        <p>
          为什么博客名字叫做「Secret Life
          Course」呢？为什么博客名字叫做「Secret」?
          在我脑子里的印象大概是一个清净的好去处。总之，我希望这个博客能成为互联网上属于我自己一片净土，所以就有了这个名字
        </p>

        <p>关于之前的博客，以及这个博客更多的故事，可以阅读这一篇文章：</p>

        <p className="bracketdown-post">
          <h4 className="bracketdown-post-title">请重新认识我——杨舒</h4>
          <p className="bracketdown-post-excerpt">
            时隔三年多，我又一次看到了这句话。 &gt; 如果您看到这篇文章,表示您的
            blog 已经安装成功. 搭建博客的原因很简单：**一片互联网净土。**
          </p>

          <p className="bracketdown-post-meta">
            <span>2022-12-09</span>
            <Ga>阅读全文</Ga>
          </p>
        </p>

        <p>这个博客的文章主要有以下几个分类</p>

        <ul>
          <li>
            <Ga href="">随笔</Ga>：通常是记录最近发生的事情，或是一些零碎的想法
          </li>
          <li>
            <Ga href="">杂谈</Ga>：对某些事物的看法
          </li>
          <li>
            <Ga href="">文学</Ga>：偶尔会写短篇小说和向往诗
          </li>
          <li>
            <Ga href="">码农</Ga>：对于敲代码的学习/研究记录，或者是自己的作品
          </li>
        </ul>

        <hr />

        <h2>关于我</h2>
        <p>
          我算是一个前端工程师
          ，你现在看到的博客主题就是我写的。学了这么几年也倒腾出来了一些稍微有用一点的东西，你可以到我的
          <Ga href="https://github.com/yxy297376376">GitHub 页面</Ga>查看。
        </p>

        <h2>联系我</h2>
        <p>
          通常情况下不随便加 QQ
          和微信好友，如果你需要联系我，请参阅以下联系方式：
        </p>

        <ul>
          <li>
            <strong>邮箱</strong>：<Ga>@297376376@qq.com</Ga>（最常用）
          </li>
        </ul>

        <div className="comment-closed">
          <p>本页的评论功能已关闭</p>
          <button> × </button>
        </div>
      </div>
    </div>
  );
};

export default About;
