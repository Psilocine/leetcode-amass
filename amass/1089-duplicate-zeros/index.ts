/**
 * 一次遍历
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param arr {number[]}
 * @returns {number[]}
 */
export function duplicateZeros(arr: number[]): number[] {
  const n: number = arr.length;
  for (let i: number = 0; i < n; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      // 避免重复写 0，手动调整索引
      i++;
    }
  }

  // 长度调整，在循环里 pop 也可以
  arr.length = n;
  return arr;
}

/**
 * 栈思想辅助
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param arr {number[]}
 * @returns {number[]}
 */
export function duplicateZeros2(arr: number[]): number[] {
  const n: number = arr.length;
  let i = 0, j = 0;
  while(j < n) {
    if (arr[i] === 0) {
      j++;
    }
    i++;
    j++;
  }
  i--;
  j--;
  while(i >= 0) {
    arr[j] = arr[i];
    if (arr[i] === 0 && --j >= 0) {
      arr[j] = 0;
    }
    i--;
    j--
  }
  return arr;
}
