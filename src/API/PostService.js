import axios from "axios";

export default class PostService {
    static async getPage(limit = 10, page = 1, sort = '', search = '') {
        const response = await axios.get('https://api.spaceflightnewsapi.net/v3/articles', {
            params: {
                _title_contains: search,
                _sort: sort,
                _limit: limit,
                _start: limit === 'Infinity' ? 0 : (page - 1) * limit
            }
        });
        return response;
    }

    static async getCount(search) {
        const response = await axios.get('https://api.spaceflightnewsapi.net/v3/articles/count', {
            params: {
                _title_contains: search,
            }
        });
        return response.data;
    }

    static async getById(id) {
        const response = await axios.get('https://api.spaceflightnewsapi.net/v3/articles/' + id);
        return response;
    }
}