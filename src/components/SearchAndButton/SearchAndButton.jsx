import React from 'react';
import MyInput from "../UI/MyInput/MyInput";
import AddPostButton from "../AddPostButton/AddPostButton";
import styles from './SearchAndButton.module.css';
import Burger from "../UI/Burger/Burger";

const SearchAndButton = ({searchQuery, onSearchQueryChange, createPost, onBurgerClick}) => {
    return (
        <div className={styles.root}>
            <MyInput
                value={searchQuery}
                type='search'
                onChange={e => onSearchQueryChange(e.target.value)}
                placeholder='Search...'
            />
            <AddPostButton createPost={createPost}/>
            <Burger onClick={onBurgerClick} />
        </div>
    );
};

export default SearchAndButton;