/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/

const moveZeros = function (arr) {
  const nonZeroArray = arr.filter(item => item !== 0)
  const numberOfZeros = arr.length - nonZeroArray.length
  const zeroArray = Array.from(Array(numberOfZeros), () => 0)
  return [... nonZeroArray, ...zeroArray]
}

/*
const moveZeros = function (arr) {
  return arr.filter(function(number) {return number !== 0}).concat(arr.filter(function(number) {return number === 0;}));
}
*/

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1])) // [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]
console.log(moveZeros([ 1, 2, 0, 1, 0, 1, 0, 3, 0, 1 ])) // [1,2,1,1,3,1,0,0,0,0]
console.log(moveZeros([ 9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9 ])) // [9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]
console.log(moveZeros([ 'a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9 ])) // ["a","b","c","d",1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]
console.log(moveZeros([ 0, 1, null, 2, false, 1, 0 ])) // [1,null,2,false,1,0,0]