/**
 * 双指针
 * left 左边均为非零数
 * right 遍历出非零数，与左指针的索引交换
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums {number[]}
 * @return {void} - 题目不能有返回值，本意是不能创建新数组求解，这里为了测试返回
 */
export function moveZeroes(nums: number[]): number[] {
  const n = nums.length;
  let left = 0,
    right = 0;

  while (right < n) {
    // 非零数
    if (nums[right]) {
      const temp = nums[right];
      nums[right] = nums[left];
      nums[left] = temp;
      left++; // 位置被非零数交换，索引++
    }
    right++;
  }

  return nums;
};