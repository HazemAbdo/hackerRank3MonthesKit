function addComa(str) {
  //remove space and add comma
  return str.replace(/\s/g, ",");
}
console.log(
  addComa(
    "-20 -3916237 -357920 -3620601 7374819 -7330761 30 6246457 -6461594 266854"
  )
);
