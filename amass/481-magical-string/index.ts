/**
 * 双指针
 * @desc 时间复杂度 O(n) 空间复杂度 O(n)
 * @param n {number}
 * @returns {number}
 */
export function magicalString(n: number): number {
  let ans: number = 1;
  if (n < 4) {
    return ans;
  }
  const s: string[] = new Array(n).fill("");
  s[0] = "1";
  s[1] = "2";
  s[2] = "2";
  let p = 2;
  let tail = 3;

  while (tail < n) {
    let size = s[p].charCodeAt(0) - "0".charCodeAt(0);
    const num = 3 - (s[tail - 1].charCodeAt(0) - "0".charCodeAt(0));
    while (size > 0 && tail < n) {
      s[tail] = String.fromCharCode("0".charCodeAt(0) + num);
      if (num === 1) {
        ans++;
      }
      ++tail;
      --size;
    }
    ++p;
  }

  return ans;
}
