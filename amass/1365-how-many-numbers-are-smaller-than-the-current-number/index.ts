/**
 * 排序 + 遍历
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(logn)
 * @param nums {number[]}
 * @returns {number[]}
 */
export function smallerNumbersThanCurrent(nums: number[]): number[] {
  // deep copy
  const array = [...nums];

  array.sort((a, b) => a - b);
  const ans: number[] = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    ans[i] = array.indexOf(nums[i]);
  }

  return ans;
}
