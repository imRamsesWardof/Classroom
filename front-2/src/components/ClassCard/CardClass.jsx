import React from "react";
import "./CardClass.css";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from '@mui/material/Tooltip';
import { Folder, Group } from "@mui/icons-material";


function CardClass() {
  return (
    <div className="card-class">
      <div className="card">
        <div className="card-header">
          <Avatar sx={{ bgcolor: deepOrange[500] }}>Es</Avatar>
          <div className="card-header__group">
            <label className="card-header__title-class">Español</label>
            <h4 className="card-header__teacher-name">
              Juan Ramses Meza Martínez
            </h4>
          </div>
        </div>
        <div className="card-body">
          <p className="card-header__description">
            ebitis. Voluptates harum odio incidunt, suscipit molestias, numquam
            voluptatum eveniet debitis deleniti accusamus at quasi quisquam
            minus possimus illum? Optio. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Tenetur officiis consequuntur optio assumenda
            dicta molestiae sint illo consequatur animi fugit excepturi
            voluptatibus nihil, non alias iste deleniti, temporibus,
            perspiciatis possimus?
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
            onClick={() => {
              window.location.href =
                "http://localhost:3000/Admin/Classes/Edit/" + "Class_Id";
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
