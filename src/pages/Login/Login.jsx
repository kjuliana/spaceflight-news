import React, {useContext} from 'react';
import MyInput from "../../components/UI/MyInput/MyInput";
import MyButton from "../../components/UI/MyButton/MyButton";
import {AuthContext} from "../../context";
import styles from './Login.module.css';
import InputLabel from "../../components/UI/InputLabel/InputLabel";
import SideBar from "../../components/SideBar/SideBar";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div className={styles.root}>
            <h1>Sign in</h1>
            <form className={styles.form} onSubmit={login}>
                <InputLabel label={'login'}>
                    <MyInput type='text' placeholder='Введите логин' defaultValue='demo'/>
                </InputLabel>
                <InputLabel label={'password'}>
                    <MyInput type='password' placeholder='Введите пароль' defaultValue='demo'/>
                </InputLabel>
                <MyButton>Sign in</MyButton>
            </form>
        </div>
    );
};

export default Login;