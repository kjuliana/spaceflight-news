import React from 'react';
import styles from './Burger.module.css';

const Burger = () => {
    return (
        <button className={styles.root}>
            <span className={styles.span}/>
        </button>
    );
};

export default Burger;