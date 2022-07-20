function balancedSums(arr) {
  // Write your code here
  //NOTE take care of case of one element e.g[1]
  let rightHandSum = [0];
  let sum = 0;
  let result = "NO";
  //right hand loop
  for (let i = arr.length - 1; i > 0; i--) {
    sum += arr[i];
    rightHandSum[i - 1] = sum;
  }
  //left hand loop
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (sum == rightHandSum[i]) {
      result = "YES";
      break;
    }
    sum += arr[i];
  }
  return result;
}
balancedSums([1, 2, 3, 4, 5]);
