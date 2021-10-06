function sequenceKArray(n, k) {
    let resultArray = [1];

    while (n > 1) {
        let el_to_add = 0;
        let arrayToLoop = []
        if (k > resultArray.length) {
            arrayToLoop = resultArray
        }
        else {
            arrayToLoop = resultArray.slice(resultArray.length - k, resultArray.length)
        }

        for (let i = 0; i < arrayToLoop.length; i++) {
            el_to_add += arrayToLoop[i];
        }
        resultArray.push(el_to_add);
        n--;
    }

    return resultArray
}

console.log(sequenceKArray(6, 3))
console.log(sequenceKArray(8, 2))