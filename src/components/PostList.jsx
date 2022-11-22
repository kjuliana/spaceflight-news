import React from 'react';
import {useState} from "react";
import PostItem from "./PostItem";

const PostList = ({posts, title, remove} ) => {
    return (
        <div className="App">
            <h1 style={{textAlign: "center"}}>
                {title}
            </h1>
            {posts.map((post, index) =>
                <PostItem remove={remove} number={index + 1} key = {post.id} post = {post}/>
            )}
        </div>
    );
};

export default PostList;