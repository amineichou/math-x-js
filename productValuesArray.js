// calculate product of values in an array

const product = (arr) => {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number") {
            result = result * arr[i];
        }
    }
    return result;
}


console.log(product([1,2,3]));
console.log(product([100,-200,3]));
console.log(product([1,2,'a',3]));