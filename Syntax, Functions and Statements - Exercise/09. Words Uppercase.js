function toUpperCase(text) {
    console.log(text.match(/\w+/g).map(a => a.toUpperCase()).join(', '));
}

toUpperCase('Hi, how are you?')
toUpperCase('hello')