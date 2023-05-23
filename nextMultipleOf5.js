// round up an integer value of the next multiple of 5

const intRound = (num) => {
    while (num % 5 != 0) {
        num++;
    }
    return num;
}

console.log(intRound(32));
console.log(intRound(137));