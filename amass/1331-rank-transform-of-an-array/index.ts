/**
 * 哈希表 排序
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(n)
 * @param arr {number[]}
 * @returns {number[]}
 */
export function arrayRankTransform(arr: number[]): number[] {
  const sortMap = new Map();
  const sortArr = arr.slice().sort((a, b) => a - b);
  let idx = 1;
  for (let i = 0; i < sortArr.length; i++) {
    if (sortMap.has(sortArr[i])) continue;

    sortMap.set(sortArr[i], idx++);
  }

  const ans: number[] = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    ans[i] = sortMap.get(arr[i]);
  }

  return ans;
}
