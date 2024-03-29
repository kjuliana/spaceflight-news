import React, {useEffect, useState} from 'react';
import PostList from "../PostList/PostList";
import styles from "./Content.module.css";
import Pagination from "../UI/Pagination/Pagination";
import Loader from "../UI/Loader/Loader";

const Content = ({posts, error, removePost, lastElement, isAutoLoading, totalPages, page, setPage, isPostsLoading}) => {
    const changePage = (page) => {
        setPage(page);
    };

    return (
        <>
            {error &&
                <h1>Произошла ошибка ${error}</h1>
            }
            <PostList posts={posts} remove={removePost}/>
            <div ref={lastElement} className={styles.lastElement}/>

            {!isAutoLoading &&
            <Pagination
                changePage={changePage}
                page={page}
                totalPages={totalPages}
            />
            }

            {isPostsLoading &&
            <div className={styles.loaderWrapper}>
                <Loader/>
            </div>
            }
        </>
    );
};

export default Content;