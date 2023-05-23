const rand = (y = 0) => {
    let i = Math.floor(Math.random() * y)
    return i;
}

console.log(rand(100));