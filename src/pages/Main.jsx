import React, {useContext, useState} from 'react';
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/UI/Navbar/Navbar";
import {AuthContext} from "../context";

const Main = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    console.log(isAuth);
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
};

export default Main;