//1. Write a function that takes an array of numbers and returns the sum of all elements

function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}
let array = [20, 47, 6, 94, 5, 75, 34, 7];
let result = sumOfArray(array);
console.log(result);
