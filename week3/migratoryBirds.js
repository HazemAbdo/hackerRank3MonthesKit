function migratoryBirds(arr) {
  let typesCounter = new Array(5).fill(0);
  let id = -1;
  let max = 0;
  arr.forEach((element) => {
    typesCounter[element - 1]++;
  });
  typesCounter.forEach((element, index) => {
    if (element > max) {
      max = element;
      id = index + 1;
    }
  });
  return id;
}
console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
console.log(migratoryBirds([1, 1, 2, 2, 3, 3]));
