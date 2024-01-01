let result = [];
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.lenth; j++) {
    if (nums[i] + nums[j] === target) {
      result.push(i, j);
    } else {
      continue;
    }
  }
}
return result;
