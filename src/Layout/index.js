import React from "react";

import { Layout } from "antd";

import SideMenu from "./SideMenu";
import Footer from "./Footer";

const { Content } = Layout;

const LayoutWithRoute = ({ children }) => {
  return (
    <Layout>
      <SideMenu />
      <Layout>
        <Content>{children}</Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default LayoutWithRoute;
