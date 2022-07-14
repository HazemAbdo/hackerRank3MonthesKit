function flippingBits(n) {
  // Write your code here
  return (2 ** 32-1) - n;
}
console.log(flippingBits(0));
console.log(flippingBits(1));
console.log(flippingBits(9));
