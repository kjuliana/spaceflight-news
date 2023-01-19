import React from 'react';
import {getPagesArray} from "../../../utils/page";
import styles from './Pagination.module.css';

const Pagination = ({totalPages, page, changePage}) => {
    const pagesArray = getPagesArray(totalPages);
    return (
        <div className={styles.root}>
            {pagesArray.map((p) =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ?  styles.page + ' ' + styles.page__current : styles.page}
                >
                    {p}
                </span>
            )}
        </div>
    );
};

export default Pagination;