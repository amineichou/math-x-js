// check whether is a value is integer or not

const isInt = (num) => {
    if (!isNaN(num) && typeof num == "number" && Math.floor(num) == num) {
        return true;
    } else  {
        return false;
    }
}

console.log(isInt(4.2))