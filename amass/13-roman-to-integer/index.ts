/**
 * 模拟
 * 减法的规律是数值小的在数值大的左边，以此作为条件
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param s {string}
 * @returns {number}
 */
export function romanToInt(s: string): number {
  const map: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let ans: number = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    const nextChar = s.charAt(i + 1);

    if (nextChar) {
      if (map[char] < map[nextChar]) {
        ans -= map[char];
      } else {
        ans += map[char];
      }
    } else {
      ans += map[char];
    }
  }

  return ans;
}
