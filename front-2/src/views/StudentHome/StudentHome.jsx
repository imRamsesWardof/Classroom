
import './StudentHome.css'
import CardClass from '../../components/ClassCard/CardClass.jsx'
import NavBar from '../../components/NavBar/NavBar.jsx'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState, useEffect, useContext } from "react";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { Divider } from "antd";
import Collapsed from "../../components/Collapse.jsx";
import { UserContext } from "../../App.js";
import axios from "axios";

const { Header, Sider, Content } = Layout;

const App = () => {
  const { user, setUser } = useContext(UserContext);
  const [rows, setRows] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/API/Class/9f55be9f-5ee1-4ae8-aabd-185850577ea5", {
          headers: {
            Authorization: "Token " + user.token,
            "Content-Type": "application/json",
          },
        });

        const newArray = await response.data.slice();
        setRows(newArray)
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchData()
  }, []);

      function HandleSections(){
        console.log('rows',rows)

        rows.map((element) => {
          return(
            <Collapsed 
            Id={element.Id }
            Name={element.Name}
            Description={element.Description}
            StartDate={element.StartDate}
            EndDate={element.EndDate}
            Title={element.Title}
            />
          )
        })

      }
    



  

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

          <div className='student-home__my-classes'><p className='my-class__p'>Mis Clases</p></div>
                <div className='student-home__cards'>
                  <CardClass id="1" name="Españo" teacher_name="Juan Ramses Meza Martinez" description="lorem sadf"/>
                  <CardClass id="2"name="Españo" teacher_name="Juan Ramses Meza Martinez" description="lorem sadf"/>
                  <CardClass id="3"name="Españo" teacher_name="Juan Ramses Meza Martinez" description="lorem sadf"/>
                  <CardClass id="4"name="Españo" teacher_name="Juan Ramses Meza Martinez" description="lorem sadf"/>
                  <CardClass id="5" name="Españo" teacher_name="Juan Ramses Meza Martinez" description="lorem sadf"/>
                  
                </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;