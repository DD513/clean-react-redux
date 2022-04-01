import React, { useState } from "react";
import { Layout, Menu, Switch, Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./global.less";
import _ from "lodash";
import {
  HomeOutlined,
  IdcardOutlined,
  MailOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

function SideMenu() {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    if (e.key === "logout") {
      dispatch({ type: "POST_UserLogout" });
    }
  };

  const [collapsed, setCollapsed] = useState(false);
  const [theme, changeTheme] = useState(true);

  const MenuList = [
    {
      menuIcon: <HomeOutlined />,
      menuTitle: "首頁",
      menuLink: "/",
    },
    {
      menuIcon: <IdcardOutlined />,
      menuTitle: "關於我們",
      menuLink: "/about",
    },
    {
      menuIcon: <MailOutlined />,
      menuTitle: "聯絡我們",
      menuLink: "/contact",
    },
  ];
  return (
    <Row id="sideBlock">
      <Col xs={24}>
        <Sider
          width={250}
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
          style={{
            height: "100vh",
            position: "sticky",
            top: 0,
            left: 0,
          }}
          className={theme === true ? "whiteBackground" : "darkBackground"}
        >
          <Switch
            checked={theme === false}
            onChange={() => changeTheme(!theme)}
            checkedChildren="Dark"
            unCheckedChildren="Light"
            className="themeButton"
          />
          <div className="logo" />
          <Menu className="sideMenu" theme={theme === true ? "light" : "dark"}>
            {_.map(MenuList, (item, index) => (
              <Menu.Item key={item.menuTitle}>
                <Link to={item.menuLink} key={index}>
                  {item.menuIcon}
                  <span
                    className={
                      theme === true ? "light-underline" : "dark-underline"
                    }
                  >
                    {item.menuTitle}
                  </span>
                </Link>
              </Menu.Item>
            ))}
            <Menu.Item
              key={
                _.isEmpty(localStorage.getItem("token")) ? "login" : "logout"
              }
              onClick={handleLogout}
            >
              <Link to="login">
                {_.isEmpty(localStorage.getItem("token")) ? (
                  <LoginOutlined />
                ) : (
                  <LogoutOutlined />
                )}
                <span
                  className={
                    theme === true ? "light-underline" : "dark-underline"
                  }
                >
                  {_.isEmpty(localStorage.getItem("token"))
                    ? "登入 / 註冊"
                    : "登出"}
                </span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
      </Col>
    </Row>
  );
}

export default SideMenu;
