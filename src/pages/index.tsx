import React, { useEffect, useState } from "react";
import {
  SmileOutlined,
  FrownOutlined,
  HomeFilled,
  ContactsFilled,
  MessageFilled,
  WalletFilled,
  AlignCenterOutlined
} from "@ant-design/icons";
import { Drawer, MenuProps, Spin, Row, Col } from "antd";
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
import FastMarquee from "@/components/FastMarquee";
import InfoCard from "@/components/InfoCard";

type themeProps = number | string;

interface themeChangeProps {
  [key: string]: Partial<AliasToken>;
}

const { Header, Content, Footer } = Layout;

const IconMapping = [
  { label: "首页", icon: <HomeFilled />, value: "/home" },
  { label: "日志", icon: <WalletFilled />, value: "/article/list" },
  { label: "关于", icon: <ContactsFilled />, value: "/about" },
  { label: "留言", icon: <MessageFilled />, value: "/message" }
];

const themeToggleOptions = [
  {
    value: "light",
    icon: <SmileOutlined />
  },
  {
    value: "dark",
    icon: <FrownOutlined />
  }
];

const themeStyle: themeChangeProps = {
  light: {
    colorPrimary: "#daa520",
    colorBgBase: "#fff",
    colorText: "#444",
    colorTextSecondary: "#333",
    colorTextTertiary: "#444",
    colorTextQuaternary: "#999",
    colorTextBase: "#444",
    colorPrimaryText: "#444",
    colorBgLayout: "rgba(255,255,255,0.1)"
  },
  dark: {
    colorPrimary: "#333",
    colorBgBase: "#000",
    colorText: "#fff",
    colorTextSecondary: "#fff",
    colorTextTertiary: "#444",
    colorTextQuaternary: "#999",
    colorTextBase: "#fff",
    colorPrimaryText: "#fff",
    // colorBgContainer: 'rgba(118, 113, 113, 0.48)',
    colorBgElevated: "rgba(118, 113, 113, 0.68)",
    colorBorder: "rgba(118, 113, 113, 0.68)",
    colorBorderSecondary: "rgba(118, 113, 113, 0.68)",
    colorPrimaryBorder: "#fff",
    colorBgLayout: "rgba(0,0,0,0.1)",
    colorPrimaryBorderHover: "#fff"
  }
};

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

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [location.pathname]);

  useEffect(() => {
    let ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("mobi") != -1) {
      localStorage.setItem("isMobile", "1");
    } else {
      localStorage.setItem("isMobile", "0");
    }
  }, []);

  const items2: MenuProps["items"] = [
    "/home",
    "/article/list",
    "/about",
    "/message"
  ].map(icon => {
    return {
      key: icon,
      //@ts-ignore
      icon: IconMapping.find(v => v.value == icon)?.icon,
      label: t(IconMapping.find(v => v.value == icon)?.label)
    };
  });

  function onChangeTheme(value: themeProps) {
    setThemeValue(value);
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
          {/* <Header className={styles['header']} style={{
            background: themeValue == 'light' ? '#fff' : '#444'
          }}>



            <div className={styles['right']}>

              <Segmented
                options={themeToggleOptions}
                value={themeValue}
                onChange={onChangeTheme}
              />

              <ChangeLanguage />

              <InfoCenter style={{
                marginLeft: 7
              }} />
            </div>

          </Header> */}

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
            <Segmented
              options={themeToggleOptions}
              value={themeValue}
              onChange={onChangeTheme}
            />
            <ChangeLanguage />
          </div>

          <div className="logo headerTitle">{t("杨舒Blog")}</div>
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
                <header className={styles["headerCover"]}>
                  <div>Secret Life Course</div>
                  <p>我从虚幻中惊醒</p>
                </header>
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
                <div className={styles["opeartion"]}>
                  <ChangeLanguage />
                  {/*@ts-ignore */}
                  <Segmented
                    options={themeToggleOptions}
                    value={themeValue}
                    onChange={onChangeTheme}
                  />
                </div>
                <Spin spinning={pageLoading}>{children}</Spin>
              </div>

              <div className={styles["rightContent"]}></div>
            </Content>
            {/*
            <Footer className={styles['footer']}>
              {/* 备案号:@sadas.com
            </Footer> */}
          </Layout>
        </Content>
        <AplayerCpt theme={themeValue} />
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
