/**
 * 暴力求解
 * @desc 时间复杂度 O(n ^ 2) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number}
 */
export function minMoves(nums: number[]): number {
  const n = nums.length;
  if (n === 1) {
    return 0;
  }
  let ans = Infinity;

  for (let i = 0; i < n; i++) {
    const base = nums[i];
    let sum = 0;
    for (let j = 0; j < n; j++) {
      sum += Math.abs(nums[j] - base);
    }

    ans = Math.min(ans, sum);
  }

  return ans;
}

/**
 * 排序
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(logn)
 * @param nums {number[]}
 * @returns {number}
 */
export function minMoves2(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let ans = 0;
  let x = nums[Math.floor(n / 2)];
  for (let i = 0; i < n; i++) {
    ans += Math.abs(nums[i] - x);
  }
  return ans;
}
