/**
 * 模拟
 * 从给定的 4 个定点选 3 个定点，检查能否形成直角三角形
 * @desc 时间复杂度 O(1) 空间复杂度 O(1)
 * @param a {number[]}
 * @param b {number[]}
 * @param c {number[]}
 * @param d {number[]}
 * @return {boolean}
 */
export function validSquare(
  a: number[],
  b: number[],
  c: number[],
  d: number[]
): boolean {
  let len = -1;

  const calc = (a: number[], b: number[], c: number[]): boolean => {
    const l1 = (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2;
    const l2 = (a[0] - c[0]) ** 2 + (a[1] - c[1]) ** 2;
    const l3 = (b[0] - c[0]) ** 2 + (b[1] - c[1]) ** 2;
    const ok =
      (l1 == l2 && l1 + l2 == l3) ||
      (l1 == l3 && l1 + l3 == l2) ||
      (l2 == l3 && l2 + l3 == l1);
    if (!ok) return false;
    if (len == -1) len = Math.min(l1, l2);
    else if (len == 0 || len != Math.min(l1, l2)) return false;
    return true;
  };

  return calc(a, b, c) && calc(a, b, d) && calc(a, c, d) && calc(b, c, d);
}
