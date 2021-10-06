function rotate(array, number) {
    for (let i = 0; i < number; i++) {
        let last = array.pop();
        array.unshift(last);
    }
    console.log(array.join(' '))
}

rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
)