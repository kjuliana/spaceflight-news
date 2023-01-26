import React from 'react';
import styles from './SearchAndButton.module.css';

const SearchAndButton = ({children}) => {
    return (
        <div className={styles.root}>
            {children}
        </div>
    );
};

export default SearchAndButton;