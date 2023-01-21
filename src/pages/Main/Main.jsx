import React from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "../../components/UI/Navbar/Navbar";
import SideBar from "../../components/SideBar/SideBar";

const Main = () => {
    return (
        <>
            <SideBar>
                <Navbar/>
            </SideBar>
            <Outlet/>
        </>
    );
};

export default Main;