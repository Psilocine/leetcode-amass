/**
 * 双指针 + 一次遍历
 * @desc 时间复杂度 O(n) 空间复杂度 O(1)
 * @param arr {number[]}
 * @returns {boolean}
 */
export function validMountainArray(arr: number[]): boolean {
  if (arr.length < 3) return false;
  const n = arr.length;
  let l = 0,
    r = n - 1;

  while (l < n && arr[l] < arr[l + 1]) l++;

  while (r > 0 && arr[r] < arr[r - 1]) r--;

  if (l === r && l !== 0 && r !== n - 1) return true;
  return false;
}
