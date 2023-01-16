import React from 'react';
import classes from './MyRadio.module.css'

const MyRadio = ({options, defaultValue, value, onChange}) => {
    return (
        <div className={classes.block}>
                <p className={classes.name}>{defaultValue}</p>
                {options.map(option =>
                    <div className={classes.option}>
                        <label htmlFor={option.value}> {option.name} </label>
                        <input type='radio'
                               className={classes.radio}
                               name={defaultValue}
                               value={option.value}
                               id={option.value}
                               onChange={(e) => onChange(e.target.value)}
                               checked={String(value) === String(option.value)}
                        />
                     </div>
                )}
        </div>
    );
};

export default MyRadio;