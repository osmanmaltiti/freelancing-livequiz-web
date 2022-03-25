const reduce = (array, key) => {
    return [...new Map(array.map(item => [item[key], item])).values()]
}

export default reduce;