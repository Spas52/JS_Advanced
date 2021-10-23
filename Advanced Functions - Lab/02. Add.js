function solution(number) {
    return function(numToAdd) {
        return numToAdd + number;
    }
}

let add = solution(3);
console.log(add(1))