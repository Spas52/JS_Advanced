function solve(a) {
    let result;
    let inputType = typeof(a);
    if (inputType === 'number') {
        result = Math.pow(a, 2) * Math.PI;
        console.log(result.toFixed(2));
    }else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(a)}.`)
    }
}

solve(0)