import React from 'react';
import styles from './Burger.module.css';

const Burger = ({hiddenContent, setHiddenContent}) => {
    return (
        <button onClick={() => {setHiddenContent(!hiddenContent)}} className={styles.root}>
            <span className={styles.span}/>
        </button>
    );
};

export default Burger;