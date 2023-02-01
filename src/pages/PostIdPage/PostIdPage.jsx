import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import Loader from "../../components/UI/Loader/Loader";
import styles from './PostIdPage.module.css';

const PostIdPage = ({service}) => {
    const {postId} = useParams();
    const [post, setPost] = useState({});

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await service.getById(id);
        setPost(response.data);
    });

    useEffect(() => {
        fetchPostById(postId);
    }, [])

    const date = new Date(post.publishedAt);
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };

    return (
        <>
            {
                isLoading
                    ? <Loader/>
                    : <div className={styles.root}>
                        <div className={styles.content}>
                            <h1>{post.title}</h1>
                            <p>{post.summary}</p>
                            <img className={styles.image} src={post.imageUrl}/>
                        </div>
                        <div className={styles.info}>
                            <span><strong>@{post.newsSite}</strong></span>
                            <span className={styles.date}>{date.toLocaleString("ru", options)} </span>
                        </div>
                    </div>
            }
        </>
    );
};

export default PostIdPage;