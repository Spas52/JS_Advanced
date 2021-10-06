function sum(array) {
    let first = array.shift();
    let last = array.pop();
    let result = Number(first) + Number(last);
    return result
}

console.log(sum(['20', '30', '40']))