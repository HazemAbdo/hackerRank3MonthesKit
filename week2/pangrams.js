function pangrams(s) {
  // Write your code here
  let trackOccurrence = new Array(26).fill(0);
  let flag = true;
  s = s.toLowerCase().replace(/\s/g, "");
  for (let index = 0; index < s.length; index++) {
    trackOccurrence[s[index].charCodeAt(0) - 97] = 1;
  }

  return trackOccurrence.join("") == new Array(26).fill("1").join("")
    ? "pangram"
    : "not pangram";
}

console.log(
  pangrams("We promptly judged antique ivory buckles for the next prizeeee")
);

console.log(pangrams("We promptly judged antique ivory buckles for the prize"));
