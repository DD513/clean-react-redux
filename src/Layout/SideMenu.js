import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import Swing from "react-reveal/Swing";
import "./global.less";
import "./style.less";

const { Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const onCollapse = (collapsed) => setCollapsed(collapsed);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      width={300}
    >
      <div className="sideBlock">
        <Swing duration={3000}>
          <img
            src={require("../assets/images/logo.png")}
            className="logo"
            alt="logo"
          />
        </Swing>
      </div>
      <Menu className="sideMenu">
        <Menu.Item key="/">
          <Link to="/">
            <p className="hover-underline-animation">首頁</p>
          </Link>
        </Menu.Item>
        <Menu.Item key="/about">
          <Link to="/about">
            <p className="hover-underline-animation">關於我們</p>
          </Link>
        </Menu.Item>
        <Menu.Item key="/contact">
          <Link to="/contact">
            <p className="hover-underline-animation">聯絡我們</p>
          </Link>
        </Menu.Item>
        <Menu.Item key="/login">
          <Link to="/login">
            <p className="hover-underline-animation">登入 / 註冊</p>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default App;
