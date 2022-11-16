const cloneData = (data) => {
    return JSON.parse(JSON.stringify(data))
}

const filterData = (data, value) => {
    return data.filter(el => el.title.toLowerCase().includes(value))
}

const getCategories = (data) => {
    let categories = {}
    data.forEach(el => {
        if (el.category in categories) categories[el.category] += 1
        else  categories[el.category] = 1
    });
    return categories
}

module.exports = { filterData, cloneData, getCategories }
