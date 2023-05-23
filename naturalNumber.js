// find if a number is natural or not


const isNatural = (num) => {
    if (Math.floor(num) == num && num >= 0 && num != Infinity) {
        return true;
    } else {
        return false;
    }
}

console.log(isNatural(10));