import React from 'react';
import styles from "./Checkbox.module.css";

const Checkbox = ({id, onChange, title}) => {
    return (
        <div className={styles.checkboxWrapper}>
            <input
                className={styles.checkbox}
                type='checkbox'
                id={id}
                onChange={onChange}
            />
            <label
                className={styles.checkboxLabel}
                htmlFor={id}
            >
                {title}
            </label>
        </div>
    );
};

export default Checkbox;