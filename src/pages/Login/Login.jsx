import React, {useContext} from 'react';
import MyInput from "../../components/UI/MyInput/MyInput";
import MyButton from "../../components/UI/MyButton/MyButton";
import {AuthContext} from "../../context";
import styles from './Login.module.css';
import InputLabel from "../../components/UI/InputLabel/InputLabel";

const Login = () => {
    const {setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div className={styles.root}>
            <h1>Sign in</h1>
            <form className={styles.form} onSubmit={login} autoComplete='off'>
                <InputLabel label={'login'}>
                    <MyInput type='text' placeholder='Введите логин' defaultValue='demo'/>
                </InputLabel>
                <InputLabel label={'password'}>
                    <MyInput id="sdjfg" name='987' autoComplete='off' readOnly type='password' placeholder='Введите пароль' defaultValue='demo0.;demo!23hgdh'/>
                </InputLabel>
                <MyButton>Sign in</MyButton>
            </form>
        </div>
    );
};

export default Login;