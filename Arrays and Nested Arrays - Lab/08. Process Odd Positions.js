function odd(array) {
    let oddPositions = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 != 0) {
            let number = array[i] * 2;
            oddPositions.push(number);
        }
    }
    oddPositions.reverse();
    return `${oddPositions.join(' ')}`
}

console.log(odd([3, 0, 10, 4, 7, 3]))