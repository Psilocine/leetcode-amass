/**
 * 双指针
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @returns {number[]}
 */
export function sortedSquares(nums: number[]): number[] {
  let k = nums.length - 1;
  let left = 0;
  let right = k;
  const ans: number[] = new Array(k + 1);

  while (left <= right) {
    const leftPow = Math.pow(nums[left], 2);
    const rightPow = Math.pow(nums[right], 2);
    if (leftPow > rightPow) {
      ans[k--] = leftPow;
      left++;
    } else {
      ans[k--] = rightPow;
      right--;
    }
  }

  return ans;
}
