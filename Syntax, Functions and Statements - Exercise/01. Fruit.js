function calculate(fruit, weight, price) {
    let type_of_fruit = String(fruit);
    let kgs = Number(weight) / 1000;
    let price_per_kg = Number(price);
    let bill = (price_per_kg * kgs).toFixed(2);
    console.log(`I need $${bill} to buy ${kgs.toFixed(2)} kilograms ${type_of_fruit}.`)
}

calculate('orange', 2500, 1.80)