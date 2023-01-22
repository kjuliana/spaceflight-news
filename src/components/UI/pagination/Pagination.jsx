import React from 'react';
import {getPagesArray} from "../../../utils/page";
import styles from './Pagination.module.css';

const Pagination = ({totalPages, page, changePage}) => {
    const pagesArray = getPagesArray(page, totalPages);
    return (
        <div className={styles.root}>
            <span
                onClick={() => changePage(1)}
                key={1}
                className={page === 1 ?  styles.page + ' ' + styles.page__current : styles.page}
            >
                {1}
            </span>
            {(page > 7) &&
                <p className={styles.page}>🚀</p>
            }
            {pagesArray.map((p) =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ?  styles.page + ' ' + styles.page__current : styles.page}
                >
                    {p}
                </span>
            )}
            {(page < totalPages - 5) &&
                <p className={styles.page}>🚀</p>
            }
            <span
                onClick={() => changePage(totalPages)}
                key={totalPages}
                className={page === totalPages ?  styles.page + ' ' + styles.page__current : styles.page}
            >
                {totalPages}
            </span>
        </div>
    );
};

export default Pagination;