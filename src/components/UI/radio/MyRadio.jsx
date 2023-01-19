import React from 'react';
import styles from './MyRadio.module.css'

const MyRadio = ({options, defaultValue, value, onChange}) => {
    return (
        <div className={styles.root}>
                <p className={styles.name}>{defaultValue}</p>
                {options.map(option =>
                    <div className={styles.option} key={option.value}>
                        <input type='radio'
                               className={styles.radio}
                               name={defaultValue}
                               value={option.value}
                               id={option.value}
                               onChange={(e) => {
                                   onChange(e.target.value)
                               }}
                               checked={String(value) === String(option.value)}
                        />
                        <label className={styles.label} htmlFor={option.value}> {option.name} </label>
                     </div>
                )}
        </div>
    );
};

export default MyRadio;