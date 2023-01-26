import React, {useState} from 'react';
import SearchAndButton from "../SearchAndButton/SearchAndButton";
import MyInput from "../UI/MyInput/MyInput";
import AddPostButton from "../AddPostButton/AddPostButton";
import Burger from "../UI/Burger/Burger";
import Navbar from "../UI/Navbar/Navbar";
import MyRadio from "../UI/MyRadio/MyRadio";
import styles from './BurgerMenu.module.css'

const BurgerMenu = ({filter, setFilter, createPost}) => {
    const [isMenu, setIsMenu] = useState(false);

    return (
        <div className={styles.root}>
            <SearchAndButton>
                <MyInput
                    value={filter.query}
                    type='search'
                    onChange={e => setFilter({...filter, query: e.target.value})}
                    placeholder='Search...'
                />
                <Burger onClick={() => setIsMenu(!isMenu)}/>
            </SearchAndButton>
            <div className={styles.menu} hidden={!isMenu}>
                <Navbar/>
                <AddPostButton createPost={createPost}/>
                <MyRadio
                    value={filter.sort}
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                    title='Sort by'
                    options={[
                        {value: 'publishedAt:desc', name: 'Newest first'},
                        {value: 'publishedAt', name: 'Oldest first'},
                    ]}
                />
            </div>
        </div>
    );
};

export default BurgerMenu;
