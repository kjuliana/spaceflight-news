import axios from "axios";

export default class PostService {
    static async getSortedAll(sort='') {
        const response = await axios.get('https://api.spaceflightnewsapi.net/v3/articles', {
            params: {
                _sort: sort,
            }
        });
        return response;
    }

    static async getPage(limit = 10, page = 1) {
        const response = await axios.get('https://api.spaceflightnewsapi.net/v3/articles', {
            params: {
                _limit: limit,
                _start: limit === 'Infinity' ? 0 : (page - 1) * limit
            }
        });
        return response;
    }

    static async getCount() {
        const response = await axios.get('https://api.spaceflightnewsapi.net/v3/articles/count');
        return response;
    }

    static async getById(id) {
        const response = await axios.get('https://api.spaceflightnewsapi.net/v3/articles/' + id);
        return response;
    }

    // static async getCommentsByPostId(id) {
    //     const response = await axios.get('https://dummyjson.com/posts/' + id + '/comments');
    //     return response;
    // }
}