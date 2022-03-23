import React from "react";
import { Layout } from "antd";
import Footer from "./Footer";

const { Content } = Layout;

const LayoutWithLogin = ({ children }) => {
  return (
    <Layout>
      <div>123</div>
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
};

export default LayoutWithLogin;
