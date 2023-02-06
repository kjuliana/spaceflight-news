import React from 'react';
import styles from './Burger.module.css';

const Burger = ({onClick, isMenu}) => {

    let classRoot = styles.root;
    let classSpan = styles.span;
    if (isMenu) {
        classRoot = classRoot + ' '+ styles.active;
        classSpan = classSpan + ' ' + styles.active;
    }

    return (
        <button onClick={onClick} className={classRoot}>
            <span className={classSpan}/>
        </button>
    );
};

export default Burger;