function weightedUniformStrings(s, queries) {
  // Write your code here
  let weights = new Map();
  let currentWeight = 0;
  let currentChar = "";
  let prevChar = "";
  let currentIncrement = 0;
  for (let i = 1; i <= 26; i++) {
    weights.set(String.fromCharCode(i + 96), i);
  }
  let allUniqueStrings = new Set();
  for (let i = 0; i < s.length; i++) {
    currentChar = s[i];
    if (currentChar !== prevChar) {
      currentWeight = weights.get(currentChar);
      currentIncrement = currentWeight;
    } else {
      currentWeight += currentIncrement;
    }
    allUniqueStrings.add(currentWeight);
    prevChar = currentChar;
  }
  let results = [];
  for (let i = 0; i < queries.length; i++) {
    if (allUniqueStrings.has(queries[i])) {
      results.push("Yes");
    } else {
      results.push("No");
    }
  }
  return results;
}
weightedUniformStrings("abccddde", [1, 2, 3, 4, 5]);
