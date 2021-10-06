function big(array) {
    array.sort((a, b) => a - b);
    if (array.length % 2 == 0) {
        let index = array.length / 2;
        let secondHalf = array.slice(index)
        return secondHalf
    } else {
        let index = Math.floor(array.length / 2);
        let secondHalf = array.slice(index);
        return secondHalf
    }
}

big([3, 19, 14, 7, 2, 19, 6])