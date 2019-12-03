function countPositivesSumNegatives(input) {
  let countPositives = 0;
  let sumNegatives = 0;
  if (input === null || input.length === 0) {
    return [];
  }
  input.forEach(element => element > 0 ? countPositives++ : sumNegatives += element);
  return [countPositives, sumNegatives];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([]));
console.log(countPositivesSumNegatives(null));