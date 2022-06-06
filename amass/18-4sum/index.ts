/**
 * 双指针 + 排序
 * @desc 时间复杂度 O(n ^ 3) 空间复杂度 O(logn)
 * @param nums {number[]}
 * @param target {number}
 * @returns {number[][]}
 */
export function fourSum(nums: number[], target: number): number[][] {
  // 排序
  nums.sort((a, b) => a - b);
  let ans: number[][] = [];

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          ans.push([nums[i], nums[j], nums[left], nums[right]]);

          let k = right - 1;
          while (left < k && nums[k] === nums[right]) {
            k--;
          }
          right = k;

          k = left + 1;
          while (k < right && nums[k] === nums[left]) {
            k++;
          }
          left = k;
          continue;
        } else if (sum > target) {
          let k = right - 1;
          while (left < k && nums[k] === nums[right]) {
            k--;
          }
          right = k;
        } else {
          let k = left + 1;
          while (k < right && nums[k] === nums[left]) {
            k++;
          }
          left = k;
        }
      }
    }
  }

  return ans;
}
