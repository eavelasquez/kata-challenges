function findUniq(arr) {
  return arr
            .find((element, _, list) 
            => list
            .indexOf(element) === list.lastIndexOf(element));
}

console.log(findUniq([ 0, 1, 0 ])); // 1
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])); // 2
console.log(findUniq([ 3, 10, 3, 3, 3 ])); // 10 
// findUniq([ 0, 1, 0 ])