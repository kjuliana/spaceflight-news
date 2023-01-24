import React, {useContext} from 'react';
import {Link} from "react-router-dom";
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
                <Link className={styles.item} to="/">Main</Link>
                <Link className={styles.item} to="/about">About</Link>
                <Link className={styles.item} to="/posts">News</Link>
                <button className={styles.item} onClick={logout}>
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default Navbar;