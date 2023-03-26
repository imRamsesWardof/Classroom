import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState, useEffect, useContext } from "react";
import "./StudentClass.css";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { Divider } from "antd";
import Collapsed from "../../components/Collapse.jsx";
import { GetClasses } from "../../services/class.services";

const App = () => {
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const [section, setSection] = useState([]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    const data = GetClasses();
    setSection(data)
    console.log('SECTION:', section)
  }, []);

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

          <p>Current Classs</p>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "100vh",
            background: colorBgContainer,
            overflow: "hidden",
          }}
        >
          <div class="content-wrapper-header">
            <div class="content-wrapper-context">
              <h3 class="img-content">
                <Avatar sx={{ bgcolor: deepOrange[500] }}>Es</Avatar>
                Current Class
              </h3>
              <div class="content-text">
                Grab yourself 10 free images from Adobe Stock in a 30-day free
                trial plan and find perfect image, that will help you with your
                new project.
              </div>
              <p class="content-p">Por Juan Ramse Meza Martinez</p>
            </div>
          </div>

          <Divider orientation="center">Tareas</Divider>

          {data.map((element) => {
            return (
              <Collapsed
                Id={element.Id}
                Name={element.Name}
                Description={element.Description}
                StartDate={element.StartDate}
                EndDate={element.EndDate}
                Title={element.Title}
              />
            );
          })}
          <Collapsed />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
