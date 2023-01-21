import React from 'react';
import PostFilter from "../PostFilter/PostFilter";
import styles from "./FilterSideBar.module.css";
import Checkbox from "../UI/checkbox/Checkbox";

const FilterSideBar = ({filter, setFilter, limit, setLimit, setIsAutoLoading, isAutoLoading}) => {
    return (
        <div className={styles.filter}>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
                limit={limit}
                setLimit={setLimit}
            />
            <Checkbox
                id='autoLoading'
                onChange={() => setIsAutoLoading(!isAutoLoading)}
                title='Бесконечная лента'
            />
        </div>
    );
};

export default FilterSideBar;