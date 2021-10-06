function small(array) {
    let newArray = [];
    array.sort((a, b) => a - b);
    let first = array.shift();
    let second = array.shift();
    console.log(first, second)
}

small([3, 0, 10, 4, 7, 3])