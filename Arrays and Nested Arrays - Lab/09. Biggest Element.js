function big(matrix) {
    let size = matrix.length;
    let big = 0;
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row == 0 && col == 0) {
                big = matrix[row][col];
            }
            else if (matrix[row][col] > big) {
                big = matrix[row][col];
            }
        }
    }
    return big;
}

console.log(big([[3, 5, 7, 12],
                [-1, 4, 33, 2],
                 [8, 3, 0, 4]]
   ))