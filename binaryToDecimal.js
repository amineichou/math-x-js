// convert binary to decimal

const binToDec = (binary) => {
    let result = 0;
    let binaryString = binary.toString();

    if (binary > 1) {
        for (let i = 0; i < binaryString.length - 1; i++) {
            if (i == 0) {
                result = result + (binaryString[i] * 2) + (binaryString[i + 1] * 1);
            } else {
                result = (result * 2) + (binaryString[i + 1] * 1);
            }
        }
    } else if (binary == 1) {
        return 1;
    } else if (binary == 0) {
        return 0;
    }

    return result;
}

console.log(binToDec(1011000000000));