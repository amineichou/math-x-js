let arr = [101110, 12, -9, 4483, 883422, 0, 14, 7, -1225600];
// find the highest number in the array

const max = () => {
    let i = 0;
    let j = i + 1;
    while (i < arr.length) {
        while (j < arr.length) {
            if (arr[i] <= arr[j]) {
                i = j;
                j++;
            } else {
                j++;
            }
        }
        return arr[i];
    }
}

console.log(max());