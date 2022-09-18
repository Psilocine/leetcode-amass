/**
 * 模拟
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(n)
 * @param nums {number[]}
 * @returns {number[]}
 */
export function frequencySort(nums: number[]): number[] {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const list = [...nums];
  list.sort((a, b) => {
    const cnt1 = map.get(a),
      cnt2 = map.get(b);
    return cnt1 !== cnt2 ? cnt1 - cnt2 : b - a;
  });

  for (let i = 0; i < nums.length; i++) {
    nums[i] = list[i];
  }

  return nums;
}
