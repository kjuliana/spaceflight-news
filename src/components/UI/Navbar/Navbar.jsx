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
                <Link className={styles.item} to="/news">🚀 News</Link>
                <Link className={styles.item} to="/blog">🌍 Blog</Link>
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