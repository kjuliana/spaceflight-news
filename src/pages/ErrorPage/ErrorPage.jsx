import React from 'react';
import { useRouteError } from "react-router-dom";
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className={styles.root}>
            <h1>Ошибочка вышла!🙉</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;