import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../../context";
import styles from './Navbar.module.css';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div className={styles.root}>
            <div className={styles.items}>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? styles.activeItem : styles.item
                    }
                    to="/">
                    Main
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? styles.activeItem : styles.item
                    }
                    to="/news">
                    🚀 News
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? styles.activeItem : styles.item
                    }
                    to="/blog">
                    🌍 Blog
                </NavLink>

                {isAuth && (
                    <button className={styles.item} onClick={logout}>
                        Log Out
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;