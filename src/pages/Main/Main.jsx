import React, {useContext} from 'react';
import styles from './Main.module.css';
import Login from "../../components/Login/Login";
import {AuthContext} from "../../context";
import cosmonauts from "../../asset/cosmonauts.jpeg"

const Main = () => {
    const {isAuth} = useContext(AuthContext);

    return (
        <div className={styles.root}>
            <h1>SpaceFlight News</h1>
            <h2>Get an overview of the latest Spaceflight news, from various sources!</h2>
            {isAuth
                ? <div className={styles.isAuthWrapper}>
                    <img className={styles.image} src={cosmonauts}/>
                </div>
                : <div className={styles.isNotAuthWrapper}>
                    <Login/>
                </div>
            }
        </div>
    );
};

export default Main;