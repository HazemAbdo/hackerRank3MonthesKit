function matchingStrings(strings, queries) {
  let map = new Map();
  let result = [];
  strings.forEach((string) => {
    if (map.has(string)) {
      map.set(string, map.get(string) + 1);
    } else {
      map.set(string, 1);
    }
  });
  queries.forEach((query) => {
    if (map.has(query)) {
      result.push(map.get(query));
    } else {
      result.push(0);
    }
  });
  return result;
}
strings = ["aba", "baba", "aba", "xzxb"];
queries = ["aba", "xzxb", "ab"];
console.log(matchingStrings(strings, queries));
