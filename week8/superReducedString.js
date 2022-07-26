//recursive solution
// function superReducedString(s) {
//   // Write your code here
//   if (s.length == 0) return "Empty String";
//   for (let i = 0; i < s.length - 1; i++) {
//     if (s[i] == s[i + 1]) {
//       if (i == 0) s = s.slice(i + 2);
//       else if (i + 1 == s.length - 1) s = s.slice(0, i);
//       else s = s.slice(0, i) + s.slice(i + 2);
//       return superReducedString(s);
//     }
//   }
//   return s;
// }
//-------------------iterative solution---------------------
function superReducedString(s) {
  // Write your code here
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] == s[i + 1]) {
      if (i == 0) s = s.slice(i + 2);
      else if (i + 1 == s.length - 1) s = s.slice(0, i);
      else s = s.slice(0, i) + s.slice(i + 2);
      i = -1;
    }
  }
  if (s.length == 0) return "Empty String";
  else return s;
}
console.log(superReducedString("aaabccddd"));
console.log(superReducedString("baab"));
console.log(superReducedString("aa"));
console.log(superReducedString(""));
console.log(superReducedString("a"));
console.log(superReducedString("baaaabccddddbaab"));
