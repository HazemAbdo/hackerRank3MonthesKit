function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  //   x1+nv1==?x2+nv2
  let n = (x1 - x2) / (v2 - v1);
  return Number.isInteger(n) && n > 0 ? "YES" : "NO";
}
