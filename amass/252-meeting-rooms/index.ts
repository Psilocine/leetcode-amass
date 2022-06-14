/**
 * 排序 + 遍历
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(1)
 * @param intervals {number[][]}
 * @returns {boolean}
 */
export function canAttendMeetings(intervals: number[][]): boolean {
  // 开始时间 升序排列
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i - 1][1] > intervals[i][0]) {
      return false;
    }
  }

  return true;
}
