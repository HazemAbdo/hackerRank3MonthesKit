function lonelyinteger(a) {
  // Write your code here
  let map = new Map();
  //O(n)
  a.forEach((element) => {
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  });
  //O(n)
  for (let [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }
}

//NOTE Given an array of integers, where all elements but one occur twice, find the unique element.
//so we can solve it using xor as a^a = 0 and a^a^b=0^b=b
function lonelyinteger(a) {
  let res = 0;
  a.forEach((element) => {
    res ^= element;
  });
  return res;
}
console.log(lonelyinteger([1, 1, 2]));
console.log(lonelyinteger([1, 1, 2, 3, 3]));
