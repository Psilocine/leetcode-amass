/**
 * 模拟
 * @desc 时间复杂度 O(n ^ 3) 空间复杂度 O(n ^ 3)
 * @param s {string}
 * @returns {string[]}
 */
export function ambiguousCoordinates(s: string): string[] {
  const ans: string[] = [];
  const str: string = s.replace(/[()]/g, "");
  const n: number = str.length;

  for (let i = 1; i < n; i++) {
    const left = backtracking(str.slice(0, i));
    const right = backtracking(str.slice(i));

    for (let ch_l of left) {
      for (let ch_r of right) {
        ans.push(`(${ch_l}, ${ch_r})`);
      }
    }
  }

  return ans;
}

function backtracking(s: string): string[] {
  let ans: string[] = [];
  const n: number = s.length;

  if (n === 1) {
    ans.push(s);
    return ans;
  }
  if (s.charAt(0) === "0" && s.charAt(n - 1) === "0") {
    return ans;
  }

  if (s.charAt(0) === "0") {
    ans.push(`0.${s.slice(1)}`);
    return ans;
  }

  if (s.charAt(n - 1) === "0") {
    ans.push(s);
    return ans;
  }

  ans.push(s);

  // 加小数点
  for (let i = 1; i < n; i++) {
    ans.push(`${s.slice(0, i)}.${s.slice(i)}`);
  }

  return ans;
}
