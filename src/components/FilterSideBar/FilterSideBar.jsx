import React from 'react';
import PostFilter from "../PostFilter/PostFilter";
import styles from "./FilterSideBar.module.css";

const FilterSideBar = ({filter, setFilter, limit, setLimit, setIsAutoLoading, isAutoLoading}) => {
    return (
        <div className={styles.filter + " sidebar"}>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
                limit={limit}
                setLimit={setLimit}
            />
            <div className={styles.checkboxWrapper}>
                <input className={styles.checkbox} type='checkbox' id='autoLoading' onChange={() => setIsAutoLoading(!isAutoLoading)}/>
                <label className={styles.checkboxLabel} htmlFor='autoLoading'>Бесконечная лента</label>
            </div>
        </div>
    );
};

export default FilterSideBar;