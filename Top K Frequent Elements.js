/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let result = [];
  let mostFrequent = new Map();
  for (let i = 0; i < nums.length; i++) {
    mostFrequent.set(nums[i], (mostFrequent.get(nums[i]) || 0) + 1);
  }
  let sortedArray = [...mostFrequent.entries()].sort((a, b) => b[1] - a[1]);
  for (let j = 0; j < k; j++) {
    result.push(sortedArray[j][0]);
  }
  return result;
};
