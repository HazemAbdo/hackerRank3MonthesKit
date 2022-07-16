function sockMerchant(n, ar) {
  let map = new Map();
  let pairs = 0;
  ar.forEach((element) => {
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
      if (map.get(element) % 2 === 0) {
        pairs++;
      }
    } else map.set(element, 1);
  });
  return pairs;
}
