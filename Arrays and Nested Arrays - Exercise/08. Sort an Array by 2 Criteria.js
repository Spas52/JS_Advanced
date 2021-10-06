function crit(array) {
    let newArray = array.sort((a, b) => {
        let secSort = a.length - b.length;
        if (secSort != 0) {
            return secSort;
        } else {
            return a.localeCompare(b);
        }
    });
    console.log(newArray.join('\n'));
}

crit(['test', 
'Deny', 
'omen', 
'Default']
)