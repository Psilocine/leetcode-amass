/**
 * 前缀和 + 哈希表
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums {number[]}
 * @param k {number[]}
 * @returns {number}
 */
export function subarraySum(nums: number[], k: number): number {
  const map: Map<number, number> = new Map();
  map.set(0, 1);
  let ans: number = 0,
    pre: number = 0;

  for (let num of nums) {
    pre += num;

    if (map.has(pre - k)) {
      ans += map.get(pre - k);
    }
    if (map.has(pre)) {
      map.set(pre, map.get(pre) + 1);
    } else {
      map.set(pre, 1);
    }
  }

  return ans;
}
