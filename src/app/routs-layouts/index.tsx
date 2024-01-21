// react-router-dom
import { Outlet } from "react-router-dom";
// antd
import { Layout } from "antd";
// components
import { Header } from "../../enteties/ui/main/header";
// scss
import index from "./index.module.scss";

const { Content, Footer } = Layout;

export const Layouts: React.FC = () => {
  return (
    <Layout className={index.root}>
      <Header />
      <Content style={{ padding: "0 48px" }}>
        <div className={index.content}>
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
