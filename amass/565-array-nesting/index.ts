/**
 * 图
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums {number[]}
 * @returns {number}
 */
export function arrayNesting(nums: number[]): number {
  let ans = 0,
    n = nums.length;

  const vis: boolean[] = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    let cnt = 0;
    while (!vis[i]) {
      vis[i] = true;
      i = nums[i];
      ++cnt;
    }
    ans = Math.max(ans, cnt);
  }
  return ans;
}

/**
 * 原地标记
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number}
 */
export function arrayNesting2(nums: number[]): number {
  let ans = 0,
    n = nums.length;

  for (let i = 0; i < n; i++) {
    let cnt = 0;
    while (nums[i] < n) {
      const num = nums[i];
      nums[i] = n;
      i = num;
      ++cnt;
    }
    ans = Math.max(ans, cnt);
  }
  return ans;
}
