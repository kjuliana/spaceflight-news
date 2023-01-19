import React from "react";
import MyButton from "../UI/button/MyButton";
import {Link} from "react-router-dom";
import styles from "./PostItem.module.css";

const PostItem = (props) => {
    return (
        <div className={styles.root}>
            <Link to={"/posts/"+props.post.id}>
                <strong>{props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </Link>
            <MyButton onClick={() => props.remove(props.post)}>
                🗑
            </MyButton>
        </div>

    )
}

export default PostItem;