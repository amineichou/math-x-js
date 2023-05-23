// find the greatest divisor (gcd) of two integers
// for example the greatest divisor of 12 and 8 is 4


const gcd = (...data) => {
    let numbers = data;
    for (let j = 0; j <= data.length; j++) {
        for (let i = 0; i < data[j]; data[j]--) {
            if (numbers[i] % data[j] == 0) {
                if (numbers[i + j] % data[j] == 0) {
                    return data[j];
                }
            }
        }
    }
}

console.log(gcd(20, 15, 30));