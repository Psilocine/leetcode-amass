/**
 * 双指针 + 排序
 * @desc  时间复杂度 O(n ^ 2) 空间复杂度 O(logn)
 * @param nums {number[]}
 * @param target {number}
 * @returns {number}
 */
export function threeSumClosest(nums: number[], target: number): number {
  // 排序
  nums.sort((a, b) => a - b);
  let ans: number = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 去重

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === target) {
        return target;
      }

      if (Math.abs(sum - target) < Math.abs(ans - target)) {
        ans = sum;
      }

      if (sum > target) {
        let k = right - 1;
        while (left < k && nums[k] === nums[right]) {
          k--;
        }
        right = k;
      } else {
        let k = left + 1;
        while (k < right && nums[left] === nums[k]) {
          k++;
        }
        left = k;
      }
    }
  }
  return ans;
}
