/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let string = x.toString();
  let normal = string.split("");
  let rev = normal.reverse().join("");
  return parseInt(rev) === x ? true : false;
};
