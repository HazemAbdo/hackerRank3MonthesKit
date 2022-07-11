function plusMinus(arr) {
  const [pos, neg, zero] = arr.reduce(
    (previous, current) => {
      if (current > 0) return [previous[0] + 1, previous[1], previous[2]];
      else if (current < 0) return [previous[0], previous[1] + 1, previous[2]];
      else return [previous[0], previous[1], previous[2] + 1];
    },
    [0, 0, 0]
  );
  console.log((pos / arr.length).toFixed(6));
  console.log((neg / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
}
plusMinus([1, 1, -1, -1, 0]);
plusMinus( [-4, 3, -9, 0, 4, 1]);
