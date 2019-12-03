/* // function arrayDiff(a, b) {
  function diff(comparisonArray) {
    const hash = new Set(comparisonArray);
    return this.filter(elem => !hash.has(elem));
  }
//} */

function array_diff (minuendArray, subtrahendArray) {
  minuendArray.filter(minuend => {
    !subtrahendArray.find(subtrahend => {
      if (minuend === subtrahend) {
        console.log('minuend', minuend)
      }
      return minuend === subtrahend
    })
  });
}

array_diff([], [4,5]) // []
array_diff([3,4], [3]) // [4]
array_diff([1,8,2], []) // [1,8,2]