import React from 'react';
import styles from './Burger.module.css';

const Burger = ({onClick}) => {
    return (
        <button onClick={onClick} className={styles.root}>
            <span className={styles.span}/>
        </button>
    );
};

export default Burger;