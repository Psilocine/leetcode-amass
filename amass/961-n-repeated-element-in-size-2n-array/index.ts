/**
 * 哈希表
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums {number[]}
 * @returns {number}
 */
export function repeatedNTimes(nums: number[]): number {
  const map = new Map();
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (map.has(nums[i])) {
      // const value = map.get(nums[i]);
      // if (n / 2 === value + 1) {
      //   return nums[i];
      // }
      // map.set(nums[i], value + 1);

      // 如果有多个重复则用上述代码，根据题意只有一个数值会重复
      return nums[i];
    } else {
      map.set(nums[i], 1);
    }
  }
}
