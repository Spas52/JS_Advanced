function number(num) {
    var digit = num.toString()[0];
    let sum = 0;
    let is_same = true;
    var digits = num.toString().split('').map(Number);
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] != digit) {
            is_same = false;
        }
        sum += digits[i];
    }

    console.log(is_same);
    console.log(sum);

}

number(2222222)