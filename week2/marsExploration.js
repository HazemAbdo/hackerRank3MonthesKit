function marsExploration(s) {
  // Write your code here
  return s.split("").reduce(function (count, char, index) {
    if (index % 3 == 1) {
      if (char != "O") return count + 1;
    } else if (char != "S") return count + 1;
    return count;
  }, 0);
}
console.log(marsExploration("SOSSPSSQSSOR"));
