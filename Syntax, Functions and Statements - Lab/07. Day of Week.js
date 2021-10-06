function day(text) {
    let num;
    switch (text) {
        case 'Monday': num = 1;break;
        case 'Tuesday': num = 2; break;
        case 'Wednesday': num = 3; break;
        case 'Thursday': num = 4; break;
        case 'Friday': num = 5; break;
        case 'Saturday': num = 6; break;
        case 'Sunday': num = 7; break;
    }
    if (typeof(num) == 'number') {
        console.log(num)
    } else {
        console.log('error')
    }
}

day('Invaldi')