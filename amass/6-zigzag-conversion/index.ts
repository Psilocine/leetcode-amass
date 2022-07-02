/**
 * 模拟
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param s {string}
 * @param numRows {number}
 * @returns {string}
 */
export function convert(s: string, numRows: number): string {
  if (numRows < 2) return s;
  let j = 0,
    flag = -1;

  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push([]);
  }

  for (let i = 0; i < s.length; i++) {
    rows[j].push(s.charAt(i));
    if (j == 0 || j == numRows - 1) flag = -flag;
    j += flag;
  }

  let res = "";

  for (let i = 0; i < rows.length; i++) {
    res += rows[i].toString();
  }

  return res.split(",").join("");
}
