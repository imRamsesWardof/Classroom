import React from "react";
import EDIT from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { Collapse} from "antd";
import { useNavigate } from "react-router-dom";

const { Panel } = Collapse;

function Collapsed(props) {
  const navigate = useNavigate();

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
          Fecha de entrega: {props.EndDate}
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
          <Link
            style={{
              display: "flex",
              alignItems: "flex-end",
            }}
            to="/login"
          >
            Ver más
          </Link>
        </div>
      </Panel>
    </Collapse>
  );
}

export default Collapsed;
