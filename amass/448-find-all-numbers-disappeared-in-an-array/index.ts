/**
 * 排序
 * 要求空间复杂度 O(1) 利用 sort 再根据 index + 1 是否等于 value 得出
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums { number[] }
 * @return { number[] }
 */
export function findDisappearedNumbers(nums: number[]): number[] {
  nums = nums.sort();

  const res: number[] = [];

  nums.forEach((value: number, idx: number) => {
    if (!nums.includes(idx + 1) && value !== idx + 1) {
      res.push(idx + 1);
    }
  });

  return res;
}

/**
 * 求模
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param nums { number[] }
 * @return { number[] }
 */
export function findDisappearedNumbers2(nums: number[]): number[] {
  const res: number[] = [];
  const len = nums.length;

  // 求模后往当前的索引加上 len，遍历时如果没有超过 len 的值，说明当前值不存在
  nums.forEach((item: number) => {
    const idx = (item - 1) % len;
    nums[idx] += len;
  })

  nums.forEach((item: number, index: number) => {
    if (item <= len) {
      res.push(index + 1)
    }
  })

  return res;
}
