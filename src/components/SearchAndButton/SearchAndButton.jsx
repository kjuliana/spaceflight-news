import React from 'react';
import MyInput from "../UI/MyInput/MyInput";
import AddPostButton from "../AddPostButton/AddPostButton";
import styles from './SearchAndButton.module.css';

const SearchAndButton = ({filter, setFilter, createPost}) => {
    return (
        <div className={styles.search}>
            <MyInput
                value={filter.query}
                type='search'
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder='Search...'
            />
            <AddPostButton createPost={createPost}/>
        </div>
    );
};

export default SearchAndButton;