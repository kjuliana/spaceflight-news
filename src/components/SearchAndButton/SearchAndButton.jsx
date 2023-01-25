import React from 'react';
import MyInput from "../UI/MyInput/MyInput";
import AddPostButton from "../AddPostButton/AddPostButton";
import styles from './SearchAndButton.module.css';
import Burger from "../UI/Burger/Burger";

const SearchAndButton = ({filter, setFilter, createPost, hiddenContent, setHiddenContent}) => {
    return (
        <div className={styles.root}>
            <MyInput
                value={filter.query}
                type='search'
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder='Search...'
            />
            <AddPostButton createPost={createPost}/>
            <Burger
                hiddenContent={hiddenContent}
                setHiddenContent={setHiddenContent}
            />
        </div>
    );
};

export default SearchAndButton;