import React from "react";
import EDIT from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { Collapse} from "antd";
import { useNavigate } from "react-router-dom";

const { Panel } = Collapse;

function Collapsed(props) {
  const navigate = useNavigate();
  const newDate = new Date(props.EndDate).toLocaleString().split(',')[0]

  const genExtra = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          verticalAlign: "middle",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          Fecha de entrega: {newDate}
        </span>
        <IconButton sx={{}} component={Link} to="/">
          <EDIT />
        </IconButton>
      </div>
    );
  };

  return (
    <Collapse
      expandIconPosition="end"
      size="large"
      style={{
        margin: "10px 0px",
        alignItems: "center",
      }}
     
    >
      <Panel
        header={props.Name +": "+ props.Title}
        key="1"
        extra={genExtra()}
        style={{
          alignItems: "center",
        }}
      >
        <p>{props.Description}</p>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            verticalAlign: "middle",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              cursor: "pointer",
            }}
            onClick = {
              () =>{
                navigate("/Students/Home/Class/Section/" + props.Id.toString(), 
            {
              state: {
                class_id: props.ClassId,
                section_id: props.Id,
                
              }
            })
              }
            }
            
          >
            Ver más
          </div>
        </div>
      </Panel>
    </Collapse>
  );
}

export default Collapsed;
