//AXIOS
import axios from "axios";

//ANTDESING
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Divider } from "antd";
import { Typography } from 'antd';

//MATERIAL UI
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import EDIT from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

//REACT
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App.js";
import { Link, useNavigate, useLocation } from "react-router-dom";

//COMPONENTS
import CardClass from "../../components/ClassCard/CardClass.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";
import Collapsed from "../../components/Collapse.jsx";

//CSS
import "./ShowSection.css";

const { Header, Sider, Content } = Layout;

const App = () => {
  const { Title } = Typography;
  const { user, setUser } = useContext(UserContext);
  const [section_details, setSection_details] = useState([]);
  const [sections, setSections] = useState([]);
  const [classes, setClasses] = useState([]);
  const [classes_sider, setClasses_sider] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  console.log("LOCATION DOS", location.state )
  let { class_id, section_id } = location.state;

    //CLASSES
    useEffect(() => {
      axios
        .get("http://localhost:4000/API/Classes/Get", {
          headers: {
            Authorization: "Token " + user.token,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setTimeout(setClasses(response.data), 5000);
          console.log("CLASSES", classes);
          const classes_sider = response.data.map((data) => {
            return {
              key: data.ClassId,
              icon: <BookOutlined />,
              label: data.ClassName,
              onClick: () => navigate("/Students/Home/Class/" + data.ClassId.toString(), 
              {
                state: {
                  class_id: data.ClassId,
                  class_name: data.ClassName,
                  teacher_name: data.TeacherName,
                  description: data.Description,
                }
              })
            };
          });
          setTimeout(setClasses_sider(classes_sider), 5000);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => console.log("Clasess_Slider", classes_sider));
    }, []);

  //SECTION DETAILS
  useEffect(() => {

    axios
      .get("http://localhost:4000/API/Class/" + class_id + "/Section/" + section_id, {
        headers: {
          Authorization: "Token " + user.token,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setTimeout(setSection_details(response.data), 5000);
        
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(()=>{console.log("SECTION DETAILS", section_details)});
  }, [section_details]);
  

  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={classes_sider}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: "0 24px",
            background: colorBgContainer,
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
            )}
            <p>SECCION X</p>

            <NavBar></NavBar>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "100vh",
            background: colorBgContainer,
            overflow: "hidden",
            display:"flex",
            gap: 10

          }}
        >

          <div>
            <div style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems: "flex-start",
          }}>
              <Title level={3}>{section_details.Section[0].Name + ": " + section_details.Section[0].Title }</Title>
              <div>{section_details.Section[0].EndDate}</div>
            </div>
          
          <Divider />
          <p>{section_details.Section[0].Description}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores aliquam eius, quasi accusantium quas excepturi harum neque sint sed? Nulla minima atque dolores illum? Quia labore et voluptatibus expedita ullam.</p>
          
          <Divider />
          Documents print here
          </div>

          <div style={{
            width: "40%",
            height: "100%",
            backgroundColor: "gray",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <p>//TODO Componente de Brandon</p>
          </div>
          

        </Content>
      </Layout>
    </Layout>
  );
};
export default App;

