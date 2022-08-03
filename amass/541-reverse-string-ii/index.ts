/**
 * 模拟
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param s {string}
 * @param k {number}
 * @returns {string}
 */
export function reverseStr(s: string, k: number): string {
  const n = s.length;
  const arr = Array.from(s);
  for (let i = 0; i < n; i += 2 * k) {
    // 剩余字符小于 2k 但大于等于 k 个，反转前 k 个字符
    if (i + k <= n) {
      reverse(arr, i, i + k - 1);
      continue;
    }
    // 剩余字符少于 k 个 全部反转
    reverse(arr, i, n - 1);
  }
  return arr.join("");
}

function reverse(arr: string[], left: number, right: number): void {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}
