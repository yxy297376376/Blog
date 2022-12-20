import React, { useEffect, useMemo, useState } from "react";
import {
  SmileOutlined,
  FrownOutlined,
  HomeFilled,
  ContactsFilled,
  MessageFilled,
  WalletFilled,
  AlignCenterOutlined,
  BulbOutlined
} from "@ant-design/icons";
import { Drawer, MenuProps, Spin, Row, Col, Divider } from "antd";
import { AliasToken } from "antd/es/theme/interface";
import { Breadcrumb, Layout, Menu, ConfigProvider, Segmented } from "antd";
import styles from "./index.less";
import InfoCenter from "@/components/InfoCenter";
import { history } from "umi";
import BgAnimation from "@/components/BgAnimation";
import AplayerCpt from "@/components/APlayer";
import ButtomApart from "@/components/ButtomApart";
import ChangeLanguage from "@/components/ChangeLanguage";
import { withTranslation } from "react-i18next";
import "@/lang.js";
// import FastMarquee from "@/components/FastMarquee";
import PageTitle from "@/components/PageTitle";
import DEFAULT_AVATAR from "@/assets/images/avatar.jpg";

type themeProps = number | string;

interface themeChangeProps {
  [key: string]: Partial<AliasToken>;
}

const { Header, Content, Footer } = Layout;

const IconMapping = [
  { label: "首页", icon: <HomeFilled />, value: "/home" },
  { label: "日志", icon: <WalletFilled />, value: "/article/list" },
  { label: "DETAIL", icon: <WalletFilled />, value: "/article/detail" },
  { label: "关于", icon: <ContactsFilled />, value: "/about" },
  { label: "留言", icon: <MessageFilled />, value: "/message" },
  { label: "归档", icon: <MessageFilled />, value: "/archive" }
];

const themeToggleOptions = [
  {
    value: "light",
    icon: <BulbOutlined />
  }
];

const themeStyle: themeChangeProps = {
  light: {
    colorPrimary: "#DAA520",
    colorBgBase: "#fff",
    colorText: "#444",
    colorTextSecondary: "#333",
    colorTextTertiary: "#444",
    colorTextQuaternary: "#999",
    colorTextBase: "#333",
    colorPrimaryText: "#333",
    colorBgLayout: "rgba(255,255,255,0.1)",
    colorLink: "#DAA520",
    colorLinkActive: "#ff9e00",
    colorLinkHover: "#ff9e00"
  },
  dark: {
    colorPrimary: "#DAA520",
    colorBgBase: "#000",
    colorText: "#fff",
    colorTextSecondary: "#fff",
    colorTextTertiary: "#b9b9b9",
    colorTextQuaternary: "#999",
    colorTextBase: "#b9b9b9",
    colorPrimaryText: "#fff",
    // colorBgContainer: 'rgba(118, 113, 113, 0.48)',
    colorBgElevated: "rgba(0, 0, 0, 0.8)",
    colorBorder: "rgba(118, 113, 113, 0.68)",
    colorBorderSecondary: "rgba(118, 113, 113, 0.68)",
    colorPrimaryBorder: "#fff",
    colorBgLayout: "rgba(0,0,0,0.1)",
    colorPrimaryBorderHover: "#fff",
    colorInfoText: "#fff",
    colorTextLabel: "#fff",
    colorFill: "#fff",
    colorLink: "#DAA520",
    colorLinkActive: "#ff9e00",
    colorLinkHover: "#ff9e00"
  }
};

const HeaderCover = ({ style }: { style?: React.CSSProperties }) => (
  <header className={styles["headerCover"]} style={style}>
    <a>Secret Life Course</a>
    <a>我从虚幻中惊醒</a>
  </header>
);

{
  /*@ts-ignore */
}
const App: React.FC = ({ children, t, ...rest }) => {
  // const { token } = useToken();
  const [themeValue, setThemeValue] = useState<themeProps>("light");
  const [currentPath, setCurrentPath] = useState("/home");
  const [pageLoading, setLoading] = useState(false);
  const [menuVisible, setMbMenuVisible] = useState(false);

  useEffect(() => {
    if (history.location.pathname == "/") {
      history.push("/home");
    } else {
      setCurrentPath(location.pathname);
    }
  }, [location.pathname]);

  useEffect(() => {
    let ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("mobi") != -1) {
      localStorage.setItem("isMobile", "1");
    } else {
      localStorage.setItem("isMobile", "0");
    }
  }, []);

  const onCurrentTitle = useMemo(() => {
    return IconMapping.find(v => v.value == location.pathname)?.label;
  }, [location.pathname]);

  const items2: MenuProps["items"] = [
    "/home",
    "/article/list",
    "/about",
    "/message",
    "/archive"
  ].map(icon => {
    return {
      key: icon,
      //@ts-ignore
      icon: IconMapping.find(v => v.value == icon)?.icon,
      label: t(IconMapping.find(v => v.value == icon)?.label)
    };
  });

  function onChangeTheme() {
    setThemeValue(themeValue == "light" ? "dark" : "light");
  }

  function onClickMenu(value: any) {
    history.push(value.key);
  }

  return (
    <ConfigProvider
      theme={{
        token: themeStyle[themeValue]
      }}
    >
      <BgAnimation theme={themeValue} />
      <Layout
        style={{
          minHeight: "100vh",
          color: themeValue == "light" ? "#444" : "#fff"
        }}
      >
        {/* PC菜单 */}
        <div className={styles["stickyHeader"]}>
          {/* <FastMarquee text='目前是搭建初始阶段，还在学习中。' style={{
            // minWidth: 300,
            color: '#444',
            // background: themeValue == 'light' ? '#fff' : '#444'
          }} /> */}
        </div>

        {/* 移动端菜单 */}
        <div className={styles["mobileHeader"]}>
          <div className={styles["flex"]}>
            {/*@ts-ignore */}
            <BulbOutlined
              onClick={onChangeTheme}
              style={{
                fontSize: 18,
                marginRight: 7
              }}
            />
            <ChangeLanguage />
          </div>

          <div className="logo headerTitle">{t(onCurrentTitle)}</div>
          <div className={styles["flex"]}>
            <InfoCenter
              style={{
                marginRight: 7
              }}
            />
            <AlignCenterOutlined
              style={{
                fontSize: 18
              }}
              onClick={() => {
                setMbMenuVisible(true);
              }}
            />
          </div>
        </div>

        <Content style={{ position: "relative" }}>
          <Layout style={{ padding: "0px 0", minHeight: "100vh" }}>
            <Content className={styles["content"]}>
              <div className={styles["nav"]}>
                <HeaderCover />
                <Menu
                  mode="vertical"
                  selectedKeys={[currentPath]}
                  items={items2}
                  onClick={onClickMenu}
                />
              </div>
              {/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb> */}
              <div className={styles["childrenContent"]}>
                <Spin spinning={pageLoading}>
                  <div
                    className={styles["PageTitle"]}
                    // style={{
                    //   display: onCurrentTitle ? "block" : "none"
                    // }}
                  >
                    <PageTitle title={t(onCurrentTitle)} />
                  </div>
                  {children}
                </Spin>
              </div>

              <div className={styles["rightContent"]}>
                <div className={styles["opeartion"]}>
                  <BulbOutlined
                    onClick={onChangeTheme}
                    style={{
                      fontSize: 18,
                      marginRight: 8
                    }}
                    className={styles["item"]}
                  />
                  <ChangeLanguage className={styles["item"]} />
                  {/*@ts-ignore */}
                </div>
              </div>
            </Content>
            {/*
            <Footer className={styles['footer']}>
              {/* 备案号:@sadas.com
            </Footer> */}
          </Layout>
        </Content>
        <ButtomApart />

        {/* 移动端菜单 */}
        <Drawer
          open={menuVisible}
          onClose={() => setMbMenuVisible(false)}
          placement="top"
          height={"100vh"}
          className={styles["drawer"]}
          title={t("菜单")}
        >
          <Row className={styles["headerMb"]}>
            <HeaderCover
              style={{
                textAlign: "center",
                fontSize: 16
              }}
            />
            <img src={DEFAULT_AVATAR} alt="" />
          </Row>

          <Divider />

          <Row gutter={24} className={styles["mobileMenu"]}>
            {items2.map((v, index) => (
              <Col
                span={12}
                key={index}
                className={styles["item"]}
                style={{
                  color: themeValue == "light" ? "#333" : "#dddddd"
                }}
                onClick={() => {
                  {
                    /*@ts-ignore */
                  }
                  history.push(v?.key);
                  setMbMenuVisible(false);
                }}
              >
                {/*@ts-ignore */}
                {v?.label}
              </Col>
            ))}
          </Row>
        </Drawer>
      </Layout>
    </ConfigProvider>
  );
};

export default withTranslation("translations")(App);
