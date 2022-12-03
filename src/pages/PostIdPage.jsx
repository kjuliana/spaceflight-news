import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

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
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(postId);
        fetchComments(postId);
    }, [])

    return (
        <div>
            <h1>Страница поста номер {postId}</h1>
            {
                isLoading
                    ? <Loader/>
                    : <div>{post.id}. {post.title}</div>
            }
            <h2>Комментарии</h2>
            {isComLoading
                ? <Loader/>
                : <div>{comments.map(comm =>
                    <div style={{marginTop: '15px'}}>
                        <h5>{comm.email} </h5>
                        <p> {comm.body} </p>
                    </div>
                )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;