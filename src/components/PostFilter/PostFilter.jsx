import React from 'react';
import MyRadio from "../UI/MyRadio/MyRadio";
import styles from './PostFilter.module.css';

const PostFilter = ({filter, setFilter, limit, setLimit}) => {
    return (
        <div>
            <MyRadio
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                title='Sort by'
                options={[
                    {value: 'publishedAt:desc', name: 'Newest first'},
                    {value: 'publishedAt', name: 'Oldest first'},
                ]}
            />
            <MyRadio
                value={limit}
                onChange={value => setLimit(value)}
                title='News per page'
                options={[
                    {value: 5, name:'5'},
                    {value: 25, name:'25'},
                    {value: 50, name:'50'}
                ]}
            />
        </div>
    );
};

export default PostFilter;