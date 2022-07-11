function miniMaxSum(arr) {
  const [min, max] = arr
    .sort((a, b) => a - b)
    .reduce(
      (previous, current, index) => {
        return index == 0
          ? [previous[0] + current, previous[1]]
          : index == 4
          ? [previous[0], previous[1] + current]
          : [previous[0] + current, previous[1] + current];
      },
      [0, 0]
    );
  console.log(min, max);
}
miniMaxSum([7, 1, 5, 2, 3]);
