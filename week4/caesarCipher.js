function caesarCipher(s, k) {
  // Write your code here
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let ascii = 0;
  let cipher = "";
  for (let i = 0; i < s.length; i++) {
    ascii = s[i].charCodeAt(0);
    if (ascii >= 65 && ascii <= 90) {
      cipher += alphabet[(ascii - 65 + k) % 26].toLocaleUpperCase();
    } else if (ascii >= 97 && ascii <= 122) {
      cipher += alphabet[(ascii - 97 + k) % 26];
    } else cipher += s[i];
  }
}
