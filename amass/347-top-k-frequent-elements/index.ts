/**
 * 哈希表 + 排序
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(logn)
 * @param nums {number[]}
 * @param k {number}
 * @returns {number[]}
 */
export function topKFrequent(nums: number[], k: number): number[] {
  const map: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  const ans = [];
  for (let [key, value] of map.entries()) {
    ans.push([key, value]);
  }

  // 排序 logn
  ans.sort((a, b) => b[1] - a[1]);

  return ans.slice(0, k).map((v) => v[0]);
}
