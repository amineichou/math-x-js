// test if number is a power of 2

const powerOf2 = (num) => {
    for (let i = 0; i < num; i++) {
        if (i * i == num) {
            return true;
        }
    }
    return false;
}

console.log(powerOf2(16));
console.log(powerOf2(18));
console.log(powerOf2(256));