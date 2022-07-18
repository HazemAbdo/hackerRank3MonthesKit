function dynamicArray(n, queries) {
  // Write your code here
  let arr = [];
  for (var i = 0; i < n; i++) {
    arr[i] = [];
  }
  let lastAnswer = 0;
  let anArr = new Array();
  let idx = 0;
  queries.forEach(function (query) {
    console.log("query[0]", query[0]);
    let x = query[1];
    console.log("x", x);
    let y = query[2];
    console.log("y ", y);
    if (query[0] == 1) {
      idx = (x ^ lastAnswer) % n;
      console.log("idx", idx);
      arr[idx].push(y);
      console.log("arr[idx]", arr[idx]);
    } else {
      idx = (x ^ lastAnswer) % n;
      lastAnswer = arr[idx][y % arr[idx].length];
      console.log(
        "arr[idx][y % arr[idx].length]",
        arr[idx][y % arr[idx].length]
      );
      anArr.push(lastAnswer);
      console.log("anArr", anArr);
    }
  });
  return anArr;
}
