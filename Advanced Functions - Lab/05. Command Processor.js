function solution() {
    let string = '';

    return {
        append,
        removeStart,
        removeEnd,
        print
    };

    function append(str) {
        string += str;
    }

    function removeStart(n) {
        string = string.slice(n);
    }

    function removeEnd(n) {
        string = string.slice(0, string.length-n);
    }

    function print() {
        console.log(string);
    }
}