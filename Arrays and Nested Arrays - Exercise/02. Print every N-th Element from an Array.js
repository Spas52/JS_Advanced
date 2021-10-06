function ele(array, step) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if ( i == 0) {
            newArray.push(array[i]);
        } else if (i % step == 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(ele(['1', 
'2',
'3', 
'4', 
'5'], 
6
))