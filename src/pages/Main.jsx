import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Main = () => {
    return (
        <>
            <div className='navbar'>
                <div className='navbar__items'>
                    <Link to="/about">О приложении</Link>
                    <Link to="/posts">Посты</Link>
                </div>
            </div>

            <Outlet/>
        </>
    );
};

export default Main;