/*
Given an array of one's and zero's convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

*/

const binaryArrayToNumber = arr => {
  return arr.reverse()
            .map((num, index) =>  num * Math.pow(2, index))
            .reduce((previous, current) => previous + current);
};

console.log(binaryArrayToNumber([1, 0, 0, 1]))

// const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);