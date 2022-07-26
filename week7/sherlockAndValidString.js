//TODO refactor this code (no need to frequency the counts)
function isValid(s) {
  // Write your code here
  //count number of characters with freq less than max freq
  let count = new Array(26).fill(0);
  let counter = 0;
  //2 0 2 0 0 0 0 3 0 ......
  for (let i = 0; i < s.length; i++) {
    count[s[i].charCodeAt(0) - 97]++;
  }
  count = count.sort((a, b) => a - b);
  count = count.filter((x) => x !== 0);
  //2 2 3
  //map that stores the frequency the count
  let map = new Map();
  for (let i = 0; i < count.length; i++) {
    if (map.has(count[i])) {
      map.set(count[i], map.get(count[i]) + 1);
    } else {
      map.set(count[i], 1);
    }
  }
  //get MAX freq of counts
  let maxFreq = Math.max(...map.values());
  //get the count of max freq
  let countWithMaxFreq = 0;
  for (const [key, value] of map) {
    if (value == maxFreq) {
      countWithMaxFreq = key;
    }
  }
  //check number of counts less than max
  for (let i = 0; i < count.length; i++) {
    //if difference equals to max freq+1 so no problem we can make it equal to max freq
    //if count is 1 no problem we can remove it
    if (Math.abs(countWithMaxFreq - count[i]) == 1 || count[i] == 1) {
      counter++;
      //we can make only one modification
      if (counter > 1) {
        return "NO";
      }
    }
    //if difference is more than max freq+1 we can't make it equal to max freq with one modification
    else if (Math.abs(countWithMaxFreq - count[i]) > 1) {
      return "NO";
    }
  }

  return "YES";
}

console.log(
  isValid(
    "ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd"
  )
);
