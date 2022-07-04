/**
 * 排序 + 一次遍历
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(logn)
 * @param arr {number[]}
 * @returns {number[][]}
 */
export function minimumAbsDifference(arr: number[]): number[][] {
  arr.sort((a, b) => a - b);
  let ans: number[][] = [];
  let min = Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    const best = Math.abs(arr[i] - arr[i + 1]);
    if (best === min) {
      ans.push([arr[i], arr[i + 1]]);
    } else if (best < min) {
      min = best;
      ans = [];
      ans.push([arr[i], arr[i + 1]]);
    }
  }

  return ans;
}
