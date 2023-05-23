// pythagoreanTheorem => c² = a² + b² => calculate c "hypotenuse" from a & b

const pythagoreanTheorem = (a,b) => {
    return Math.sqrt((a * a) + (b * b));
}

console.log(pythagoreanTheorem(2,4));
console.log(pythagoreanTheorem(3,4));