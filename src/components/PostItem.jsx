import React from "react";
import MyButton from "./UI/button/MyButton";
import {Link, useNavigate} from "react-router-dom";

const PostItem = (props) => {
    const navigate = useNavigate();

    return (
        <div className='post'>
            <div className='post__content'>
                <Link to={"/posts/"+props.post.id}>
                    <strong>{props.post.id}. {props.post.title}</strong>
                </Link>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className='post__btns'>
                <MyButton onClick={() => navigate("/posts/"+props.post.id)}>
                    Открыть
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    )
}

export default PostItem;