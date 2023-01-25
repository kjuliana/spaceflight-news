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
            ...post, id: Date.now(), publishedAt: Date.now(), imageUrl: 'https://images.unsplash.com/photo-1620428268482-cf1851a36764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1709&q=80'
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
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;