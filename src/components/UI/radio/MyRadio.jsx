import React from 'react';
import styles from './MyRadio.module.css';

const MyRadio = ({options, title, value, onChange}) => {
    return (
        <div className={styles.root}>
                <p className={styles.name}>{title}</p>
                {options.map(option =>
                    <div className={styles.option} key={option.value}>
                        <input type='radio'
                               className={styles.radio}
                               name={title}
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