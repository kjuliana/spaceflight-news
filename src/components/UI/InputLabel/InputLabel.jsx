import React from 'react';
import styles from './InputLabel.module.css';

const InputLabel = ({label, children}) => {
    return (
        <div className={styles.root}>
            <div>
                {label}
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default InputLabel;