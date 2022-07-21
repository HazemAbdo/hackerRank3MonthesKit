function misereNim(s) {
  // Write your code here
  //calculate nim sum of s
  let nimSum = 0;
  for (let i = 0; i < s.length; i++) {
    nimSum ^= s[i];
  }
  if (Math.max(...s) === 1) {
    return s.length % 2 === 0 ? "First" : "Second";
  } else {
    return nimSum != 0 ? "First" : "Second";
  }
}
