function hackerLandRadioTransmitters(x, k) {
  // Write your code here
  let max = Math.max(...x);
  let min = Math.min(...x);
  let cities = new Array(max - min + 1).fill(0);
  let citiesCoverage = new Array(max - min + 1).fill(0);
  for (let i = 0; i < x.length; i++) {
    cities[x[i] - 1] = 1;
  }
  //------------------------------------

  let counter = 0;
  while (cities.includes(1)) {
    for (let i = 0; i < cities.length; i++) {
      if (cities[i] === 1) {
        let start = i - k >= 0 ? i - k : 0;
        let end = i + k < cities.length ? i + k : cities.length - 1;
        citiesCoverage[i] = cities
          .slice(start, end + 1)
          .reduce((acc, cur) => acc + cur, 0);
      }
    }
    let mostCoverage = Math.max(...citiesCoverage);
    let indexMostCoverage = citiesCoverage.indexOf(mostCoverage);
    for (let i = indexMostCoverage - k; i <= indexMostCoverage + k; i++) {
      cities[i] = 0;
      citiesCoverage[i] = 0;
    }
    counter++;
  }
  return counter;
}
console.log(hackerLandRadioTransmitters([7, 2, 4, 6, 5, 9, 12, 11], 2));
