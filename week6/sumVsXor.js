function sumXor(n) {
  // Write your code here
  //sum is exactly like xor except in the case of 1&&1
  //1+1=0 and 1 to next column
  //1 xor 1=0 only
  //total number of numbers less than n is 2^n(num of bits in binary)-1
  //and we want to exclude ones except the MSp-->onesCount
  //so the answer would be 2 ** (bitRepresentation.length - 1 - onesCount)
  let bitRepresentation = n.toString(2);
  let onesCount = 0;
  for (let i = 1; i < bitRepresentation.length; i++) {
    if (bitRepresentation[i] == "1") onesCount++;
  }
  return 2 ** (bitRepresentation.length - 1 - onesCount);
}
console.log(sumXor(5));
console.log(sumXor(4));
console.log(sumXor(132));
console.log(sumXor(3));
