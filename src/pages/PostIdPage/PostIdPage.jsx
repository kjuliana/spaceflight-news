import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../API/PostService";
import Loader from "../../components/UI/Loader/Loader";
import styles from './PostIdPage.module.css'

const PostIdPage = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data.comments);
    });

    useEffect(() => {
        fetchPostById(postId);
        fetchComments(postId);
    }, [])

    return (
        <>
            {
                isLoading
                    ? <Loader/>
                    : <div className={styles.root}>
                        <div className={styles.content}>
                            <h1>{post.id}. {post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                        <div className={styles.comments}>
                            <h3>Комментарии</h3>
                            {isComLoading
                                ? <Loader/>
                                : <div>{comments.map(comm =>
                                    <div className={styles.comment} key={comm.id}>
                                        <h5>@{comm.user.username} </h5>
                                        <p> {comm.body} </p>
                                    </div>
                                )}
                                </div>
                            }
                        </div>
                    </div>
            }
        </>
    );
};

export default PostIdPage;