function sum(array, start, end) {
    let result = 0;
    if (Array.isArray(array) == false) {
        return NaN;
    }

    if (start < 0) {
        start = 0;
    }

    if (end > array.length - 1) {
        end = array.length - 1;
    }

    for (i = start; i <= end; i++) {
        result += Number(array[i]);
    }

    return result;
}


console.log(sum('text', 0, 2));