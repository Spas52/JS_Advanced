function mat(matrix) {
    let size = matrix.length
    let mainDiagonal = 0;
    let secondDiagonal = 0;
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row == col) {
                mainDiagonal += Number(matrix[row][col]);
            }
        }
    }
    for (let row = 0; row < size; row++) {
        secondDiagonal += matrix[row][matrix.length - 1 - row];
    }
    console.log(mainDiagonal, secondDiagonal);
}

mat([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   )