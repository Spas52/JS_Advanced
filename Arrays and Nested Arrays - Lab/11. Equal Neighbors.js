function equal(matrix) {
    let size = matrix.length;
    let numberOfNeighbors = 0;
    for (let row = 0; row < size; row ++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if ((row < size - 1 && matrix[row][col] === matrix[row + 1][col])) {
                numberOfNeighbors += 1;
            }
            if (col < matrix[row].length - 1 && matrix[row][col] === matrix[row][col + 1]) {
                numberOfNeighbors += 1;
            }
        }
    }
    return numberOfNeighbors;
}

console.log(equal([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
))