// get the highest number from three different numbers

const highestOfthree = (n1, n2, n3) => {
    if (n1 >= n2) {
        if (n1 >= n3)
            return n1;
        return n3;
    } else if (n2 >= n3) {
        return n2;
    }
    else {
        return n3;
    }
}

console.log(highestOfthree(-5, 4, 2));