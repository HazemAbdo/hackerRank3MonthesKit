function getAllSubstrings(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}
function sherlockAndAnagrams(s) {
  let allPossibleSubstrings = getAllSubstrings(s);
  let map = new Map();
  let sortedVersionOfSubString = "";
  let pairsCounter = 0;
  //let pairsCounterAlternative = 0;
  for (let i = 0; i < allPossibleSubstrings.length; i++) {
    //we sort so that all angrams will be the same
    sortedVersionOfSubString = allPossibleSubstrings[i]
      .split("")
      .sort()
      .join("");
    if (!map.has(sortedVersionOfSubString)) {
      map.set(sortedVersionOfSubString, 1);
    } else {
      // pairsCounterAlternative += map.get(sortedVersionOfSubString);
      map.set(sortedVersionOfSubString, map.get(sortedVersionOfSubString) + 1);
    }
  }
  //if we use pairsCounterAlternative then no need for this loop
  for (const [, freq] of map) {
    if (freq > 1) {
      //REF https://stackoverflow.com/questions/18859430/how-do-i-get-the-total-number-of-unique-pairs-of-a-set-in-the-database#:~:text=To%20find%20the%20number%20of,of%20items%20in%20the%20set.
      pairsCounter += (freq * (freq - 1)) / 2;
    }
  }
  return pairsCounter;
}
console.log(sherlockAndAnagrams("MOM"));
console.log(sherlockAndAnagrams("MOMO"));
console.log(sherlockAndAnagrams("cdcd"));
console.log(sherlockAndAnagrams("ifailuhkqq"));
console.log(sherlockAndAnagrams("kkkk"));
