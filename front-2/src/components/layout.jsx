import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import "./layout.css";
import { Avatar } from '@mui/material'
import { deepOrange } from "@mui/material/colors";
const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        Clases
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: "0 24px",
            background: colorBgContainer,
            fontSize: 14,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}

        <p></p>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "100vh",
            background: colorBgContainer,
            overflow:"hidden",
          }}
        >
          <div class="content-wrapper-header">
            <div class="content-wrapper-context">
              <h3 class="img-content">
                <Avatar sx={{ bgcolor: deepOrange[500] }}>Es</Avatar>
                Adobe Stock
              </h3>
              <div class="content-text">
                Grab yourself 10 free images from Adobe Stock in a 30-day free
                trial plan and find perfect image, that will help you with your
                new project.
              </div>
              <button class="content-button">Start free trial</button>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
