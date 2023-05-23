// convert decimal to binary

const decToBin = (decimal) => {
    let result = "";
    if (decimal > 1) {
        while (decimal != 0) {
            if (decimal % 2 == 0) {
                result = 0 + result;
                decimal = decimal / 2;
            } else {
                result = 1 + result;
                decimal = (decimal - 1) / 2;
            }
        }
    } else if (decimal == 1) {
        return 1;
    }
    else if (decimal == 0) {
        return 0;
    }
    return result;
}

console.log(decToBin(2003));