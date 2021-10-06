function getMagicMatrix(matrix) {
    return [
        ...matrix.map(x => x.reduce((a, v) => a + v, 0)),
        ...matrix.reduce((a, v, i) => {
            a.push(matrix.reduce((c, d) => c + d[i], 0))
            return a
        }, []),
    ].every((x, _, matrix) => x === matrix[0])
}

console.log(getMagicMatrix([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
));
console.log(getMagicMatrix([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
));
console.log(getMagicMatrix([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
));