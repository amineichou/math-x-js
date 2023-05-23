// calculate sum of values in an array

const sum = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number") {
            result = result + arr[i];
        }
    }
    return result;
}


console.log(sum([1,2,3]));
console.log(sum([100,-200,3]));
console.log(sum([1,2,'a',3]));