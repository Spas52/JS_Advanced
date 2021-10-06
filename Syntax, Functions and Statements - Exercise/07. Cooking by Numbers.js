function cooking(num, op1, op2, op3, op4, op5) {
    let start = Number(num);
    let action;
    for (let i = 0; i < 5; i++) {
        if (i == 0) {
            action = op1
            if (action == 'chop') {
                start /= 2;
                console.log(start);
            } else if (action == 'dice') {
                start = Math.sqrt(start);
                console.log(start);
            } else if (action == 'spice') {
                start += 1;
                console.log(start);
            } else if (action == 'bake') {
                start *= 3;
                console.log(start);
            } else if (action == 'fillet') {
                start -= start * 0.2;
                console.log(start);
            }
        } else if (i == 1) {
            action = op2
            if (action == 'chop') {
                start /= 2;
                console.log(start);
            } else if (action == 'dice') {
                start = Math.sqrt(start);
                console.log(start);
            } else if (action == 'spice') {
                start += 1;
                console.log(start);
            } else if (action == 'bake') {
                start *= 3;
                console.log(start);
            } else if (action == 'fillet') {
                start -= start * 0.2;
                console.log(start);
            }
        } else if (i == 2) {
            action = op3
            if (action == 'chop') {
                start /= 2;
                console.log(start);
            } else if (action == 'dice') {
                start = Math.sqrt(start);
                console.log(start);
            } else if (action == 'spice') {
                start += 1;
                console.log(start);
            } else if (action == 'bake') {
                start *= 3;
                console.log(start);
            } else if (action == 'fillet') {
                start -= start * 0.2;
                console.log(start);
            }
        } else if (i == 3) {
            action = op4
            if (action == 'chop') {
                start /= 2;
                console.log(start);
            } else if (action == 'dice') {
                start = Math.sqrt(start);
                console.log(start);
            } else if (action == 'spice') {
                start += 1;
                console.log(start);
            } else if (action == 'bake') {
                start *= 3;
                console.log(start);
            } else if (action == 'fillet') {
                start -= start * 0.2;
                console.log(start);
            }
        } else if (i == 4) {
            action = op5
            if (action == 'chop') {
                start /= 2;
                console.log(start);
            } else if (action == 'dice') {
                start = Math.sqrt(start);
                console.log(start);
            } else if (action == 'spice') {
                start += 1;
                console.log(start);
            } else if (action == 'bake') {
                start *= 3;
                console.log(start);
            } else if (action == 'fillet') {
                start -= start * 0.2;
                console.log(start);
            }
        }
    }
}

// cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')