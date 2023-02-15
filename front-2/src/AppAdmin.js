import './styles/App.css';
import React from 'react';
import { Outlet, Link, Routes, Route} from "react-router-dom";
class AppAdmin extends React.Component {
  render(){
    console.log(this.props.actualCrud)
    return (<><div>      
        {}
      </div>
        <Outlet context={{actualCrud: this.props.actualCrud}}/>
        </>
    );
  }
  
}

export default AppAdmin;
