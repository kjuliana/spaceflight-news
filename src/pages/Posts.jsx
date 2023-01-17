import React, {useEffect, useRef, useState} from 'react';
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import Loader from "../components/UI/Loader/Loader";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import {getPagesCount} from "../utils/page";
import Pagination from "../components/UI/pagination/Pagination";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";
import MyInput from "../components/UI/input/MyInput";

function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
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
            console.log('intersect');
            setPage(page + 1);
    });

    useEffect(() => {
        fetchPosts(limit, page, isAutoLoading);
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([newPost, ...posts]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const changePage = (page) => {
        setPage(page);
    }

    return (
        <>
            <div className="App">
                <MyModal visible={modal} setVisible={setModal}>
                    <PostForm create={createPost}/>
                </MyModal>
                <div className="main-content">
                    <div className='main-content_search'>
                        <MyInput
                            value={filter.query}
                            onChange={e => setFilter({...filter, query: e.target.value})}
                            placeholder='Поиск...'
                        />
                        <MyButton onClick={() => setModal(true)} >
                            Создать пост
                        </MyButton>
                    </div>
                    {postError &&
                    <h1>Произошла ошибка ${postError}</h1>
                    }
                    <PostList posts={sortedAndSearchedPosts} remove={removePost}/>
                    <div ref={lastElement} style={{height: 1}}/>
                    { !isAutoLoading &&
                    <Pagination
                        changePage={changePage}
                        page={page}
                        totalPages={totalPages}
                    />
                    }

                    { isPostsLoading &&
                    <div style={{display:"flex", justifyContent: 'center', marginTop: 50}}><Loader/></div>
                    }
                </div>
            </div>
            <div className="filter-content side-bar">
                <PostFilter
                    filter={filter}
                    setFilter={setFilter}
                    limit={limit}
                    setLimit={setLimit}
                />
                <div className="option-checkbox">
                    <label htmlFor='autoLoading'>Бесконечная лента</label>
                    <input type='checkbox' id='autoLoading' onChange={() => setIsAutoLoading(!isAutoLoading)}/>
                </div>
            </div>
        </>
    );
}

export default Posts;
