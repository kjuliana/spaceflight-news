import axios from "axios";

export default class BlogService {
    static async getPage(limit = 10, page = 1, sort = '', search = '') {
        return await axios.get('https://api.spaceflightnewsapi.net/v3/blogs', {
            params: {
                _title_contains: search,
                _sort: sort,
                _limit: limit,
                _start: limit === 'Infinity' ? 0 : (page - 1) * limit
            }
        });
    }

    static async getCount(search) {
        const response = await axios.get('https://api.spaceflightnewsapi.net/v3/blogs/count', {
            params: {
                _title_contains: search,
            }
        });
        return response.data;
    }

    static async getById(id) {
        return await axios.get('https://api.spaceflightnewsapi.net/v3/blogs/' + id);
    }
}