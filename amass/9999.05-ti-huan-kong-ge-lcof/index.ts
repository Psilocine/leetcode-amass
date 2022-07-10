/**
 * 双指针
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param s {string}
 * @returns {string}
 */
export function replaceSpace(s: string): string {
  const arr = s.split("");

  // 计算空格数量
  let spaceCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") spaceCount++;
  }

  let l = arr.length - 1;
  let r = arr.length + spaceCount * 2 - 1;

  while (l >= 0) {
    if (arr[l] !== " ") {
      arr[r--] = arr[l--];
    } else {
      arr[r--] = "0";
      arr[r--] = "2";
      arr[r--] = "%";
      l--;
    }
  }

  return arr.join("");
}
