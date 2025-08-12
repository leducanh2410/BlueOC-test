function sumOfTopTwoNumbers(arr) {
  if (arr.length < 2) {
    throw new Error("Array must contain at least two numbers");
  }
  const sortedArr = arr.sort((a, b) => b - a);
  return sortedArr[0] + sortedArr[1];
}

if (require.main === module) {
  const prompt = require("prompt-sync")();
  let input = prompt("Enter numbers, separated by commas: ");

  let numbers = input
    .replace(/[\[\]\s]+/g, "")
    .split(",")
    .map(Number);
  try {
    const result = sumOfTopTwoNumbers(numbers);
    console.log(`Sum of the two largest numbers: ${result}`);
  } catch (error) {
    console.error(error.message);
  }
}
module.exports = { sumOfTopTwoNumbers };
