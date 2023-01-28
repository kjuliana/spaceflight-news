import React, {useContext, useEffect, useRef, useState} from 'react';
import {useFetching} from "../../hooks/useFetching";
import {getPagesCount} from "../../utils/page";
import {useObserver} from "../../hooks/useObserver";
import styles from './Posts.module.css';
import SearchAndButton from "../../components/SearchAndButton/SearchAndButton";
import Content from "../../components/Content/Content";
import FilterSideBar from "../../components/Filter/FilterSideBar";
import SideBar from "../../components/SideBar/SideBar";
import AddPostButton from "../../components/AddPostButton/AddPostButton";
import {AuthContext} from "../../context";
import SearchInput from "../../components/UI/SearchInput/SearchInput";

function Posts({service}) {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: 'publishedAt:desc', query: ''});
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const [isAutoLoading, setIsAutoLoading] = useState(false);
    const lastElement = useRef();
    const {isMobile} = useContext(AuthContext);

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
    }, [page, limit, filter, setFilter]);

    useEffect(() => {
        setIsAutoLoading(isMobile)
    }, [isMobile])

    const createPost = (newPost) => {
        setPosts([newPost, ...posts]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <>
            <div className={styles.mainContent}>
                { !isMobile &&
                    <SearchAndButton>
                        <SearchInput
                            query={filter.query}
                            type='search'
                            onChange={query => setFilter({...filter, query: query})}
                            placeholder='Search...'
                        />
                        <AddPostButton createPost={createPost}/>
                    </SearchAndButton>
                }
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

            </div>
            {!isMobile &&
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
            }
        </>
    );
}

export default Posts;
