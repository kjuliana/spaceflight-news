import React, {useState} from 'react';
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";
import styles from './PostForm.module.css';
import InputLabel from "../UI/InputLabel/InputLabel";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', summary: '', newsSite: ''})

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now(), publishedAt: Date.now(), imageUrl: '../../assets/lonely-dog.jpeg'
        };
        create(newPost);
        setPost({title: '', summary: '', newsSite: ''});
    }

    return (
        <form className={styles.root}>
            <InputLabel label='News Site'>
                <MyInput
                    value={post.body}
                    onChange={e => setPost({...post, newsSite: e.target.value})}
                    type='text'
                    placeholder='News Site'
                />
            </InputLabel>
            <InputLabel label='Title'>
                <MyInput
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    type='text'
                    placeholder='Title'
                />
            </InputLabel>
            <InputLabel label='Summary'>
                <MyInput
                    value={post.body}
                    onChange={e => setPost({...post, summary: e.target.value})}
                    type='text'
                    placeholder='Summary'
                />
            </InputLabel>
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    );
};

export default PostForm;