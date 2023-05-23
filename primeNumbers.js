// check if the number is double => not odd => because only odd number are prime
const isDouble = (number) => {
  if (number % 2 === 0)
    return true;
  return false;
}

// check if number is natural
const isNatural = (number) => {
  if ((Math.floor(number) === number) && number >= 0)
    return true;
  return false;
}

// denominator other than 1 and itself
const isDiv = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return true;
    }
  }
  return false;
}


// detect prime number
const isPrime = (number) => {
  if (number !== 2 && isDouble(number)) {
    return false;
  }
  else if (isDiv(number)) {
    return false;
  }
  else {
    return true;
  }
}


// main function
function main(x, y) {
  if (isNatural(x) && isNatural(y)) {
    for(let i = x; i < y; i++) {
      if (isPrime(i))
        console.log(i); // i is the prime number
      // console.log(i + ' not prime'); => i here is not a prime number
    }
  } else  {
    console.log("Please enter natural numbers");
  }
}

// prime numbers between x and y
//   x, y
main(1,100);


// you can use isPrime function to detect prime numbers
// console.log(isPrime(1000000007));
