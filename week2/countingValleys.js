function countingValleys(steps, path) {
  // Write your code here
  //0 to negative change is considered on valley
  //U +1 D -1
  let current = 0;
  let previous = 0;
  let valleyNum = 0;
  for (let index = 0; index < steps; index++) {
    current += path[index] == "U" ? 1 : -1;
    if (previous == 0 && current < 0) valleyNum++;
    previous = current;
  }
  return valleyNum;
}
console.log(countingValleys(9, "UDDDUDUUD"));
