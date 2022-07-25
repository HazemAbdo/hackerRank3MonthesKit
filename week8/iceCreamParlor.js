function icecreamParlor(m, arr) {
  // Write your code here
  //make a map from index to value
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
  }
  let firstInd = 0;
  let complement = 0;
  for (let i = 0; i < arr.length; i++) {
    //take care if you didn't add && i !== map.get(m - arr[i])
    //console.log(icecreamParlor(4, [2, 1, 3]));
    //will result [1,1] kaaaaaaaaak
    if (map.has(m - arr[i]) && i !== map.get(m - arr[i])) {
      firstInd = i + 1;
      complement = map.get(m - arr[i]) + 1;
      break;
    }
  }
  return [firstInd, complement].sort((a, b) => a - b);
}
console.log(icecreamParlor(4, [1, 4, 5, 3]));
console.log(icecreamParlor(4, [2, 2, 4, 3]));
console.log(icecreamParlor(4, [1, 2, 3, 4]));
console.log(icecreamParlor(4, [4, 0, 3, 4, 5]));
console.log(icecreamParlor(4, [4, 0, 3, 4, 5]));
console.log(icecreamParlor(4, [2, 1, 3]));
