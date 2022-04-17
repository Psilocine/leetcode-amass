/**
 * 哈希表
 *
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums {number[]}
 * @return {number}
 */
export function majorityElement(nums: number[]): number {
  const map: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    const item = map.get(nums[i]) || 0;

    if (item >= Math.floor(nums.length / 2)) {
      return nums[i];
    } else {
      map.set(nums[i], item ? item + 1 : 1);
    }
  }
}

/**
 * 排序
 * 先单调递增排序， n/2 下标的元素一定是众数
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(logn)
 * @param nums {number[]}
 * @return {number}
 */
export function majorityElement2(nums: number[]): number {
  nums = nums.sort();

  return nums[Math.floor(nums.length / 2)];
}
