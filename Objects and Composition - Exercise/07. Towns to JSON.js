function towns(input) {
    let result = [];
    input.shift();
    for (const city of input) {
        let [space, town, latitude, longitude] = city.split('|')
        result.push({"Town": town.trim(),
        "Latitude": Number(Number(latitude.trim()).toFixed(2)),
        "Longitude": Number(Number(longitude.trim()).toFixed(2))})
    }
    console.log(JSON.stringify(result));

}

towns(['| Town | Latitude | Longitude |',
       '| Sofia | 42.696552 | 23.32601 |',
      '| Beijing | 39.913818 | 116.363625 |']
)