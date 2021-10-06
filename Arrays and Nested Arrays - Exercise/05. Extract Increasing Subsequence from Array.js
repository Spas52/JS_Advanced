function extract(array) {
    let big = 0;
    let newArray = [];
    for (let num of array) {
        if (num >= big) {
            big = num;
            newArray.push(num);
        } 
    }
    return newArray;
}

console.log(extract([20, 
    3, 
    2, 
    15,
    6, 
    1]
    ))