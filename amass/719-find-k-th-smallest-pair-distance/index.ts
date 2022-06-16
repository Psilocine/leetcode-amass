/**
 * 排序 + 二分查找
 * @desc 时间复杂度 O(n * (logn + logD)) 空间复杂度 O(logn) D = max(nums) - min(nums)
 * @param nums {number[]}
 * @param k {number}
 * @returns {number}
 */
export function smallestDistancePair(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let left = 0,
    right = nums[n - 1] - nums[0];
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;
    let cnt = 0;

    for (let i = 0, j = 0; j < n; j++) {
      while (nums[j] - nums[i] > mid) {
        i++;
      }
      cnt += j - i;
    }

    if (cnt >= k) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
