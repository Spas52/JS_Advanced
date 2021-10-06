function previous_day(year, month, day) {
    curr_date = new Date(year, month - 1, day)
    curr_date.setDate(curr_date.getDate() - 1)
    console.log(`${curr_date.getFullYear()}-${curr_date.getMonth() + 1}-${curr_date.getDate()}`)
}

previous_day(2016, 10, 1)