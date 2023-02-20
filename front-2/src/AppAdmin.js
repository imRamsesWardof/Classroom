import './styles/App.css';
import React from 'react';
import { Outlet} from "react-router-dom";
class AppAdmin extends React.Component {
  render(){
    return (<>
        <Outlet/>
        </>
    );
  }
  
}

export default AppAdmin;
