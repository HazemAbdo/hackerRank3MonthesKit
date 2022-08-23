function alternate(s) {
  let maxLength = 0;
  let currentLength = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] !== s[j]) {
        currentLength = isValidString(removeAllButAB(s, s[i], s[j]));
        if (currentLength > maxLength) {
          maxLength = currentLength;
        }
      }
    }
  }
  return maxLength;
}
function removeAllButAB(s, A, B) {
  let newString = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === A || s[i] === B) {
      newString += s[i];
    }
  }
  return newString;
}
function isValidString(s) {
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] == s[i + 1]) {
      return -1;
    }
  }
  return s.length;
}
console.log(alternate("beabeefeab"));
console.log(
  alternate(
    "cwomzxmuelmangtosqkgfdqvkzdnxerhravxndvomhbokqmvsfcaddgxgwtpgpqrmeoxvkkjunkbjeyteccpugbkvhljxsshpoymkryydtmfhaogepvbwmypeiqumcibjskmsrpllgbvc"
  )
);
console.log(
  alternate(
    "txnbvnzdvasknhlmcpkbxdvofimsvqbvkswlkrchohwuplfujvlwpxtlcixpajjpaskrnjneelqdbxtiyeianqjqaikbukpicrwpnjvfpzolcredzmfaznnzd"
  )
);
