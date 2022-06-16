/**
 * 排序 + 二分
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(logn)
 * @param nums {number[]}
 * @param k {number}
 * @returns {number}
 */
export function findPairs(nums: number[], k: number): number {
  let ans: number = 0;
  const n: number = nums.length;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 1; i++) {
    // 去重
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    // 设置左右指针
    let l = i + 1,
      r = n - 1;
    while (l <= r) {
      const c = l + Math.floor((r - l) / 2);

      const ret = nums[c] - nums[i];
      if (ret === k) {
        ans++;
        break;
      } else if (ret < k) {
        l = c + 1;
      } else {
        r = c - 1;
      }
    }
  }

  return ans;
}
