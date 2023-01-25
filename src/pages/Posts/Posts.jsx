import React, {useEffect, useRef, useState} from 'react';
import ArticleService from "../../API/ArticleService";
import {useFetching} from "../../hooks/useFetching";
import {getPagesCount} from "../../utils/page";
import {useObserver} from "../../hooks/useObserver";
import styles from './Posts.module.css';
import SearchAndButton from "../../components/SearchAndButton/SearchAndButton";
import Content from "../../components/Content/Content";
import FilterSideBar from "../../components/Filter/FilterSideBar";
import SideBar from "../../components/SideBar/SideBar";

function Posts({service}) {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: 'publishedAt:desc', query: ''});
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const [isAutoLoading, setIsAutoLoading] = useState(false);
    const lastElement = useRef();
    const [hiddenContent, setHiddenContent] = useState(false);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page, isAutoLoading, sort, search) => {
        const response = await service.getPage(limit, page, sort, search);
        const responseCount = await service.getCount(search);
        if (isAutoLoading) {
            setPosts([...posts, ...response.data]);
        } else {
            setPosts(response.data);
        }
        setTotalPages(getPagesCount(responseCount, limit));
    });

    useObserver(lastElement, page <= totalPages,isAutoLoading && !isPostsLoading, () => {
            setPage(page + 1);
    });

    useEffect(() => {
        fetchPosts(limit, page, isAutoLoading, filter.sort, filter.query);
    }, [page, limit, filter, service])

    const createPost = (newPost) => {
        setPosts([newPost, ...posts]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <>
            <div className={styles.mainContent}>
                <SearchAndButton
                    searchQuery={filter.query}
                    onSearchQueryChange={query => setFilter({...filter, query})}
                    createPost={createPost}
                    onBurgerClick={() => setHiddenContent(!hiddenContent)}
                />
                {!hiddenContent && (
                    <Content
                        posts={posts}
                        error={postError}
                        removePost={removePost}
                        lastElement={lastElement}
                        isAutoLoading={isAutoLoading}
                        page={page}
                        setPage={setPage}
                        totalPages={totalPages}
                        isPostsLoading={isPostsLoading}
                    />
                )}
            </div>
            <SideBar>
                <FilterSideBar
                    filter={filter}
                    setFilter={setFilter}
                    limit={limit}
                    setLimit={setLimit}
                    isAutoLoading={isAutoLoading}
                    setIsAutoLoading={setIsAutoLoading}
                />
            </SideBar>
        </>
    );
}

export default Posts;
