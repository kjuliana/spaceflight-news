import React from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "../../components/UI/Navbar/Navbar";

const Main = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
};

export default Main;