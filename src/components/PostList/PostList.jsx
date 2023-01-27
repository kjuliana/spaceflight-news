import React from 'react';
import PostItem from "../PostItem/PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import itemStyles from '../PostItem/PostItem.module.css';
import styles from './PostList.module.css'

const PostList = ({posts, remove}) => {
    console.log(posts)
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены
            </h1>
        )
    }
    return (
        <div className={styles.root}>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames={itemStyles}
                    >
                        <PostItem remove={remove} number={index + 1} post={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;