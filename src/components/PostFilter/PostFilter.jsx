import React from 'react';
import MyRadio from "../UI/radio/MyRadio";

const PostFilter = ({filter, setFilter, limit, setLimit}) => {
    return (
        <div>
            <MyRadio
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                title='Сортировка по'
                options={[
                    {value: 'publishedAt:desc', name: 'По дате(сначала новые)'},
                    {value: 'publishedAt', name: 'По дате(сначала старые)'},
                    {value: 'newsSite', name: 'По источнику'},
                    {value: 'title', name: 'По названию статьи'}
                ]}
            />
            <MyRadio
                value={limit}
                onChange={value => setLimit(value)}
                title='Постов на странице'
                options={[
                    {value: 5, name:'5'},
                    {value: 10, name:'10'},
                    {value: 25, name:'25'},
                    {value: Infinity, name:'Показать все'},
                ]}
            />
        </div>
    );
};

export default PostFilter;