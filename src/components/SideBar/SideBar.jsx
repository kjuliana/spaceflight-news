import React from 'react';
import styles from './SideBar.module.css';

const SideBar = ({children}) => {
    return (
        <div className={styles.root}>
            {children}
        </div>
    );
};

export default SideBar;