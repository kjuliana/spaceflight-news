import React from 'react';
import styles from './InputLabel.module.css';

const InputLabel = ({label, children}) => {
    return (
        <div className={styles.root}>
            <div className={styles.labelWrapper}>
                {label}
            </div>
            <div className={styles.inputWrapper}>
                {children}
            </div>
        </div>
    );
};

export default InputLabel;