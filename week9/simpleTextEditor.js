function append(string1, string2) {
  return string1 + string2;
}
function deleteLastKChar(str, k) {
  return str.slice(0, -k);
}
function printK(str, k) {
  console.log(str[k - 1]);
}
function processData(input) {
  //Enter your code here
  //I will store the reverse of the operation in the stack to handle undo
  let inputArray = input.split("\n");
  let numOfOperations = +inputArray[0];
  let currentOperation;
  let string = "";
  let deletedString = "";
  let lastOperation;
  let stack = new Array();
  for (let i = 1; i < numOfOperations + 1; i++) {
    currentOperation = inputArray[i].split(" ");
    if (currentOperation[0] === "1") {
      stack.push(string);
      string = append(string, currentOperation[1]);
    } else if (currentOperation[0] === "2") {
      stack.push(string);
      string = deleteLastKChar(string, +currentOperation[1]);
    } else if (currentOperation[0] === "3") {
      printK(string, +currentOperation[1]);
    } else if (currentOperation[0] === "4") {
      string = stack.pop();
    }
  }
}
console.log(
  processData(
    `10
1 lchbfcjtfpsmjrqsdgci
3 19
1 cpcvixlm
1 apdjgjydvpbpvyiy
2 29
4
4
3 9
4
4`
  )
);
