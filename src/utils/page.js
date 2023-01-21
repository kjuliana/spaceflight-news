export const getPagesCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
}

export const getPagesArray = (page, totalPages) => {
    const result = [];
    if (page < 8) {
        for (let i = 1; i < 10; i++) {
            result.push(i+1);
        }
        return result;
    }
    if (page > totalPages - 5) {
        for (let i = totalPages; i > totalPages - 11; i--) {
            result.unshift(i);
        }
        return result;
    }

    for (let i = page - 6; i < page + 4; i++) {
        result.push(i);
    }
    return result;
}