import React from 'react';
import PostItem from "../PostItem/PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import styles from '../PostItem/PostItem.module.css';
import styless from './PostList.module.css'

const PostList = ({posts, remove}) => {
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены
            </h1>
        )
    }
    return (
        <div className={styless.root}>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames={styles}
                    >
                        <PostItem remove={remove} number={index + 1} post={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;