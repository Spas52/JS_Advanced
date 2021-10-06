function numbers(a, b) {
    let num1 = Number(a);
    let num2 = Number(b);
    let x;

    for (let i = 1; i <= num1 && i <= num2; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            x = i;
        }
    }

    console.log(x)
}

numbers(15, 5)