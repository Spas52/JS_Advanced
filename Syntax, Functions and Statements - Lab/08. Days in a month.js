function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

let a = daysInMonth(4, 2012)
console.log(a)