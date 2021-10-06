function nums(array) {
    let newArray = [];
    array.sort((a, b) => a - b);
    let len = array.length;
    for (let i = 0; i < len; i++) {
        if (i % 2 != 0) {
            let a = array.pop();
            newArray.push(a);
        } else {
            let a = array.shift();
            newArray.push(a);
        }
    }
    return newArray;
}

console.log(nums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))