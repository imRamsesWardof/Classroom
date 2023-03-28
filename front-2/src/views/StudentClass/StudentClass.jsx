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
import "./StudentClass.css";

const { Header, Sider, Content } = Layout;

const App = () => {
  const { user, setUser } = useContext(UserContext);
  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);
  const [classes_sider, setClasses_sider] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  console.log("LOCATION", location.state)
  let { class_id, class_name, teacher_name, description} = location.state;

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
  
  //SECTIOS
  useEffect(() => {
    axios
      .get("http://localhost:4000/API/Class/" + class_id, {
        headers: {
          Authorization: "Token " + user.token,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setTimeout(setSections(response.data), 5000);
        /* const classes_sider = response.data.map((data) => {
            return (
              {
                key: data.ClassId,
                icon: <BookOutlined/>,
                label: data.ClassName,
              }
            )
          })
          setTimeout(setClasses_sider(classes_sider), 5000); */
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => console.log("SECTIONS", sections));
  }, []);

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
            <p>{class_name.toUpperCase()}</p>

            <NavBar></NavBar>
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
                <Avatar sx={{ bgcolor: deepOrange[500] }}>{class_name[0].toUpperCase()}</Avatar>
                {class_name.toUpperCase()}
              </h3>
              <div class="content-text">
                {description}
              </div>
              <p class="content-p">Por {teacher_name}</p>
            </div>
          </div>

          <Divider orientation="center">Tareas</Divider>

          <div>
            {sections.length == 0 ? (
              <div>No existen secciones</div>
            ) : (
              sections.map((element) => {
                return (
                  <Collapsed
                Id={element.Id}
                Name={element.Name}
                Description={element.Description}
                StartDate={element.StartDate}
                EndDate={element.EndDate}
                Title={element.Title}
                ClassId={class_id}
              />
                );
              })
            )}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;

