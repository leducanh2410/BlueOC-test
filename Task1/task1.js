function getMostFrequentLengthGroups(strings) {
  // Map each string to its length
  let lengths = strings.map((str) => str.length);

  let frequency = {};
  let maxCount = 0;

  // Count the frequency of each length and track the maximum frequency
  for (let len of lengths) {
    frequency[len] = (frequency[len] || 0) + 1;
    if (frequency[len] > maxCount) {
      maxCount = frequency[len];
    }
  }

  // Find all lengths that have the maximum frequency
  let mostFrequentLengths = Object.keys(frequency)
    .filter((len) => frequency[len] === maxCount)
    .map(Number);

  // For each most frequent length, collect all strings of that length
  return mostFrequentLengths.map((len) =>
    strings.filter((str) => str.length === len)
  );
}

if (require.main === module) {
  const prompt = require("prompt-sync")();
  // Remove brackets and single quotes from input for cleaner parsing
  let input = prompt("Enter strings, separated by commas:").replace(
    /[\[\]']+/g,
    ""
  );
  // Split input into array and trim whitespace from each string
  let strings = input.split(",").map((str) => str.trim());

  const result = getMostFrequentLengthGroups(strings);
  // Print each group of strings with the most common length
  result.forEach((group) => console.log(group));
}

module.exports = { getMostFrequentLengthGroups };
