// random background color

let data = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

const randomColor = () => {
    let generatedColor = "#";

    for (let i = 0; i < 6; i++) {
        generatedColor = generatedColor + data[Math.floor(Math.random() * 15)];
    }

    return generatedColor;

    // document.getElementById("body").style.backgroundColor = generatedColor;
}

console.log(randomColor());