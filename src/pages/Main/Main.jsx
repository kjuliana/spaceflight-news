import React, {useContext} from 'react';
import styles from './Main.module.css';
import Login from "../../components/Login/Login";
import {AuthContext} from "../../context";

const Main = () => {
    const {isAuth} = useContext(AuthContext);

    return (
        <div className={styles.root}>
            <h1>SpaceFlight News</h1>
            <h2>Get an overview of the latest Spaceflight news, from various sources!</h2>
            {isAuth
                ? <div className={styles.conteiner}>
                    <img className={styles.image} src='../../asset/cosmonauts.jpeg'/>
                </div>
                : <div className={styles.conteinerLogin}>
                    <Login/>
                </div>
            }
        </div>
    );
};

export default Main;