/*
In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out,
because 9^2 is 81 and 1^2 is 1.

Note: The function accepts an integer and returns an integer

*/

const squareDigits = num => {
  const arrayDigits = num.toString().split('').map(item => Math.pow(parseInt(item, 10), 2)).join('');
  return parseInt(arrayDigits, 10)
}

console.log(squareDigits(3212));
console.log(squareDigits(267));
console.log(squareDigits(9119));