import React from "react";
import MyButton from "./UI/button/MyButton";
import {Link, useNavigate} from "react-router-dom";

const PostItem = (props) => {
    const navigate = useNavigate();

    return (
        <div className='post'>
            <Link to={"/posts/"+props.post.id} className='post__content'>
                <strong>{props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </Link>
            <div className='post__btns'>
                <MyButton onClick={() => props.remove(props.post)}>
                    🗑
                </MyButton>
            </div>
        </div>
    )
}

export default PostItem;