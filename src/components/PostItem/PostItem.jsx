import React from "react";
import {Link} from "react-router-dom";
import styles from "./PostItem.module.css";

const PostItem = (props) => {
    const date = new Date(props.post.publishedAt);
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };

    return (
        <div className={styles.root}>
            <Link to={"/"+props.type+"/"+props.post.id}>
                <div className={styles.info}>
                    <span><strong>@{props.post.newsSite}</strong></span>
                    <span className={styles.date}>{date.toLocaleString("ru", options)} </span>
                </div>

                <h2>{props.post.title}</h2>
                <div>
                    {props.post.summary}
                </div>
                <img className={styles.image} src={props.post.imageUrl}/>
            </Link>
        </div>

    )
}

export default PostItem;