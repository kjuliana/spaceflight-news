import {useMemo} from "react";

export const useSortedPost = (posts, sort) => {
    const sortedPost = useMemo(() => {
        if (sort !== 'default') {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
    }, [sort, posts]);

    return sortedPost;
}

export const usePosts = (posts, sort, query) => {
    console.log({sort, query})
    const sortedPost = useSortedPost(posts, sort);
    const sortedAndSearchedPosts = useMemo(() => {
        return [...sortedPost].filter(post => post.title.toLowerCase().includes(query))
    }, [sortedPost, query]);

    return sortedAndSearchedPosts;
}