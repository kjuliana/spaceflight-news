import React from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "../UI/Navbar/Navbar";
import SideBar from "../SideBar/SideBar";

const Layout = () => {
    return (
        <>
            <SideBar>
                <Navbar/>
            </SideBar>
            <Outlet/>
        </>
    );
};

export default Layout;