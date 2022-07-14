function gradingStudents(grades) {
  // Write your code here
  let res = [];
  grades.forEach((element) => {
    let result =
      element < 38 || element % 5 < 3 ? element : element + (5 - (element % 5));
    res.push(result);
  });
  return res;
}
console.log(gradingStudents([73, 67, 38, 33]));
