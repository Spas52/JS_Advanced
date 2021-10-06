function names(array) {
    array.sort((a, b) => a.localeCompare(b));
    for (let name of array) {
        let position = array.indexOf(name) + 1;
        console.log(position + "." + name);
    }
}

names(["John", "Bob", "Christina", "Ema"])