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
        <div className={styles.root + ' sidebar'}>
            <div className={styles.items}>
                <Link className={styles.item} to="/">Главная</Link>
                <Link className={styles.item} to="/about">О приложении</Link>
                <Link className={styles.item} to="/posts">Блог</Link>
                <button className={styles.item} onClick={logout}>
                    Выйти
                </button>
            </div>
        </div>
    );
};

export default Navbar;