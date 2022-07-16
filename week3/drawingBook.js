function pageCount(n, p) {
  // Write your code here
  let fromFront = 0,
    fromBack = 0;
  fromBack = n % 2 == 0 ? (n - p) / 2 : (n - 1 - p) / 2;
  fromFront = (p - 1) / 2;
  return Math.min(Math.ceil(fromFront), Math.ceil(fromBack));
}
