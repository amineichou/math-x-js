// find the greatest divisor (gcd) of two integers
// for example the greatest divisor of 12 and 8 is 4


const gcd = (n1, n2) => {
    let num1 = n1;
    let num2 = n2;
    for (let i = 0; i < n1; n1--) {
        if (num1 % n1 == 0) {
            if (num2 % n1 == 0) {
                return n1;
            }
        }
    }
}

console.log(gcd(20, 10));