import React, {useEffect, useRef, useState} from 'react';
import PostList from "../../components/PostList/PostList";
import MyButton from "../../components/UI/button/MyButton";
import PostForm from "../../components/PostForm/PostForm";
import PostFilter from "../../components/PostFilter/PostFilter";
import MyModal from "../../components/UI/MyModal/MyModal";
import Loader from "../../components/UI/Loader/Loader";
import {usePosts} from "../../hooks/usePosts";
import PostService from "../../API/PostService";
import {useFetching} from "../../hooks/useFetching";
import {getPagesCount} from "../../utils/page";
import Pagination from "../../components/UI/pagination/Pagination";
import {useObserver} from "../../hooks/useObserver";
import MyInput from "../../components/UI/input/MyInput";
import styles from './Posts.module.css';
import AddPostButton from "../../components/AddPostButton/AddPostButton";
import SearchAndButton from "../../components/SearchAndButton/SearchAndButton";
import Content from "../../components/Content/Content";
import FilterSideBar from "../../components/FilterSideBar/FilterSideBar";

function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: 'default', query: ''});
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const [isAutoLoading, setIsAutoLoading] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef();

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page, isAutoLoading) => {
        const response = await PostService.getAll(limit, page);
        if (isAutoLoading) {
            setPosts([...posts, ...response.data.posts]);
        } else {
            setPosts(response.data.posts);
        }
        const totalCount = response.data.total;
        setTotalPages(getPagesCount(totalCount, limit));
    });


    useObserver(lastElement, page <= totalPages,isAutoLoading && !isPostsLoading, () => {
            setPage(page + 1);
    });

    useEffect(() => {
        fetchPosts(limit, page, isAutoLoading);
    }, [page, limit])

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
                    filter={filter}
                    setFilter={setFilter}
                    createPost={createPost}
                />
                <Content
                    sortedAndSearchedPosts={sortedAndSearchedPosts}
                    postError={postError}
                    removePost={removePost}
                    lastElement={lastElement}
                    isAutoLoading={isAutoLoading}
                    page={page}
                    setPage={setPage}
                    totalPages={totalPages}
                    isPostsLoading={isPostsLoading}
                />
            </div>
            <FilterSideBar
                filter={filter}
                setFilter={setFilter}
                limit={limit}
                setLimit={setLimit}
                isAutoLoading={isAutoLoading}
                setIsAutoLoading={setIsAutoLoading}
            />
        </>
    );
}

export default Posts;
