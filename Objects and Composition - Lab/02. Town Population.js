function townPopulation(towns) {
    const cities = {};

    for(let town of towns) {
        let [city, population] = town.split(' <-> ');
        population = Number(population);

        if (cities[city] != undefined) {
            population += cities[city];
        }
        cities[city] = population;
    }

    for (let town in cities) {
        console.log(`${town} : ${cities[town]}`)
    }
}

townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);
console.log("----")
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);