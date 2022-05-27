/**
 * 左右前缀乘积
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums {number[]}
 * @returns {number[]}
 */
export function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const ans = new Array(n);
  const preLeft = new Array(n);
  const preRight = new Array(n);

  // 右侧乘积的第一个数是 1，因为它左边没有值
  preRight[0] = 1;
  for (let i = 1; i < n; i++) {
    preRight[i] = nums[i - 1] * preRight[i - 1];
  }
  // 左侧乘积的最后一个数是 1，因为它右边没有值
  preLeft[n - 1] = 1;
  for (let i = n - 2; i >= 0; --i) {
    preLeft[i] = nums[i + 1] * preLeft[i + 1];
  }

  for (let i = 0; i < n; i++) {
    ans[i] = preLeft[i] * preRight[i];
  }

  return ans;
}

/**
 * 左右前缀乘积，优化
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number[]}
 */
export function productExceptSelf2(nums: number[]): number[] {
  const n = nums.length;
  const ans = new Array(n); // 输出数组不视为额外空间

  ans[0] = 1;
  for (let i = 1; i < n; i++) {
    ans[i] = nums[i - 1] * ans[i - 1];
  }

  let R = 1;
  for (let i = n - 1; i >= 0; --i) {
    ans[i] = ans[i] * R;
    R *= nums[i];
  }

  return ans;
}
