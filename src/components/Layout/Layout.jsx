import React, {useContext} from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "../UI/Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
import {AuthContext} from "../../context";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Layout = () => {
    const {isMobile} = useContext(AuthContext);
    return (
        <>
            {!isMobile
                    ? <SideBar>
                        <Navbar/>
                    </SideBar>
                    : <BurgerMenu/>
            }
            <Outlet/>
        </>
    );
};

export default Layout;