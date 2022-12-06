import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, page = 1) {
            const response = await axios.get('https://dummyjson.com/posts', {
                params: {
                        limit: limit,
                        skip: limit === 'Infinity' ? 0: (page - 1) * limit
                    }
        });
            return response;
    }

    static async getById(id) {
        const response = await axios.get('https://dummyjson.com/posts/' + id);
        return response;
    }

    static async getCommentsByPostId(id) {
        const response = await axios.get('https://dummyjson.com/posts/' + id + '/comments');
        return response;
    }
}