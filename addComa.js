function addComa(str) {
  //remove space and add comma
  return str.replace(/\s/g, ",");
}
console.log(
  addComa(
    "41 34 46 9 37 32 42 21 7 13 1 24 3 43 2 23 8 45 19 30 29 18 35 11"
  )
);
