import React from 'react';
import MyRadio from "../UI/MyRadio/MyRadio";

const PostFilter = ({filter, setFilter, limit, setLimit, count}) => {
    return (
        <div>
            <MyRadio
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                title='Sort by'
                options={[
                    {value: 'publishedAt:desc', name: 'Newest to Oldest'},
                    {value: 'publishedAt', name: 'Oldest to Newest'},
                    {value: 'newsSite', name: 'News site'},
                    {value: 'title', name: 'Title'}
                ]}
            />
            <MyRadio
                value={limit}
                onChange={value => setLimit(value)}
                title='News per page'
                options={[
                    {value: 5, name:'5'},
                    {value: 25, name:'25'},
                    {value: 50, name:'50'},
                    {value: count, name:'Show All'},
                ]}
            />
        </div>
    );
};

export default PostFilter;