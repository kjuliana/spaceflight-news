import React from 'react';
import styles from "../../FilterSideBar/FilterSideBar.module.css";

const Checkbox = () => {
    return (
        <div>
            <input className={styles.checkbox} type='checkbox' id='autoLoading' onChange={() => setIsAutoLoading(!isAutoLoading)}/>
            <label className={styles.checkboxLabel} htmlFor='autoLoading'>Бесконечная лента</label>
        </div>
    );
};

export default Checkbox;