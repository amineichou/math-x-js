// check if a variable is numerical or not ---- "464.55" is numerical ---- "abc" is not

const isNumerical = (index) => {
    let i = 0;
    while (i < index.length) {
        if (0 <= index[i] && index[i] <= 9) {
            i++;
        }
        else {
            return false;
        }
    }
    if (index == '')
        return false;
    else
        return true;
}

console.log(isNumerical(12));
console.log(isNumerical('abcd'));
console.log(isNumerical('12'));
console.log(isNumerical(''));
console.log(isNumerical(1.20));
console.log(isNumerical(-200));