function sumTwoSmallestNumbers(numbers) {
  const smallestNumbers = numbers
  .sort((a, b) => a - b)
  .slice(0,2)
  .reduce((acc, current) => acc + current, 0);
  console.log(smallestNumbers)
}

sumTwoSmallestNumbers([ 5, 8, 12, 19, 22 ])