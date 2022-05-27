/**
 *
 * @desc 时间复杂度 O() 空间复杂度 O()
 * @param nums {number[]}
 * @param k {number[]}
 * @returns {number}
 */
export function subarraySum(nums: number[], k: number): number {
  const map = new Map();
  map.set(0, 1);
  let ans = 0;
  let pre = 0;
  for (let i = 0; i < nums.length; i++) {
    pre += nums[i];
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
