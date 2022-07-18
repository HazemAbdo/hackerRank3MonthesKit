function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  let count = 0;
  let lenDiff = 6 - password.length;
  let regex = /[0-9]+/;
  let regex1 = /[a-z]+/;
  let regex2 = /[A-Z]+/;
  let regex3 = /[-!@#$%^&*()+]+/;
  if (!regex.test(password)) count++;
  if (!regex1.test(password)) count++;
  if (!regex2.test(password)) count++;
  if (!regex3.test(password)) count++;
  if (lenDiff < 0) return count;
  else return Math.max(lenDiff, count);
}
console.log(minimumNumber(7, "AUzs&nV"));
