// function rotateLeft(d, arr) {
//   // Write your code here
//   return [...arr.slice(d), ...arr.slice(0, d)];
// }
function rotateLeft(d, arr) {
  for (let i = 0; i < d; i++) {
    arr.push(arr.shift());
  }
  return arr;
}
console.log(rotateLeft(3, [1, 2, 3, 4, 5]));
console.log(rotateLeft(1, [1, 2, 3, 4, 5]));
