/**
 * 模拟上车下车
 * @desc 时间复杂度 O(nlogn) 空间复杂度 O(n)
 * @param intervals {number[][]}
 * @returns {number}
 */
export function minMeetingRooms(intervals: number[][]): number {
  const n = intervals.length;
  const bus: number[][] = [];
  for (let i = 0; i < n; i++) {
    // 上车
    bus.push([intervals[i][0], 1]);
    // 下车
    bus.push([intervals[i][1], -1]);
  }
  // 按时间升序，时间相同先下车再上车
  bus.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let people: number = 0;
  let maxPeople: number = 0;

  for (let i = 0; i < bus.length; i++) {
    people += bus[i][1];
    maxPeople = Math.max(people, maxPeople);
  }

  return maxPeople;
}
