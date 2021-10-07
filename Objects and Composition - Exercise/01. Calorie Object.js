function calorie(array) {
    let name = "";
    let food = {};
    for (let i = 0; i < array.length; i++){
        if (i % 2 == 0) {
            name = array[i];
            food[name] = 0;
        } else {
            food[name] = Number(array[i]);
        }
    }
    return food;
}

console.log(calorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']))