function factory(car) {
    let result = {model: car.model,
                  engine: {},
                  carriage: {},
                  wheels: []};

    if (car.power <= 90) {
        result["engine"] = {power: 90, volume: 1800};
    } else if (car.power <= 120) {
        result["engine"] = {power: 120, volume: 2400}; 
    } else if (car.power > 120) {
        result["engine"] = {power: 200, volume: 3500};
    }

    if (car.carriage == 'hatchback') {
        result['carriage'] = {type: car.carriage, color: car.color};
    } else if (car.carriage == 'coupe') {
        result['carriage'] = {type: car.carriage, color: car.color};
    }

    let wheel = Number(car.wheelsize);
    if (wheel % 2 == 0) {
        wheel -= 1;
    }
    result['wheels'] = [wheel, wheel, wheel, wheel];

    return result
}

console.log(factory({
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
}))