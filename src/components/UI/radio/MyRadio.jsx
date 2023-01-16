import React from 'react';
import classes from './MyRadio.module.css'

const MyRadio = ({options, defaultValue, value, onChange, checked}) => {
    return (
        <div className={classes.block}>
                <p className={classes.name}>{defaultValue}</p>
                {options.map(option =>
                    <div>
                        <label htmlFor={option.value}> {option.name} </label>
                        <input type='radio'
                               className={classes.radio}
                               name={defaultValue}
                               value={option.value}
                               id={option.value}
                               onChange={(e) => onChange(e.target.value)}
                               // checked={checked === option.value}
                        />
                     </div>
                )}
        </div>
    );
};

export default MyRadio;