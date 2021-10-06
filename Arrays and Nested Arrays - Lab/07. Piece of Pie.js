function pie(array, start, end) {
    let startIndex = array.indexOf(start);
    let endIndex = array.indexOf(end);
    let newArray = array.slice(startIndex, endIndex + 1);
    return newArray
}

console.log(pie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
))