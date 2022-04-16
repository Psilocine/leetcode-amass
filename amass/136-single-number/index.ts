/**
 * 哈希表
 * 集合 set 同理
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param nums
 * @return {number}
 */
export function singleNumber(nums: number[]): number {
  const map = new Map();

  nums.forEach((num) => {
    const value = map.get(num);
    if (value) {
      map.set(num, value + 1);
    } else {
      map.set(num, 1);
    }
  });

  // 找到值为 1
  for (const [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }
}

/**
 * 异或
 * a⊕b⊕a = b⊕a⊕a = b⊕(a⊕a) = b⊕0 = b
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums
 * @return {number}
 */
export function singleNumber2(nums: number[]): number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    result ^= item;
  }

  return result;
}
