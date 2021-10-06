function print(p = 5) {
    let size = p;
    let string = "";

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            string += " " + "*";
        }
        string += "\n";
    }
    console.log(string)
}

print()