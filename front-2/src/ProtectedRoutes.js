import * as React from "react";
import { useContext } from "react";
import { UserContext } from "./App";
import { Outlet } from "react-router-dom";
import NoAuth from "./NoAuthorized";

export default function ProtectedRoutes(props) {
    //En props viene el rol que acepta en esta ruta
 
    const { user } = useContext(UserContext);
    console.log(user); console.log(props);
    return (
        (user.role === props.role) ? <Outlet/> : <NoAuth/>
    )
    }