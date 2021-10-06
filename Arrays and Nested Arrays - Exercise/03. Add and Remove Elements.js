function ele(array) {
    let number = 1;
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 'add') {
            newArray.push(i+1);
        }
        if (array[i] == 'remove') {
            if (newArray.length > 0) {
                newArray.pop();
            }
        }
    }
    if (newArray.length == 0) {
        console.log('Empty')
    } else {
        console.log(newArray.join('\n'))
    }
}

ele(['remove', 
'remove', 
'remove']
)