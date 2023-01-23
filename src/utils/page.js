export const getPagesCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
}

export const getPagesArray = (page, totalPages) => {
    const result = [];
    if (totalPages > 10) {
        if (page < 8) {
            for (let i = 1; i < 10; i++) {
                result.push(i+1);
            }
            return result;
        }
        if (page > totalPages - 5) {
            for (let i = totalPages-1; i > totalPages - 11; i--) {
                result.unshift(i);
            }
            return result;
        }

        for (let i = page - 5; i < page + 5; i++) {
            result.push(i);
        }
        return result;
    }

    for (let i = 2; i < totalPages; i++) {
        result.push(i);
    }
    return result;
}