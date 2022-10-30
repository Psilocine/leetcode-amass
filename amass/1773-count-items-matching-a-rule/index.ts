/**
 * 模拟
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param items {string[][]}
 * @param ruleKey {string}
 * @param ruleValue {string}
 * @returns {number}
 */
export function countMatches(
  items: string[][],
  ruleKey: string,
  ruleValue: string
): number {
  const index = { type: 0, color: 1, name: 2 }[ruleKey];
  let ans: number = 0;

  for (const item of items) {
    if (item[index] === ruleValue) {
      ans++;
    }
  }
  return ans;
}
