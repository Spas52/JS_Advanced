function catalogue(input) {
    let result = [];
    let firstLetter;

    for (const product of input) {
        let [productName, productPrice] = product.split(' : ');
        productPrice = Number(productPrice);
        result.push(productName + ':' + ' ' + productPrice)
    }

    result.sort((a, b) => a.localeCompare(b));

    for (item of result) {
        if (firstLetter != item[0]) {
            firstLetter = item[0];
            console.log(firstLetter);
        }
        console.log(" " + item);
    }
}

catalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)