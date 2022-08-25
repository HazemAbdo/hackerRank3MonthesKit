function chiefHopper(arr) {
  //2(2(2(2botE-h1)-h2)-h3)-h4
  //16botE-8h1-4h2-2h3-h4>0
  //16botE>8h1+4h2+2h3+h4
  //the right hand expression can be calculated:
  //! this solution fails as 2**very large number is too large to be represented in javascript
  //   let rightHand = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     rightHand += 2 ** (arr.length - (i + 1)) * arr[i];
  //   }
  //   let botEFactor = 2 ** arr.length;
  //   let minBotE = Math.ceil(rightHand / botEFactor);
  //   return minBotE;
  //----------------------------------------------------------------------------------------------
  //botE>h1/2+h2/2+h3/2+h4/2
  //!  This answer is correct if we have infinite precision.
  //   let minBotEnergy = 0;
  //   let denominator = 2.0;
  //   for (let i = 0; i < arr.length; i++) {
  //     minBotEnergy += arr[i] / denominator;
  //     denominator *= 2;
  //   }
  //   return Math.ceil(minBotEnergy);
  //----------------------------------------------------------------------------------------------
  //* this is the solution that works
  //new=2*old-h
  //then old =(new+h)/2
  //to get minium the energy at the last step will be zero
  //then we iterate from the last step to the first step
  //each step we add (energy+h)/2
  let energy = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    energy = Math.ceil((energy + arr[i]) / 2);
  }
  return energy;
}
console.log(chiefHopper([3, 4, 3, 2, 4]));
