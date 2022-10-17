/**
 * 滑动窗口
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param fruits {number[]}
 * @returns {number}
 */
export function totalFruit(fruits: number[]): number {
  const n: number = fruits.length;
  const window: Map<number, number> = new Map();

  let ans: number = 0;
  let left = 0,
    right = 0;

  while (right < n) {
    window.set(fruits[right], (window.get(fruits[right]) || 0) + 1);

    while (window.size > 2) {
      window.set(fruits[left], window.get(fruits[left]) - 1);
      if (window.get(fruits[left]) === 0) {
        window.delete(fruits[left]);
      }
      left++;
    }
    ans = Math.max(ans, right - left + 1);
    right++;
  }

  return ans;
}
