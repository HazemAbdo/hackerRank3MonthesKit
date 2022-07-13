function breakingRecords(scores) {
  // Write your code here
  let [min, max] = [scores[0], scores[0]];
  return scores.reduce(
    (previous, current) => {
      if (current < min) {
        min = current;
        return [previous[0], previous[1] + 1];
      } else if (current > max) {
        max = current;
        return [previous[0] + 1, previous[1]];
      }
      return [previous[0], previous[1]];
    },
    [0, 0]
  );
}
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
