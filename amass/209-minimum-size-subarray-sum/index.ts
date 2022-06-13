/**
 * 前缀和 + 二分查找
 * 前缀和是递增的，保证了二分的正确性
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(n)
 * @param target {number}
 * @param nums {number[]}
 * @returns {number}
 */
export function minSubArrayLen(target: number, nums: number[]): number {
  const n = nums.length;
  if (n === 0) return 0;
  const sums: number[] = new Array(n + 1).fill(0);
  let ans: number = Infinity;
  for (let i = 0; i < n; i++) {
    sums[i + 1] = sums[i] + nums[i];
  }

  for (let i = 0; i <= n; i++) {
    let ret = target + sums[i];
    let bound = binarySearch(sums, ret);
    if (bound < 0) {
      break;
    }
    if (bound <= n) {
      ans = Math.min(ans, bound - i);
    }
  }

  return ans === Infinity ? 0 : ans;
}

function binarySearch(nums: number[], target: number) {
  let left = -1,
    right = nums.length;
  while (left + 1 !== right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return right === nums.length ? -1 : right;
}
/**
 * 滑动窗口
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param target {number}
 * @param nums {number[]}
 * @returns {number}
 */
export function minSubArrayLen2(target: number, nums: number[]): number {
  let i: number = 0; // 起始位置
  let sum: number = 0;
  let ans: number = Infinity;
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j];
    while (sum >= target) {
      const subL = j - i + 1;
      ans = Math.min(ans, subL);
      sum -= nums[i];
      i++;
    }
  }

  return ans === Infinity ? 0 : ans;
}
