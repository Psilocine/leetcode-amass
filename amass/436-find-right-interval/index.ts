/**
 * 二分查找
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(n)
 * @param intervals {number[][]}
 * @returns {number[]}
 */
export function findRightInterval(intervals: number[][]): number[] {
  const n = intervals.length;
  const startIntervals: number[][] = new Array(n)
    .fill(0)
    .map(() => new Array(2).fill(0));
  for (let i = 0; i < n; i++) {
    startIntervals[i][0] = intervals[i][0];
    startIntervals[i][1] = i;
  }

  // 排序
  startIntervals.sort((a, b) => a[0] - b[0]);

  const ans: number[] = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let left = 0;
    let right = n - 1;
    let target = -1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (startIntervals[mid][0] >= intervals[i][1]) {
        target = startIntervals[mid][1];
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    ans[i] = target;
  }

  return ans;
}
