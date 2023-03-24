import React from "react";
import "./CardClass.css";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from '@mui/material/Tooltip';
import { Folder, Group } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom'

function CardClass(props) {

  const HandleClick = (e) =>{

    console.log(e.target)
  }
  const navigate = useNavigate()

  return (
    <div className="card-class">
      <div className="card">
        <div className="card-header">
          <Avatar sx={{ bgcolor: deepOrange[500] }}>Es</Avatar>
          <div className="card-header__group">
            <label className="card-header__title-class"> {props.name}</label>
            <h4 className="card-header__teacher-name">
              {props.teacher_name}
            </h4>
          </div>
        </div>
        <div className="card-body">
          <p className="card-header__description">
            {props.description}
          </p>
        </div>
        <div className="card-footer">
          <Stack className="card-footer__btn" direction="row" spacing={1}>
            <Tooltip title="Estudiantes">
              <IconButton color="primary" aria-label="add to shopping cart">
                <Group />
              </IconButton>
            </Tooltip>
            <Tooltip title="Tareas">
              <IconButton color="primary" aria-label="add an alarm">
                <Folder />
              </IconButton>
            </Tooltip>
          </Stack>
          <button
            className="btn"
            onClick={(e) => {
              navigate("/Students/Home/Class/" + props.id.toString())
            }}
          >
            Go
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardClass;
